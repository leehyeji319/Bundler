/*
 Make Page 구성

 (1) 카드 form 선택
 (2) 카드 유형 선택
 (3) 카드 입력 폼
 (4) 번들 생성 버튼 & 번들 입력 폼
 (5) 카드 추가, 수정, 삭제, 생성 버튼
 (6) 카드 List 보여주기
 */

// React import
import React, { useState, useEffect } from "react";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MDTypography from "components/MDTypography";
import MDBox from "components/MDBox";
import MDSnackbar from "components/MDSnackbar";

// Mui-Material components
import {
  Typography,
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Radio,
  Box,
} from "@mui/material";
import Switch from "@mui/material/Switch";

// [Import - React-Redux]
import { useDispatch, useSelector } from "react-redux";
import { actAddCard, actEditCard, actDeleteCard } from "redux/actions/makeCardAction";

// Import - axios
import { apiPostCardList, apiPostCard, apiPostBundle } from "apis/api/apiMakePage";

// Import - custom
import MakeCategory from "pages/make/form/makeCategory";
import MakeProblem from "pages/make/form/makeProblem";
import MakeGeneral from "pages/make/form/makeGeneral";
import MakeLink from "pages/make/form/makeLink";
import MakeBundle from "pages/make/form/makeBundle";
import MakeButton from "pages/make/form/makeButton";
import MakeCardList from "pages/make/form/makeCardList";

