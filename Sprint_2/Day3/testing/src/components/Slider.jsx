import React, { useState } from "react";
import Question from "./Question";



export const Slider = () => {
    let arr=[
        {
            "id":"1",
            "question":"Pahla Sawal",
            "answer":"Pahla jawab"
        },
        {
            "id":"2",
            "question":"Dusra Sawal",
            "answer":"Dusra jawab"
        }, {
            "id":"3",
            "question":"teesra Sawal",
            "answer":"Dusra jawab"
        }, {
            "id":"4",
            "question":"chautha Sawal",
            "answer":"Dusra jawab"
        }
    ]
   
    const [index,setIndex]=useState(0)
    
    const handleClick=(val)=>{
      setIndex(index+val)
    }
  return (
    <div>
        <Question index={index} arr={arr}/>
        {index!==0 && <button onClick={()=>handleClick(-1)}>Pre</button>}
        {index!==arr.length-1 &&<button onClick={()=>handleClick(1)}>Next</button>}
        </div>
  )
}
