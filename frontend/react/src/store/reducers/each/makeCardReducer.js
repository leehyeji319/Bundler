const initialState = {
  cardList: [],
  testValue: 0,
};

function makeCardReducer(state = initialState, action) {
  switch (action.type) {
    case "CARD_ADD": {
      return {
        ...state,
        cardList: [...state.cardList, ...action.payload],
      };
    }
    case "CARD_SUB": {
      return {
        ...state,
        testValue: state.testValue - 1,
      };
    }
    case "CARD_INIT": {
      return {
        ...state,
        testValue: 0,
      };
    }
    default: {
      return {
        state,
      };
    }
  }
}

export default makeCardReducer;
