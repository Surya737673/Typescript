import React, { useEffect, useState } from 'react'

const useTimeout = (delay:number) => {
    const [toShow,setToShow]=useState(false)
     
    useEffect(()=>{
        let id=setTimeout(()=>{
            setToShow(true)
        },delay*1000);
        return ()=> clearTimeout(id)
    },[]);

    
    return toShow
}

export default useTimeout