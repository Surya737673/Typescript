import React from 'react'
import { useState } from 'react'
const Counter = () => {
const [count,setCount]=useState(0)

  return (
    <div>
    <h2 data-testid="count">{count}</h2>
      <button onClick={()=>setCount(count+5)}>ADD</button>
      <button onClick={()=>setCount(count-5)}>REDUCE</button>
    </div>
  )
}

export default Counter