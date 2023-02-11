// Import React
import React, { useState } from "react";

// Import - design mui
import { FormControl, Input, Button, FormHelperText } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

// Import - design MD
import MDTypography from "components/MDTypography";

export default function HomeInput() {
  const [data, setData] = useState({
    inputData: "",
    status: "initial",
  });

  // setData : status "loading", "sent", "failure", "sent"
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(data.inputData);
    setData((current) => ({ ...current, status: "initial" }));
    try {
      setData({ inputData: "", status: "sent" });
      // Replace timeout with real backend operation
      // setTimeout(() => {
      //   setData({ inputData: "", status: "initial" });
      // }, 0);
    } catch (error) {
      setData((current) => ({ ...current, status: "initial" }));
    }
  };

  return (
    <form onSubmit={handleSubmit} id="demo">
      <FormControl sx={{ width: "100%", my: "10px" }}>
        <MDTypography variant="body2" component="p" color="text">
          댓글란
        </MDTypography>
        <Input
          sx={{ "--Input-decorator-childHeight": "45px" }}
          placeholder="댓글 입력란..."
          type="text"
          fullWidth
          value={data.inputData}
          onChange={(event) => setData({ inputData: event.target.value, status: "initial" })}
          error={data.status === "failure"}
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
        {data.status === "failure" && (
          <FormHelperText sx={(theme) => ({ color: theme.palette.danger[400] })}>
            Oops! something went wrong, please try again later.
          </FormHelperText>
        )}

        {data.status === "sent" && (
          <FormHelperText sx={() => ({ color: "red" })}>You are all set!</FormHelperText>
        )}
      </FormControl>
    </form>
  );
}
