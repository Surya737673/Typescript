import { Input } from "./Components/Input";
import { Image } from "./Components/Image";
import { Pagination } from "./Components/Pagination";
import Eye from "./Components/eye.svg"
import { useState } from "react";


function App() {
  const [value,setValue]=useState("")
  const [show,setShow]=useState(false)
  const handleClick=()=>{
    setShow(!show)
  }
  const handleChange=(e)=>{
    setValue(e.target.value)
  }
  return (
    <div className="container">
      <Input data-testid="input" type={show?"text":"password" }
      variant={"yellow"}
      size={40}
      value={value}
      rightLogo={Eye}
      rightLogoOnClick={handleClick}
      onChange={handleChange}
       />

      <Image  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZnYcDBnvYQd3p7mBqHPColzGvTrsqNwhiOg&usqp=CAU" borderRadius={100}  width={100} height={100} fit={"cover"}  />

      <Pagination total={10}/>
    </div>
  );
}

export default App;
