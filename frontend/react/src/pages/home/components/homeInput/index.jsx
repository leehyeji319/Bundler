import * as React from "react";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
// import FormHelperText from "@mui/material/FormHelperText";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

export default function HomeInput() {
  const [data, setData] = React.useState({
    inputData: "",
    status: "initial",
  });

  // setData : status "loading", "sent", "failure", "sent"
  const handleSubmit = (event) => {
    event.preventDefault();
    setData((current) => ({ ...current, status: "initial" }));
    try {
      // Replace timeout with real backend operation
      setTimeout(() => {
        setData({ inputData: "", status: "initial" });
      }, 0);
    } catch (error) {
      setData((current) => ({ ...current, status: "initial" }));
    }
  };

  return (
    <form onSubmit={handleSubmit} id="demo">
      <FormControl>
        <FormLabel
          sx={(theme) => ({
            "--FormLabel-color": theme.palette.primary.plainColor,
          })}
        >
          댓글란
        </FormLabel>
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
              loading={data.status === "loading"}
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
          <FormHelperText sx={(theme) => ({ color: theme.palette.primary[400] })}>
            You are all set!
          </FormHelperText>
        )} */}
      </FormControl>
    </form>
  );
}
