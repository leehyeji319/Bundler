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
  // const navigate = useNavigate();
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
  const onValid = async ({ userid, password }) => {
    // input 태그 값 비워주는 코드
    setValue("password", "");

    // 백으로부터 받은 응답
    const response = await loginUser({ userid, password });
    console.log(response, 11111111111);
    // if (response.status) {
    // 쿠키에 Refresh Token, store에 Access Token 저장
    setRefreshToken(response.data.refresh_token);
    dispatch(SET_TOKEN(response.data.access_token));
    // const state22 = useSelector((state) => state.makeReducer);
    // console.log(state22);
    // const { accessToken } = useSelector((state) => {
    //   return { accessToken: state.authToken.authenticated };
    // });
    // console.log(accessToken);

    // navigate("/");
    // } else {
    //   console.log(response.json);
    // }
  };

  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onValid)}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="UserID" className="sr-only">
                User ID
                <input
                  {...register("userid", { required: "Please Enter Your ID" })}
                  type="text"
                  placeholder="User ID"
                />
                <ErrorMessage
                  name="userid"
                  errors={errors}
                  render={({ message }) => (
                    <p className="text-sm font-medium text-rose-500">{message}</p>
                  )}
                />
              </label>
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
                <input
                  {...register("password", { required: "Please Enter Your Password" })}
                  type="text"
                  placeholder="Password"
                />
              </label>
              <ErrorMessage
                name="userid"
                errors={errors}
                render={({ message }) => (
                  <p className="text-sm font-medium text-rose-500">{message}</p>
                )}
              />
            </div>
          </div>
          <div>
            <Button
              sx={{
                bgcolor: "#81D8CF",
                color: "#000000",
                fontSize: "midium",
                fontWeight: "bold",
              }}
              fullWidth
              type="submit"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <HiLockClosed
                  className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                  aria-hidden="true"
                />
              </span>
              로그인
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
