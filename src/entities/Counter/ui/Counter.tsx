import { useDispatch, useSelector } from "react-redux"
import { Button } from "../../../shared/ui/Button/Button"
import { counterActions } from "../model/slice/counterSlice"
import { StateSchema } from "../../../app/providers/StoreProvider/config/StateSchema"
import { getCounterValue } from "../model/selectors/getCounterValue/getCounterValue"





export const Counter = () => {

    const dispatch = useDispatch()

    const counterValue = useSelector(getCounterValue)
    const increment = () =>{
	
	dispatch(counterActions.increment())

    }


    const decrement = () =>{

	dispatch(counterActions.decrement())    
    }


    return(

        <div>
	    <h1>value = {counterValue }</h1>
	    <Button onClick={increment}>increment</Button>
	    <Button onClick={decrement}>decrement</Button>

	</div>
	



    )




}
