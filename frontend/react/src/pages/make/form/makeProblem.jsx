// import { DataThresholding } from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Button, Box, TextField, Typography } from "@mui/material";
import Switch from "@mui/material/Switch";

// import react-redux && action
import { useSelector, useDispatch } from "react-redux";

// import axios from "axios";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

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
  // (Data 1) Store Data
  const dispatch = useDispatch(); // state와 function을 보내는 함수

  const { testValue } = useSelector((state) => state.testValue); // state 값 가져오기
  // const cardList = useSelector((state) => state.makeCard.cardList); // state 값 가져오기
  // console.log(cardList);
  // (Data 2) Local Data - Card Input Data
  const [values, setValues] = useState({
    userId: "testID",
    feedType: "Card",
    feedTitle: "",
    feedContent: "",
    categoryFirst: "",
    categorySecond: "",
    cardType: "card_general",
    cardDescription: "",
    cardCommentary: "",
    bundleTitle: "",
  });

  // (Data 3) bundleToggle 버튼!!
  const [bundleToggle, setBundleToggle] = useState(false);

  // (Data 1 - Func) Catd Input Data Changed
  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  // (Func 1) handleAdd
  const handleAdd = (e) => {
    e.preventDefault();
    console.log("handleAdd 함수 실행");
    dispatch({ type: "ADD" });
  };

  // (Func 2) handleDelete
  const handleDelete = (e) => {
    e.preventDefault();
    console.log(testValue);
    dispatch({ type: "SUB" });
  };

  // (Func 3-2) handleCreate 조건이 충족 된다면 axios 함수 실행
  const onHandleAxios = async () => {
    console.log(bundleToggle);

    // Axios Post
    // await axios
    //   .post('/api/v1/cards', postData)
    //   .then(function(response) {
    //     console.log("success");
    //   })
    //   .catch((err) => {
    //     console.log("error");
    //   });
  };

  // (Func 3-1) 생성 버튼 클릭 시
  const handleCreate = (e) => {
    e.preventDefault();

    // submit 시, input value 초기화
    document.querySelector("#problem-title").value = "";

    // 해당 조건이 충족 한다면
    if (true) {
      onHandleAxios();
    }
  };

  // (Func 4) useEffect
  useEffect(() => {
    console.log("Component가 화면에 나타남 === mount");
    return () => {
      console.log("Component가 화면에 사라짐 === unmount");
    };
  }, []);

  // retrun 문
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
        문제 만들기 // Test Value : {testValue}
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
