import React, { memo, useState, useEffect } from 'react'
import { TodoType } from './Todo'
type ToggleProps={
  handleToggle:(s: string)=>void;
}

export const TodoItem = (props:TodoType &ToggleProps) => {
  let [theme,setTheme]=useState('')
  console.log("rendering", props.title)

  useEffect(()=>{
    setTimeout(()=>{
      setTheme(Math.floor(Math.random()*16777215).toString(16))
    },2000)
  },[theme])
  return (
    <>
      <div className='data-container'>
        <div>
          <div style={{ background: `#${theme}` }} className="color"></div>
        </div>
        <div className='div'>
          <p className='p'>{props.title} - {props.verify ? "verified": 'not Verified'}</p>
          <p className='body'>{props.body}</p>
        </div>
      </div>
      <button onClick={()=>props.handleToggle(props.id)}>Verify</button>
    </>
  )
}


export const MemoisedItem=memo(TodoItem)