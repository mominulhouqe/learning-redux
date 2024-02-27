import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/counterSlice";

function App() {
  const {count} = useSelector((state) => state.counter)
  console.log(count);
  
  const dispatch = useDispatch();
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="flex bg-red-100 p-10 rounded-md">
        <button
          onClick={() => dispatch(increment())}
          type="button"
          className="px-3 py-2 bg-green-600 text-white font-bold"
        >
          Increment
        </button>
        <span className="text-3xl mx-6">
          {count}
        </span>
        <button
          onClick={() => dispatch(decrement())}
          type="button"
          className="px-3 py-2 bg-red-600 text-white font-bold"
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
