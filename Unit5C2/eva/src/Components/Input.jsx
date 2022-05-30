import { useState } from "react";
import { Image } from "./Image";

export const Input = ({
  type,
  size,
  variant,
  rightLogo,
  rightLogoOnClick,
  onChange,
}) => {
  const [pass,setPass]=useState("")
  const handleClick=(e)=>{
     setPass(e.target.value)
  }
  return (
    <div className="inputContainer" style={{position:"relative"}}>
      {/* Add Right Logo */}
      <img data-testid="icon" src={rightLogo}
       style={{width:"20px",height:"20px" , marginLeft:"290px",position:"absolute",marginTop:"2px" }}
       onClick={rightLogoOnClick}
      />
      <input data-testid="input" onChange={onChange}  className={`input`} style={{backgroundColor:variant}}  type={type} size={size} />
    </div>
  );
};
