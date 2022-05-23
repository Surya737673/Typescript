import { useState } from "react";

export const useCounter = (init:number) => {
    const [value,setValue]=useState(init);
    const inc=(payload:number)=>setValue(value+payload);
    const dec=(payload:number)=>setValue(value-payload);
    const set=()=>setValue(100);
    return {value,inc,dec,set}
};
