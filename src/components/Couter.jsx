import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/slice/counterSlice";

function Counter() {

    const count = useSelector((state)=> state.counter.value)
    const dispatch = useDispatch()
    
    console.log(count)
  return (
    <div className="flex items-center justify-center h-screen">
        <button  onClick={()=> dispatch(decrement())} className='p-4 m-4 bg-slate-700 text-white'>Decrement</button>
          <p>{count}</p>
        <button onClick={()=> dispatch(increment())} className='p-4 m-4 bg-slate-700 text-white'>Increment</button>
    </div>
  );
}

export default Counter;
