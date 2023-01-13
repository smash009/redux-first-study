// import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementCounter } from "./store/counter";

// import INCREMENT = "counter/INCREMENT";

function App() {
  const count = useSelector((store) => store.counter);
  const dispatch = useDispatch();

  // const [count, setCount] = useState(0);
  // const increase = () => {
  //   setCount((prev) => prev + 1);
  // };

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
