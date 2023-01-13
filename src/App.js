import { useSelector, useDispatch } from "react-redux";
import { incrementCounter } from "./store/counter";

function App() {
  const count = useSelector((store) => store.counter);
  const dispatch = useDispatch();

  const increase = () => {
    const increaseAction = incrementCounter();
    dispatch(increaseAction);
  };

  return (
    <div className="App">
      <h1>count: {count}</h1>
      <button onClick={increase}>increase</button>
    </div>
  );
}

export default App;
