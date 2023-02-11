// Import React
import React, { useState } from "react";
import PropTypes from "prop-types";

// Import - design mui
import { FormControl, Input, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

// Import - design MD
import MDTypography from "components/MDTypography";

// Import - custom

function HomeInput({ handleComment }) {
  const [data, setData] = useState({
    inputData: "",
  });

  // setData : status "loading", "sent", "failure", "sent"
  const handleSubmit = (event) => {
    event.preventDefault();

    handleComment(data); // 상위 부모에게 inputData값 보내기

    // init 초기화
    setData({ inputData: "" });
    document.getElementById("input-comment-data").value = "";
  };

  return (
    <form onSubmit={handleSubmit} id="demo">
      <FormControl sx={{ width: "100%", my: "10px" }}>
        <MDTypography variant="h6" component="p" color="text">
          댓글란
        </MDTypography>
        <Input
          sx={{ "--Input-decorator-childHeight": "45px" }}
          placeholder="댓글 입력란..."
          id="input-comment-data"
          type="text"
          fullWidth
          value={data.inputData}
          onChange={(event) => setData({ inputData: event.target.value })}
          // error={data.status === "failure"}
          endAdornment={
            <Button
              variant="contained"
              endIcon={<SendIcon />}
              onClick={handleSubmit}
              loading={data.status === "loading" ? 1 : 0}
            >
              SEND
            </Button>
          }
        />
        {/* {data.status === "failure" && (
          <FormHelperText sx={(theme) => ({ color: theme.palette.danger[400] })}>
            Oops! something went wrong, please try again later.
          </FormHelperText>
        )}
        {data.status === "sent" && (
          <FormHelperText sx={() => ({ color: "red" })}>You are all set!</FormHelperText>
        )} */}
      </FormControl>
    </form>
  );
}

HomeInput.propTypes = {
  handleComment: PropTypes.func.isRequired,
};

export default HomeInput;
