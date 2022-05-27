import { isVisible } from '@testing-library/user-event/dist/utils'
import React, { useState } from 'react'
import './Tabs.module.css'

type element={
  title:string,
  desc:string
}
type AccordianType={
  data:element[]
}

const ReactTabs = ({data}:AccordianType) => {
  const [open,setOpen]=useState<number[]>([0,5])

  const handleOpen=(index:number)=>{
    if(open.includes(index)){
      console.log(open);
      open.splice(index,1)
      setOpen([...open])
    }else{
      setOpen([...open, index]);
    }
  };
  return (
    <div>
        {
          data.map((el,index)=><Card key={index}  title={el.title}  desc={el.desc} index={index} isVisible={open.includes(index)} handleOpen={handleOpen}/>)
        }
    </div>
  )
}
export default ReactTabs

type CardProps={
  title:string;
  desc:string;
  index:number
  isVisible:boolean;
  handleOpen:(i:number)=>void
}
const Card=({title,desc,index,isVisible, handleOpen}:CardProps)=>{
  return <div className="accodian">
    <h4 onClick={()=>handleOpen(index)} className='h4'>{title}</h4>
    { isVisible&&<p>{desc}</p>}
  </div>
}

