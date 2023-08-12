import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions/actions";
export default function App() {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>{myState}</h1>
      <button onClick={() => dispatch(increment())}>Add</button>
      <button onClick={() => dispatch(decrement())}>Sub</button>
    </div>
  );
}
