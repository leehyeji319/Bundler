const initialState = {
  testValue: 0,
};

function makeCardReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD": {
      return {
        ...state,
        testValue: state.testValue + 1,
      };
    }
    case "SUB": {
      return {
        ...state,
        testValue: state.testValue - 1,
      };
    }
    case "RESET": {
      return {
        ...state,
        testValue: 0,
      };
    }
    default:
      return state;
  }
}

export default makeCardReducer;
