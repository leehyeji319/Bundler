// [Import - Design]
import { Button, Box, TextField, Typography } from "@mui/material";
import Switch from "@mui/material/Switch";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// [Import - React Basic] react && props && mui
import React, { useState, useEffect } from "react";

// [Import - React-Redux]
import { useSelector, useDispatch } from "react-redux";

// [Import - Redux-action] redux-action 함수
import { actAddCard, actEditCard, actDeleteCard } from "redux/actions/makeCardAction";

// Import - Custom
import MakeBundle from "pages/make/form/makeBundle";
import MakeBundleImageUpload from "pages/make/form/makeBundleImageUpload";

function MakeProblem() {
  // ------------ Data ----------------
  // (Data 1) Store Data
  const { cardList, cardNo, editCardNumber } = useSelector((state) => state.makeReducer); // state 값 가져오기

  // (Data 2) Local Data - Card Input Data
  const [values, setValues] = useState({
    userId: "testID",
    feedTitle: "",
    feedContent: "",
    categoryId: 1,
    cardType: "card_problem",
    cardDescription: "",
    cardCommentary: "",
    cardno: null,
  });

  // (Data 3) Local - useState 버튼!!
  // Card Data
  const [editCardIndex, setEditCardIndex] = useState(-1); // 선택된 카드 인덱스 저장
  const [valid, setValid] = useState({
    isFeedTitle: false,
    isFeedContent: false,
    isCardCommentary: false,
  });
  // Bundle Data
  const [bundleToggle, setBundleToggle] = useState(false); // 번들 토글 버튼
  const [bundleForm, setBundleForm] = useState({
    userId: "testId",
    bundleThumbnail: "",
    bundleThumbnailText: "",
    feedTitle: "",
    feedContent: "",
  });

  const handleBundleChange = (data) => {
    console.log(data.value);
    const { name, value } = data;
    setBundleForm({ ...bundleForm, [name]: value });
  };

  // (Data 1 - Func) Catd Input Data Changed
  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });

    // valid
    const feedTitle = document.querySelector("#problem-title").value;
    const feedContent = document.querySelector("#problem-content").value;
    if (feedTitle.length === 0 && feedContent.length !== 0)
      setValid({ ...valid, isFeedTitle: true, isFeedContent: false });
    if (feedTitle.length !== 0 && feedContent.length === 0)
      setValid({ ...valid, isFeedTitle: false, isFeedContent: true });
    if (feedTitle.length === 0 && feedContent.length === 0)
      setValid({ ...valid, isFeedTitle: true, isFeedContent: true });
    if (feedTitle.length !== 0 && feedContent.length !== 0)
      setValid({ ...valid, isFeedTitle: false, isFeedContent: false });
  };

  // ------------ Function ----------------
  const dispatch = useDispatch(); // state와 function을 보내는 함수

  // state 초기화
  const initStateRender = () => {
    setValues({
      ...values,
      feedTitle: "",
      feedContent: "",
      cardCommentary: "",
      cardDescription: "",
    });

    // render 값 초기환
    document.querySelector("#problem-title").value = "";
    document.querySelector("#problem-content").value = "";
    document.querySelector("#problem-cardCommentary").value = "";
    document.querySelector("#problem-description").value = "";
  };

  // (Func 1) handleAdd
  const handleAdd = (e) => {
    e.preventDefault();

    // validation check
    const feedTitle = document.querySelector("#problem-title").value;
    const feedContent = document.querySelector("#problem-content").value;
    if (feedTitle.length === 0 || feedContent === 0) {
      alert("필수 입력 필요");
    } else {
      setValues({ ...values, cardno: cardNo });
      const result = actAddCard(values);
      dispatch(result);

      // 값 초기화
      initStateRender();
    }
  };

  // (Func 2) handleEdit - 카드리스트 안의 카드 수정
  const handleEdit = (event) => {
    event.preventDefault();

    // 카드가 선택 되었을때만 동작
    if (editCardIndex !== -1) {
      const result = actEditCard(editCardIndex, values);
      dispatch(result);

      // 값 초기화
      initStateRender();
      setEditCardIndex(-1);
    }
  };

  // (Func 3) handleDelete - 카드리스트 안의 카드 삭제
  const handleDelete = (event) => {
    event.preventDefault();

    // 카드가 선택 되었을때만 동작
    if (editCardIndex !== -1) {
      const result = actDeleteCard(editCardIndex);
      dispatch(result);

      // 값 초기화
      initStateRender();
    }
  };

  // (Func 4) 생성 버튼 클릭 시
  const handleCreate = (e) => {
    e.preventDefault();

    console.log(cardList);
    console.log(bundleForm);

    if (
      bundleToggle &&
      (bundleForm.bundleThumbnail.length === 0 || bundleForm.bundleThumbnailText.length === 0)
    ) {
      alert("bundle 내용 없음");
    } else if (!bundleToggle && cardList.length === 0) {
      alert("bundle 생성만 하실 경우 bundle 제목과 내용을 입력해 주세요");
    } else {
      alert("정상 생성");
      dispatch({ type: "CARD_STORE_RESET" });
    }

    // if (cardList.length === 0) {
    //   alert("카드 리스트가 비어있습니다");
    // } else {
    //   // axios POST 전달
    //   dispatch({ type: "CARD_STORE_RESET" });
    // }
  };

  // (Func Hooks) useEffect
  useEffect(() => {
    setValues({ ...values, cardno: cardNo });
  }, [cardNo]);

  useEffect(() => {
    // Component가 화면에 나타남 === mount"
    // editCardNo가 변화하게 된다면
    // cardList에서 수정할 card 정보 불러오기
    if (editCardNumber !== -1) {
      const selectedTitle = cardList[editCardNumber].feedTitle;
      const selectedContent = cardList[editCardNumber].feedContent;
      const selectedCardCommentary = cardList[editCardNumber].cardCommentary;
      const selectedDescription = cardList[editCardNumber].cardDescription;
      // component data - 값 업데이트
      setValues({
        ...values,
        feedContent: selectedTitle,
        cardDescription: selectedContent,
        cardCommentary: selectedCardCommentary,
        feedTitle: selectedDescription,
      });

      // render 값 업데이트
      document.querySelector("#problem-title").value = selectedTitle;
      document.querySelector("#problem-content").value = selectedContent;
      document.querySelector("#problem-cardCommentary").value = selectedCardCommentary;
      document.querySelector("#problem-description").value = selectedDescription;

      // 수정할 card번호 다시 초기화
      setEditCardIndex(editCardNumber);
      dispatch({ type: "INIT_CARD_NO" });
    }

    // Component가 화면에 사라짐 === unmount
    // return () => {
    // };
  }, [editCardNumber]);

  // ------------ Return ----------------
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { ml: 3, mt: 3, width: "70vw" },
        mt: 3,
      }}
      noValidate
      autoComplete="off"
    >
      <Box sx={{ mt: 2, display: "flex" }}>
        <Typography variant="h6">
          <Box sx={{ textAlign: "center", mt: 3 }}>제목</Box>
        </Typography>
        <TextField
          {...(valid.isFeedTitle ? { error: true } : {})}
          // helperText="필수 입력란"
          multiline
          rows={1}
          required
          autoFocus
          id="problem-title"
          type="text"
          name="feedTitle"
          label="Required"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleChange}
        />
      </Box>
      <Box sx={{ display: "flex" }}>
        <Typography variant="h6">
          <Box sx={{ textAlign: "center", mt: 3 }}>내용</Box>
        </Typography>
        <TextField
          {...(valid.isFeedContent ? { error: true } : {})}
          // helperText="필수 입력란"
          multiline
          rows={4}
          required
          id="problem-content"
          type="text"
          name="feedContent"
          label="Required"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleChange}
        />
      </Box>
      <Box sx={{ display: "flex" }}>
        <Typography variant="h6">
          <Box sx={{ textAlign: "center", mt: 3 }}>해답</Box>
        </Typography>
        <TextField
          // {...(valid.isCardCommentary ? { error: true } : {})}
          // helperText="필수 입력란"
          multiline
          rows={4}
          id="problem-cardCommentary"
          type="text"
          name="cardCommentary"
          label="Optional"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleChange}
        />
      </Box>
      <Box sx={{ display: "flex" }}>
        <Typography variant="h6">
          <Box sx={{ textAlign: "center", mt: 3 }}>설명</Box>
        </Typography>
        <TextField
          multiline
          rows={2}
          id="problem-description"
          type="text"
          name="cardDescription"
          label="Optional"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleChange}
        />
      </Box>
      <Box>
        <MDBox display="flex" alignItems="center" mt={3} lineHeight={1}>
          <MDTypography variant="h6">번들로 묶기</MDTypography>
          <Switch checked={bundleToggle} onChange={() => setBundleToggle(!bundleToggle)} />
        </MDBox>
      </Box>
      <MakeBundleImageUpload />
      <MakeBundle selected={bundleToggle} handleBundle={handleBundleChange} />
      <Box>
        <Button type="button" variant="contained" sx={{ m: 3 }} size="large" onClick={handleAdd}>
          추가
        </Button>
        {cardList.length !== 0 && (
          <>
            <Button
              type="button"
              variant="contained"
              sx={{ m: 3 }}
              size="large"
              onClick={handleEdit}
            >
              수정
            </Button>
            <Button
              type="button"
              variant="contained"
              sx={{ m: 3 }}
              size="large"
              onClick={handleDelete}
            >
              삭제
            </Button>
          </>
        )}
        <Button type="button" variant="contained" sx={{ m: 3 }} size="large" onClick={handleCreate}>
          생성
        </Button>
      </Box>
    </Box>
  );
}

export default MakeProblem;
