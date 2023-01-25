// import { DataThresholding } from "@mui/icons-material";
import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Box, TextField, Typography } from "@mui/material";
import Switch from "@mui/material/Switch";
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
  // Card Form Data
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

  // bundleToggle 버튼!!
  const [bundleToggle, setBundleToggle] = useState(false);

  // Input Catd Data Changed
  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  // handleSubmit의 조건이 충족 된다면 axios 함수 실행
  const onHandleAxios = async () => {
    console.log(values.feedTitle);
    console.log(values.feedContent);
    console.log(values.bundleTitle);
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

  // 생성 버튼 클릭 시
  const handleSubmit = (e) => {
    e.preventDefault();

    // submit 시, input value 초기화
    document.querySelector("#problem-title").value = "";

    // 해당 조건이 충족 한다면
    if (true) {
      onHandleAxios();
    }
  };

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
        문제 만들기
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
        <Button type="button" onClick={handleSubmit} variant="contained" sx={{ m: 3 }} size="large">
          추가
        </Button>
        <Button type="button" variant="contained" sx={{ m: 3 }} size="large">
          삭제
        </Button>
        <Button type="button" variant="contained" sx={{ m: 3 }} size="large">
          생성
        </Button>
      </Box>
    </Box>
  );
}

export default MakeProblem;
