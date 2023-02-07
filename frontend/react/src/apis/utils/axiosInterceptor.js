// https://velog.io/@hsk10271/TIL-33 참고

/*
import { getItem } from "@utils/storage";

const interceptors = (instance) => {
  instance.interceptors.request.use(
    (config) => {
      const token = getItem("jwt_token");

      config.headers = {
        authorization: token ? `bearer ${token}` : null,
      };
      return config;
    },
    (error) => Promise.reject(error.response)
  );
  return instance;
};

export default interceptors;
*/
