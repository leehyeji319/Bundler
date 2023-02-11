// import { DataThresholding } from "@mui/icons-material";
import * as React from "react";
import { useForm } from "react-hook-form";

function MakeLink() {
  const {
    register, // required, pattern, minLengh, maxLength...
    formState: { isSubmitting, errors }, // 중복 제출 방지 -> true: 제출중
  } = useForm();

  return (
    <form>
      <label htmlFor="email">링크</label>
      <input
        id="email"
        type="email"
        name="email"
        placeholder="email"
        {...register("email", {
          required: "이메일은 필수 입력",
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: "이메일 형식에 맞지 않습니다.",
          },
        })}
      />
      <label htmlFor="password">비밀번호</label>
      <input
        id="password"
        type="password"
        name="password"
        placeholder="password"
        {...register("password", {
          required: "비밀번호는 필수 입력",
          minLength: {
            value: 8,
            message: "8자리 이상 비밀번호를 사용하시오.",
          },
        })}
      />
      {errors.password && <small role="alert">{errors.password.message}</small>}
      <button type="submit" disabled={isSubmitting}>
        로그인
      </button>
    </form>
  );
}

export default MakeLink;
