// 1. Reducer의 초기 state 지정
const initialState = {
  testValue: 0,
  cardList: "",
  testData: [],
};

// 2. Type에 따른 state 변화 설정 && state가 변화할 때 수행되는 함수
const makeCardReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CARD_ADD": {
      return {
        ...state,
        testValue: state.testValue + 1,
      };
    }
    case "CARD_SUB": {
      return {
        ...state,
        testValue: state.testValue - 1,
      };
    }
    case "RESET": {
      return {
        ...state,
        cardList: action.payload.userId,
      };
    }
    case "TEST_DATA": {
      return {
        // spread 연산자를 이용하여 기존 객체를 불러옴
        ...state,
        testData: [...state.testData, { ...action.payload }],
      };
    }
    default:
      return state;
  }
};

export default makeCardReducer;

// testData: [...state.testData, { ...action.payload }],
// testDataL state.testDate.concat(action.payload),

// default: {
//   return { state };
// }

/*
  ...state의 ... 의 의미는 변화된 state만을 받는다는 의미이다. 즉, state에 변화가 없다면 기존값 그대로 반환
  마지막 default: return state;는 필수
*/
