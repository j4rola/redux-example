import { useSelector } from "react-redux";
import { useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import { selectCount } from "./counterSlice";



function Child() {

    //const count = useAppSelector(selectCount);   

    const count = useSelector((state: RootState) => state.counter.value);   

  return (
    <div id="child"><h1>Child</h1>     
    <h3>{count}</h3>   
    </div>   
    
  )
}

export default Child