import React, { useState } from 'react'
import useFetch from "../hooks/useFetch"
import "./countries.css"
type Data={
    country:string,
    city:string,
}

let URL="http://localhost:8080/countries"
const Country = () => {
    const [text,setText]=useState("");
    const {data,loading,error}=useFetch<Data>(URL,{
        
        q:text||"?"
        
    })
  return (
    <div id="Maindiv">
        <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
        <div id='country'>
        {
          data.map((item)=>(
              <div>
                  <h1>{item.country}-{item.city}</h1>
              </div>
          ))
        }
        </div>
    </div>
  )
}

export default Country