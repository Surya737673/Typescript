import { useRef, useState } from "react";
import styles from "./PinBox.module.css";

type pinType = {
  length: number;
  onChange: (pin:string)=>void;
};
// const PinBox = ({ length,onChange}: pinType) => {
//   const inputRef = useRef<HTMLInputElement[]>([]);
//   const [pin,setPin] = useState<string>("")
//   return (
//     <div>
//       {
//         new Array(length).fill(1).map((el, index) => (
//           <input
//             onChange={(e)=>{
//             setPin(e.target.value)
//           }}
//           onKeyUp={(e)=>{
//             if(e.code==="Backspace" && index>0){
//                 inputRef.current[index-1].focus();
//                 inputRef.current[index-1].select();
//             }
//             else if(index<length-1 && e.code!=="Backspace"){
//                 inputRef.current[index+1].focus();
//             }
//             onChange(pin)
//         }}
//           key={index}
//           type="text"
//           className={styles.pinBox}
//           maxLength={1}
//           ref={(el) => {
//             if (inputRef.current && el) inputRef.current[index] = el;
//           }}
//         />
//       ))}
//     </div>
//   );
// };

const PinBox = ({length,onChange}:pinType) => {
  const [pin,setPin]=useState<string>("")
  const inpRef=useRef<HTMLInputElement[]>([])
  return (
    <div>
      {new Array(length).fill(1).map((el,i)=>(
        <input className={styles.pinBox} type="text"  key={i} maxLength={1}
          
          ref={(el)=>{
              if(inpRef.current && el){
                inpRef.current[i]=el
                console.log(inpRef.current)
              }
          }}

        onKeyUp={(e)=>{
            if(e.code==="Backspace" && i>0 ){
              inpRef.current[i-1].focus()
            }else if(i<length-1){
                 inpRef.current[i+1].focus()
            } 
            onChange(pin)
        }} 
        onChange={(e)=>{
             setPin(e.target.value)
       }}
      
        />
      ))}
    </div>
  )
}


export default PinBox;