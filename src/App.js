import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, logCheck } from "./actions";

function App() {
  const counter = useSelector(state => state.counter)

  const isLogged = useSelector(state => state.isLogged)

  const dispatch = useDispatch()

  return (
    <div className="App">
      <button onClick={() => dispatch(increment(2))}>+</button>
      <h1>Counter: {counter}</h1>
        <button onClick={() => dispatch(decrement())}>-</button>

      {isLogged ? <h5>"Logged In"</h5> : <h5>"Not Logged In"</h5>}
      <button onClick={() => dispatch(logCheck())}>Click Me!</button>
    </div>
  );
}

export default App;
