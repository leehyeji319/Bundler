// 액션(type을 가진 객체) 생성함수
// API를 호출해서 JSON 데이터를 가져오고 리듀서에 해당 상태를 변화시키기 위한 Type 지정

// data store - cardList에 card 추가
const actAddCard = (cardInfo) => ({ type: "ADD_CARD", payload: cardInfo });

// data store - 선택된 카드 인덱스 업데이트
const actEditCardNo = (selectedNumber) => ({
  type: "EDIT_CARD_NO",
  payload: selectedNumber,
});

// date store - cardList 수정
const actEditCard = (editCardIndex, editCard) => ({
  type: "EDIT_CARD",
  payload: {
    editNumber: editCardIndex,
    card: editCard,
  },
});

const actDeleteCard = (cardNo) => ({
  type: "DELETE_CARD",
  payload: cardNo,
});

export { actAddCard, actEditCardNo, actEditCard, actDeleteCard };
