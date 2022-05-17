type User={
  id:number,
  name:string,
  salary:number,
  age:number,
}
// type Subject = {
//     Chemistry:boolean,
//     Physics:boolean,
//     Math:boolean,
// }
// type Teachers={
//     id:number,
//     name:string,
//     noOfStudents:number;
//     subject?:Subject;
// }
// const teacher1: Teachers={
//     id:2,
//     name:"Ans",
//     noOfStudents:100,
//     subject:{
//         Chemistry:false,
//         Math:true,
//         Physics:true,
//         }
// }
const user1:User={
id:1,age:12,name:"abc",salary:1200
}

const user2:User={
    id:1,age:10,name:"def",salary:1000
}

const user3:User={
    id:1,age:20,name:"ghi",salary:2000
}

let arr:User[]=[user1,user2,user3]

function sort(arr:User[],q:string):User[]{
    const n=arr.length;
    for(let i=0; i<n; i++){
        for(let j=0; j<n;j++){
            if(arr[i][q]>arr[j][q]){
                let temp=arr[i]
                arr[i]=arr[j]
                arr[j]=temp
            }
        }
    }
    return arr;
}
let ans=sort(arr,"id")
console.log(ans)