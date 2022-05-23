import React from 'react'
import { useCounter } from '../part2/hooks/useCounter';

export const Counter = () => {
    const {value,inc,dec,set}=useCounter(10);

  return (
    <div>
     <h2>value:{value}</h2>
     <button onClick={()=>inc(1)}>ADD 1</button>
     <button onClick={()=>inc(3)}>ADD 3</button>
     <button onClick={()=>dec(1)}>SUB 1</button>
     <button onClick={()=>dec(1)}>SUB 3</button>
     <button onClick={()=>set()}>set counter to 100</button>
    </div>
  )
}
