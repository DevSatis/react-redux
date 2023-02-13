import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
   decrement, 
   increment,
   reset,
   incrementByAmount,

} from './counterSlice'
import { useState } from 'react'


export function Counter() {

  const [incrementAmount, setIncrementAmount] = useState(0);

  const addValue = Number(incrementAmount) || 0;
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const resetAll = ()=>{
    setIncrementAmount(0);
    dispatch(reset());
  }

  return (
    <section>
      <span>{count}</span>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
      <input 
        type="text"
        value={incrementAmount}
        onChange={(e)=>setIncrementAmount(e.target.value)}
      
      />
      <div>
        <button onClick={()=>dispatch(incrementByAmount(addValue))}>AddAmount</button>
        <button onClick={resetAll}>Reset</button>
      </div>
    </section>
  )
}