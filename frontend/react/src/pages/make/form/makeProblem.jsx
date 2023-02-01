// [Import - Design]
import { Button, Box, TextField, Typography } from "@mui/material";
import Switch from "@mui/material/Switch";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// [Import - React Basic] react && props && mui
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

// [Import - React-Redux]
import { useSelector, useDispatch } from "react-redux";

// [Import - Redux-action] redux-action 함수
import { actAddCard, actEditCard, actDeleteCard } from "redux/actions/makeCardAction";

// BundleForm Template
function BundleForm({ selected, handleChange }) {
  return (
    <Box mt={3}>
      {selected === true && (
        <Box sx={{ display: "flex" }}>
          <Typography variant="h6">
            <Box sx={{ textAlign: "center", mt: 3 }}>번들 제목</Box>
          </Typography>
          <TextField
            multiline
            rows={1}
            required
            autoFocus
            id="bundle-title"
            type="text"
            name="bundleTitle"
            label="Required"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleChange}
          />
        </Box>
      )}
    </Box>
  );
}

// Typechecking props for the SelectedCategory
BundleForm.propTypes = {
  selected: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
};

function MakeProblem() {
  // ------------ Data ----------------
  // (Data 1) Store Data
  const { cardList, cardNo, editCardNumber } = useSelector((state) => state.makeReducer); // state 값 가져오기

  // (Data 2) Local Data - Card Input Data
  const [values, setValues] = useState({
    userId: "testID",
    feedType: "Card",
    feedTitle: "",
    feedContent: "",
    categoryFirst: "",
    categorySecond: "",
    cardno: null,
    cardType: "card_general",
    cardDescription: "",
    cardCommentary: "",
    bundleTitle: "",
  });

  // (Data 3) Local - useState 버튼!!
  const [bundleToggle, setBundleToggle] = useState(false); // 번들 토글 버튼
  const [editCardIndex, setEditCardIndex] = useState(0); // 선택된 카드 인덱스 저장

  // (Data 1 - Func) Catd Input Data Changed
  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  // ------------ Function ----------------
  const dispatch = useDispatch(); // state와 function을 보내는 함수

  const initStateRender = () => {
    // const initStateList = ["feedTitle", "feedContent", "cardDescription"];
    // component data - 값 초기화
    // initStateList.forEach((name) => setValues({ ...values, [name]: "" }));
    setValues({
      ...values,
      feedContent: "",
      cardDescription: "",
      feedTitle: "",
    });
    // setValues({ ...values, cardDescription: "" });
    // setValues({ ...values, feedTitle: "" });

    // render 값 초기환
    document.querySelector("#problem-title").value = "";
    document.querySelector("#problem-content").value = "";
    document.querySelector("#problem-description").value = "";
  };

  // (Func 1) handleAdd
  const handleAdd = (e) => {
    e.preventDefault();

    // store data - cardList에 card추가
    const result = actAddCard(values);
    dispatch(result);

    // 값 초기화
    initStateRender();
  };

  // (Func 2) handleEdit - 카드리스트 안의 카드 수정
  const handleEdit = (event) => {
    event.preventDefault();

    const result = actEditCard(editCardIndex, values);
    dispatch(result);

    // 값 초기화
    initStateRender();
  };

  // (Func 3) handleDelete - 카드리스트 안의 카드 삭제
  const handleDelete = (event) => {
    event.preventDefault();

    const result = actDeleteCard(editCardIndex);
    dispatch(result);

    // 값 초기화
    initStateRender();
  };

  // (Func 4) 생성 버튼 클릭 시
  const handleCreate = (e) => {
    e.preventDefault();

    console.log(values);
    console.log(cardList);

    if (cardList.length === 0) {
      alert("카드 리스트가 비어있습니다");
    } else {
      // axios POST 전달
      dispatch({ type: "CARD_STORE_RESET" });
    }
  };

  // (Func 4) useEffect
  useEffect(() => {
    // Component가 화면에 나타남 === mount"
    // cardno update
    setValues({ ...values, cardno: cardNo });

    // editCardNo가 변화하게 된다면
    // cardList에서 수정할 card 정보 불러오기
    if (editCardNumber !== -1) {
      const selectedTitle = cardList[editCardNumber].feedTitle;
      const selectedContent = cardList[editCardNumber].feedContent;
      const selectedDescription = cardList[editCardNumber].cardDescription;
      // component data - 값 업데이트
      setValues({
        ...values,
        feedContent: selectedTitle,
        cardDescription: selectedContent,
        feedTitle: selectedDescription,
      });

      // render 값 업데이트
      document.querySelector("#problem-title").value = selectedTitle;
      document.querySelector("#problem-content").value = selectedContent;
      document.querySelector("#problem-description").value = selectedDescription;

      // 수정할 card번호 다시 초기화
      setEditCardIndex(editCardNumber);
      dispatch({ type: "INIT_CARD_NO" });
    }

    // Component가 화면에 사라짐 === unmount
    // return () => {
    // };
  }, [cardNo, editCardNumber]);

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
      <Typography component="h1" variant="h3">
        현재 카드 리스트
      </Typography>
      <Box sx={{ mt: 2, display: "flex" }}>
        <Typography variant="h6">
          <Box sx={{ textAlign: "center", mt: 3 }}>제목</Box>
        </Typography>
        <TextField
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
          multiline
          rows={5}
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
      <BundleForm selected={bundleToggle} handleChange={handleChange} />
      <Box>
        <Button type="button" variant="contained" sx={{ m: 3 }} size="large" onClick={handleAdd}>
          추가
        </Button>
        <Button type="button" variant="contained" sx={{ m: 3 }} size="large" onClick={handleEdit}>
          수정
        </Button>
        <Button type="button" variant="contained" sx={{ m: 3 }} size="large" onClick={handleDelete}>
          삭제
        </Button>
        <Button type="button" variant="contained" sx={{ m: 3 }} size="large" onClick={handleCreate}>
          생성
        </Button>
      </Box>
    </Box>
  );
}

export default MakeProblem;
