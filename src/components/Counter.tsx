import { useState } from "react"
import classes from './Counter.module.scss'


const Counter = () => {


    let [count, setCount] = useState(0)

    const inncrement = () => {
        setCount(count+1)
    }


    return(
        <div className={classes.btn}>
            <div>{count}</div>
            <button onClick={inncrement}>+</button>
        </div>
    )
}


export default Counter;