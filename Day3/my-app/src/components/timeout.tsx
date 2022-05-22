import React from 'react'
import useTimeout from '../hooks/useTimeout';

const Time = () => {
  
    const toShow=useTimeout (4)
  if(!toShow){
    return <h1>waiting</h1>
  }
  return (
    <div className="App">
      <h1 style={{color:"red"}}>Hello</h1>
    </div>
  );
  
}

export default Time