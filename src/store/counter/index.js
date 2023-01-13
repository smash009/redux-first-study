// action type
const INCREMENT = "counter/INCREMENT";
const DECREMENT = "counter/DECREMENT";

// action creator
const incrementCounter = () => {
  return {
    type: INCREMENT,
  };
};

const decrementCounter = () => {
  return {
    type: DECREMENT,
  };
};

// counterReducer
// (prevCounterState, action) => counterState

const INITIAL_STATE = 0;

function counterReducer(prevState = INITIAL_STATE, action) {
  if (action.type === INCREMENT) {
    return prevState + 1;
  } else if (action.type === DECREMENT) {
    return prevState - 1;
  }

  return prevState;
}

export { incrementCounter, decrementCounter };
export default counterReducer;
