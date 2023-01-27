const initialState = {
  testValue: 0,
  cardList: "",
};

function makeCardReducer(state = initialState, action) {
  console.log(action.payload);
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
    default:
      return state;
  }
}

export default makeCardReducer;

// default: {
//   return { state };
// }
