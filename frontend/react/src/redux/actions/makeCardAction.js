// apis/api/ 정의한 api import
import { apiTest } from "apis/api/JavaControllerPart";

// 액션(type을 가진 객체) 생성함수
// API를 호출해서 JSON 데이터를 가져오고 리듀서에 해당 상태를 변화시키기 위한 Type 지정
const getTest = async () => {
  // const response = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
  const response = await apiTest();

  return {
    type: "TEST_DATA",
    payload: response.data,
  };
};

const getTestDefault = async () => {
  const response = await apiTest();

  return {
    type: "TEST_DATA",
    payload: response.data,
  };
};

export { getTest, getTestDefault };
