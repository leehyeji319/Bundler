import * as React from "react";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

export default function HomeInput() {
  const [data, setData] = React.useState({
    email: "",
    status: "initial",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setData((current) => ({ ...current, status: "loading" }));
    try {
      // Replace timeout with real backend operation
      setTimeout(() => {
        setData({ email: "", status: "sent" });
      }, 1500);
    } catch (error) {
      setData((current) => ({ ...current, status: "failure" }));
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
          MUI Newsletter
        </FormLabel>
        <Input
          sx={{ "--Input-decorator-childHeight": "45px" }}
          placeholder="댓글 입력란..."
          type="text"
          value={data.email}
          onChange={(event) => setData({ email: event.target.value, status: "initial" })}
          error={data.status === "failure"}
          endAdornment={
            <Button variant="contained" endIcon={<SendIcon />} loading={data.status === "loading"}>
              Send
            </Button>
          }
        />
        {data.status === "failure" && (
          <FormHelperText sx={(theme) => ({ color: theme.palette.danger[400] })}>
            Oops! something went wrong, please try again later.
          </FormHelperText>
        )}

        {data.status === "sent" && (
          <FormHelperText sx={(theme) => ({ color: theme.palette.primary[400] })}>
            You are all set!
          </FormHelperText>
        )}
      </FormControl>
    </form>
  );
}
