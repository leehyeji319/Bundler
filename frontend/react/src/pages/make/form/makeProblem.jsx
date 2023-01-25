// import { DataThresholding } from "@mui/icons-material";
import React, { useState } from "react";
import { Button, Box, TextField, Typography } from "@mui/material";
// import axios from "axios";

function MakeProblem() {
  const [values, setValues] = useState({
    feedTitle: "",
    feedContent: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };
  // const [feedContent, setFeedContet] = useState("");
  // const [feedCategory, setFeedCategory] = useState({
  //   first: "",
  //   second: "",
  // });
  // const [cardDescription, setCardDescription] = useState("");
  // const [cardCommentary, setCardCommentary] = useState("");

  const onHandleAxios = async () => {
    console.log(values.feedTitle);
    console.log(values.feedContent);

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

  const handleSubmit = (e) => {
    e.preventDefault();

    document.querySelector("#problem-title").value = "";

    console.log(values.feedTitle);
    console.log(values.feedContent);

    // form 객체 key 와 value 값을 순환
    // const entries = formData.entries();
    // for (const pair of entries) {
    //   console.log(pair[0] + ", " + pair[1]);
    // }

    onHandleAxios();
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { ml: 3, mt: 3, width: "70vw" },
      }}
      noValidate
      autoComplete="off"
    >
      <Typography component="h1" variant="h5">
        문제 만들기
      </Typography>
      <TextField
        multiline
        rows={1}
        defaultValue=""
        required
        autoFocus
        id="problem-title"
        type="text"
        name="feedTitle"
        label="제목"
        onChange={handleChange}
      />
      <TextField
        multiline
        rows={5}
        defaultValue=""
        required
        id="problem-content"
        type="text"
        name="feedContent"
        label="내용"
        onChange={handleChange}
      />
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
