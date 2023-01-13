// action type
const INCREMENT = "counter/INCREMENT";

// action creator
const incrementCounter = () => {
  return {
    type: INCREMENT,
  };
};

// counterReducer
// (prevCounterState, action) => counterState

const INITIAL_STATE = 0;

function counterReducer(prevState = INITIAL_STATE, action) {
  if (action.type === INCREMENT) {
    return prevState + 1;
  }

  return prevState;
}

export { incrementCounter };
export default counterReducer;
