const initSate = {
  value: 0,
};

export default function makeCardReducer(state = initSate, action) {
  switch (action.type) {
    case "add": {
      return {
        ...state,
        value: state.value + 1,
      };
    }
    case "sub": {
      return {
        ...state,
        value: state.value - 1,
      };
    }
    case "init": {
      return {
        ...state,
        value: (state.value = 0),
      };
    }
  }
}
