import React, { useState,useCallback,useRef,useEffect } from 'react'
import { MemoisedItem } from './TodoItem'
import { nanoid } from 'nanoid'
import './Style.css'
export type TodoType={
  
    title?:string;
    body?:string;
    verify?: boolean;
    id:string;
}

export const Todo = () => {
    const [Timer,SetTimer]=useState(0)
    const [MainData,setMainData]=useState<TodoType[]>([])
    const [data,setData]=useState<TodoType>({id:"0"})
  
    const Time=useRef<NodeJS.Timeout | null>(null)
    useEffect(()=>{
        Time.current=setTimeout(()=>{
            SetTimer(Timer+1)
        },1000)

        return ()=>clearTimeout(Time.current as NodeJS.Timeout)
    },[Timer])
    // const handleToggle=(id:number)=>{
    //     setMainData(MainData.map((el)=>el.id===id? {...el,verify:!el.verify}:el))
    // }
    let handleToggle = (id: string) => {
        setMainData(
            MainData.map((el) => {
            if (el.id === id) {
              el.verify = !el.verify;
            }
            return el;
          })
        );
      };

    const callback=useCallback(handleToggle,[MainData])
    
    const handleChange=(e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        let input=e.target.name
        setData({
            ...data,
            id:nanoid(),
            [input]:e.target.value,
            verify:false
        })
    }
    const handleClick=(e:React.SyntheticEvent)=>{
        e.preventDefault()
        setMainData([...MainData,data])
        console.log(MainData)
    }
   

  return (
    <div className='container'>
        <h2>Time:{Timer}</h2>
        <input type="text" placeholder='title' required name="title" onChange={handleChange} className="input" />
        <br />
        <br />
        <textarea name="body" className='area' required placeholder='body' onChange={handleChange} rows={5} cols={60}/>
        <br />
        <br />
        <button onClick={handleClick}>Add</button>
        <div>
            {
                MainData.map((el:any)=>(
                    <MemoisedItem key={el.id} {...el} handleToggle={callback}/>
                ))
            }
        </div>
    </div>
  )
}
