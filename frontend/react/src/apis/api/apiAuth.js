// eslint-disable-next-line
import { apiLogin } from "apis/utils/axios";

const api = apiLogin();

// Method 주소만 정의 -> 예시
const apiPostLogin = async (username, password) => {
  console.log("apiPostLogin");
  try {
    console.log("try");
    const result = await api.post("/login", { username, password }, { withCredentials: true });
    console.log(result);
    return result;
  } catch (error) {
    return error;
  }
};

export default apiPostLogin;
