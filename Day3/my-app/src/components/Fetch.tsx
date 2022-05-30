import React, { useState } from 'react'
import useFetch from '../hooks/useFetch';

type User={
  id:string;
  login:string; 
  avatar_url:string;
}

const Fetch = () => {

  const [text,setText]=useState("");
  const URL = `https://api.github.com/search/users`;
  const {data,error,loading}=useFetch<User>(URL,{
    per_page:5,
    q:text||"?"
  });

  return (
  
    <div className="App">
      <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
      <input type="submit" onSubmit={()=>useFetch}/>
    { loading? <div>Loading....</div> : error? <div>Something went wrong</div> :
     data.map((user)=>{
        return (
          <div key={user.id}>
          <h3>{user.login}</h3>
          <img style={{borderRadius:"50%"}} src={user.avatar_url} alt="" />
          </div>
        )
      })}
  </div>
  )

}

export default Fetch