function Make() {
  // ==================== Data =================================
  // Data - global
  const { cardNo, cardList, editCardNumber } = useSelector((state) => state.makeReducer); // state 값 가져오기
  const { loginInfo } = useSelector((state) => state.homeReducer);

  // Data - local
  // (1) 유형 선택 - 어떤 값은 선택햇는지 저장하는 state 값
  const [form, setForm] = useState("problem");

  // (2) category 선택
  // const [category, setCategory] = useState({
  //   type_1: "",
  //   type_2: "",
  // });

  // (3) form value 저장 CARD BUNDLE
  const [values, setValues] = useState({
    userId: loginInfo.userId,
    feedType: "CARD",
    feedTitle: "",
    feedContent: "",
    categoryId: 1,
    cardType: "CARD_PROBLEM",
    cardDescription: "",
    cardCommentary: "",
    cardno: 1,
  });
  const [editCardIndex, setEditCardIndex] = useState(-1); // 선택된 카드 인덱스 저장

  // (4) Bundle Form && Toggle
  const [bundleToggle, setBundleToggle] = useState(false); // 번들 토글 버튼
  const [bundleForm, setBundleForm] = useState({
    userId: 1,
    feedType: "BUNDLE",
    bundleThumbnail: "",
    bundleThumbnailText: "",
    feedTitle: "",
    feedContent: "",
  });

  // (*) Validation
  const [valid, setValid] = useState({
    isValid: false,
    comment: "",
    state: "",
  });

  // ==================== Function ==============================
  const dispatch = useDispatch();

  // state 초기화 - problem
  const initProblemForm = () => {
    setValues({
      ...values,
      feedTitle: "",
      feedContent: "",
      cardCommentary: "",
      cardDescription: "",
    });

    // render - problem 값 초기환
    document.querySelector("#problem-title").value = "";
    document.querySelector("#problem-content").value = "";
    document.querySelector("#problem-cardCommentary").value = "";
    document.querySelector("#problem-description").value = "";
  };

  // state 초기화 - bundle
  const initBundleForm = () => {
    setBundleForm({
      ...bundleForm,
      bundleThumbnail: "",
      bundleThumbnailText: "",
      feedTitle: "",
      feedContent: "",
    });

    // render - problem 값 초기환
    document.querySelector("#bundle-bundleThumbnail").value = "";
    document.querySelector("#bundle-bundleThumbnailText").value = "";
    document.querySelector("#bundle-feedTitle").value = "";
    document.querySelector("#bundle-feedContent").value = "";
  };

  // (1) 유형 선택 - 선택 결과를 저장하는 함수
  const handleChangeForm = (event) => {
    event.preventDefault();
    setForm(event.target.value);
  };

  // (2) category 선택 함수
  const handleCategory = (event, valueId) => {
    event.preventDefault();
    setValues({ ...values, categoryId: valueId });
  };

  // (3) form value 저장 함수
  const handleChangeValues = (event, name, value) => {
    event.preventDefault();
    setValues({ ...values, [name]: value });
  };

  // (4-1) bundle form 함수
  const handleBundleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setBundleForm({ ...bundleForm, [name]: value });
  };

  // (4-2) handleFeedtype
  const handleFeedType = (event) => {
    event.preventDefault();
    setBundleToggle(!bundleToggle);
  };

  // (5) button 함수
  // (5-1) 추가 버튼
  const handleValuesAdd = (e) => {
    e.preventDefault();

    // validation check
    const feedTitle = document.querySelector("#problem-title").value;
    const feedContent = document.querySelector("#problem-content").value;
    if (feedTitle.length === 0 || feedContent.length === 0) {
      setValid({ isValid: true, comment: "카드 입력 값을 확인해 주세요", state: "error" });
    } else {
      setValues({ ...values, cardno: cardNo });
      const result = actAddCard(values);
      dispatch(result);

      // 값 초기화
      initProblemForm();
    }
  };

  // (5-2) 수정 버튼
  const handleValuesEdit = (e) => {
    e.preventDefault();

    // 카드가 선택 되었을때만 동작
    if (editCardIndex !== -1) {
      const result = actEditCard(editCardIndex, values);
      dispatch(result);

      // 값 초기화
      initProblemForm();
      setEditCardIndex(-1);
    }
  };

  // (5-3) 삭제 버튼
  const handleValuesDelete = (e) => {
    e.preventDefault();

    // 카드가 선택 되었을때만 동작
    if (editCardIndex !== -1) {
      const result = actDeleteCard(editCardIndex);
      dispatch(result);

      // 값 초기화
      initProblemForm();
      setEditCardIndex(-1);
    }
  };

  // 카드 Form aios Controller
  const createCardController = async () => {
    // main Login
    console.log(cardList);
    const cardCnt = cardList.length;
    // 카드 일때
    if (!bundleToggle) {
      if (cardCnt === 1) {
        // 개별 생성
        console.log("카드 개별 생성");
        await apiPostCard(cardList[0]);
      } else {
        // 카드 리스트 생성
        console.log("카드 리스트 생성");
        await apiPostCardList({ cardSaveRequestDtoList: cardList });
      }
    } else {
      // 카드가 있는 번들 생성
      const bundle = { ...bundleForm, cardSaveRequestDtoList: cardList };
      console.log(bundle);
      await apiPostBundle(bundle);

      initBundleForm(); // 번들 Form 리셋
    }

    // 후속 처리
    setValid({ isValid: true, comment: "생성 되었습니다", state: "info" });
    dispatch({ type: "CARD_STORE_RESET" }); // card List 리셋
    initProblemForm(); // 카드 Form 리셋
  };

  // 생성 버튼 - Validation Check
  const handleValuesCreate = (e) => {
    e.preventDefault();

    if (
      bundleToggle &&
      (bundleForm.bundleThumbnail.length === 0 || bundleForm.bundleThumbnailText.length === 0)
    ) {
      setValid({ isValid: true, comment: "번들 필수 입력 값을 확인해 주세요", state: "error" });
    } else if (!bundleToggle && cardList.length === 0) {
      setValid({
        isValid: true,
        comment: "번들만 생성할 경우 필수 입력 값을 확인해 주세요",
        state: "error",
      });
    } else {
      // 컨트롤러 함수 호출
      createCardController();
    }
  };

  // 빈 번들 생성
  const handleEmptyBundleCreate = () => {
    console.log("빈 번들 생성 form");
    // validation
    if (
      bundleForm.bundleThumbnail.length === 0 ||
      bundleForm.bundleThumbnailText.length === 0 ||
      bundleForm.feedTitle.length === 0 ||
      bundleForm.feedContent.length === 0
    ) {
      setValid({
        isValid: true,
        comment: "번들만 생성할 경우 필수 입력 값을 확인해 주세요",
        state: "error",
      });
    } else {
      // 빈 번들만 생성
      console.log("빈 번들 생성", bundleForm);
      apiPostBundle(bundleForm);

      // 후속 처리
      setValid({ isValid: true, comment: "생성 되었습니다", state: "info" });
      initProblemForm(); // 카드 Form 리셋
      initBundleForm(); // 번들 Form 리셋
    }
  };

  // useEffect 함수
  useEffect(() => {
    setValues({ ...values, cardno: cardNo });
  }, [cardNo]);

  useEffect(() => {
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
  }, [editCardNumber]);

  // test useEffect
  const testConsoleBtn = () => {
    console.log(values);
    console.log(cardList);
  };

  // ==================== Return ==============================
  return (
    <DashboardLayout>
      <button type="button" onClick={testConsoleBtn}>
        testConSole
      </button>
      <DashboardNavbar />
      <FormControl>
        <FormLabel id="card-category-select">
          <Typography variant="h6">유형 선택</Typography>
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="card-category-radio-buttons"
          name="row-radio-buttons-group"
          // defaultChecked="problem"
          value={form}
          onChange={handleChangeForm}
        >
          <FormControlLabel value="problem" control={<Radio />} label="문제" />
          <FormControlLabel value="general" control={<Radio />} label="일반" />
          <FormControlLabel value="link" control={<Radio />} label="링크" />
        </RadioGroup>
      </FormControl>
      <MakeCategory handleCategory={handleCategory} />
      {form === "problem" && <MakeProblem handleChangeValues={handleChangeValues} />}
      {form === "general" && <MakeGeneral />}
      {form === "link" && <MakeLink />}
      <Box>
        <MDBox display="flex" alignItems="center" mt={3} lineHeight={1}>
          <MDTypography variant="h6">번들로 묶기</MDTypography>
          <Switch checked={bundleToggle} onChange={handleFeedType} />
        </MDBox>
      </Box>
      <MakeBundle selected={bundleToggle} handleBundle={handleBundleChange} />
      <MakeButton
        handleValuesAdd={handleValuesAdd}
        handleValuesEdit={handleValuesEdit}
        handleValuesDelete={handleValuesDelete}
        handleValuesCreate={handleValuesCreate}
        bundleToggle={bundleToggle}
        handleEmptyBundleCreate={handleEmptyBundleCreate}
      />
      <MakeCardList />
      <MDSnackbar
        color={valid.state}
        icon="notifications"
        title="알람"
        content={valid.comment}
        // dateTime="11 mins ago"
        open={valid.isValid}
        close={() => setValid({ valid: false, comment: "", state: "" })}
      />
    </DashboardLayout>
  );
}

export default Make;
