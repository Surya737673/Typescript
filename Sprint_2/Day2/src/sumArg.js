const sumArg=(n)=>{
    let sum=0;
    for(let i=0; i<n.length; i++){
        if(typeof n[i]==="string"){
            return {message:"Invalid"}
        }
        sum+=n[i]
    }
    return sum
}
module.exports=sumArg