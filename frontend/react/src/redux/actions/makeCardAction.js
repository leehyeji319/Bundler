// apis/api/ 정의한 api import
// import { apiGetCard } from "apis/api/JavaControllerPart";

// 액션(type을 가진 객체) 생성함수
// API를 호출해서 JSON 데이터를 가져오고 리듀서에 해당 상태를 변화시키기 위한 Type 지정
const actAddCard = (cardInfo) => {
  // const response = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
  // const response = await apiGetCard();
  console.log(cardInfo);
  return {
    type: "ADD_CARD",
    payload: cardInfo,
  };
};

const actDeleteCard = async (cardNo) => {
  console.log(cardNo);
  return {
    type: "DELETE_CARD",
    payload: cardNo,
  };
};

export { actAddCard, actDeleteCard };
