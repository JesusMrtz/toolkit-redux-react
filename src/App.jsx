import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./store/slices/counter";


const App = () => {
  const { counter } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <strong className='d-block'>{ counter }</strong>
      <button type="button" onClick={() => dispatch( increment(5) )}>
        Incrementar
      </button>
      <button type="button" onClick={() => dispatch( decrement() )}>
        Decrementar
      </button>
    </div>
  )
}


export default App;