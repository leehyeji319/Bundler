// import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

import { HiLockClosed } from "react-icons/hi";
import { ErrorMessage } from "@hookform/error-message";

import { loginUser } from "apis/api/Users";
import { setRefreshToken } from "redux/store/Cookie";
import { SET_TOKEN } from "redux/store/Auth";

import { Button } from "@mui/material/";

function SignIn() {
  const dispatch = useDispatch();

  // useForm 사용을 위한 선언
  const {
    register,
    setValue,
    formState: { errors },
    handleSubmit,
  } = useForm();

  // submit 이후 동작할 코드
  // 백으로 유저 정보 전달
  const onValid = async ({ email, password }) => {
    // input 태그 값 비워주는 코드
    setValue("password", "");

    // 백으로부터 받은 응답
    const response = await loginUser({ email, password });
    console.log(response.data, 11111111111);
    if (response.status === 200) {
      // 쿠키에 Refresh Token, store에 Access Token 저장
      setRefreshToken(response.data.refreshToken);
      dispatch(SET_TOKEN(response.data));
      // window.open("/home", "_self");
    } else {
      alert("로그인정보가 다릅니다");
    }
  };

  return (
    <form onSubmit={handleSubmit(onValid)}>
      <div>
        <div>
          <label htmlFor="email">
            <input
              {...register("email", { required: "Please Enter Your ID" })}
              className="inputinfo"
              type="text"
              pattern="[a-zA-Z0-9]+[@][a-zA-Z0-9]+[.]+[a-zA-Z]+[.]*[a-zA-Z]"
              placeholder="이메일을 입력해주세요"
              required="required"
            />
            <ErrorMessage
              name="email"
              errors={errors}
              render={({ message }) => (
                <p className="text-sm font-medium text-rose-500">{message}</p>
              )}
            />
          </label>
        </div>
        <div>
          <label htmlFor="password">
            <input
              {...register("password", { required: "Please Enter Your Password" })}
              className="inputinfo"
              type="password"
              pattern="^([A-Za-z0-9])(?=.*[!@#$%^&*()]).{8,20}$"
              placeholder="비밀번호를 입력해주세요"
              required="required"
            />
          </label>
          <ErrorMessage
            name="password"
            errors={errors}
            render={({ message }) => <p className="text-sm font-medium text-rose-500">{message}</p>}
          />
        </div>
        <div>
          <Button
            sx={{
              marginTop: "3%",
              bgcolor: "#81D8CF",
              color: "#000000",
              fontSize: "large",
              fontWeight: "bold",
            }}
            fullWidth
            type="submit"
          >
            <HiLockClosed
              className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
              aria-hidden="true"
            />
            로그인
          </Button>
        </div>
      </div>
      <div className="padlock">
        <div className="padlock__hook">
          <div className="padlock__hook-body" />
          <div className="padlock__hook-body" />
        </div>
        <div className="padlock__body">
          <div className="padlock__face">
            <div className="padlock__eye padlock__eye--left" />
            <div className="padlock__eye padlock__eye--right" />
            <div className="padlock__mouth padlock__mouth--one" />
            <div className="padlock__mouth padlock__mouth--two" />
            <div className="padlock__mouth padlock__mouth--three" />
          </div>
        </div>
      </div>
    </form>
  );
}

export default SignIn;
