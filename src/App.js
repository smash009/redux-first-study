import { useSelector, useDispatch } from "react-redux";
import { incrementCounter, decrementCounter } from "./store/counter";

function App() {
  const count = useSelector((store) => store.counter);
  const dispatch = useDispatch();

  const increase = () => {
    const increaseAction = incrementCounter();
    dispatch(increaseAction);
  };

  const decrease = () => {
    dispatch(decrementCounter());
  };

  return (
    <div className="App">
      <h1>count: {count}</h1>
      <button onClick={increase}>increase</button>
      <button onClick={decrease}>decrease</button>
    </div>
  );
}

export default App;
