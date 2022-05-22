import axios,{AxiosResponse} from 'axios'
import React, { useState,useEffect } from 'react'
import Table from './Table'

type lappyType={
  id:number,
  model:string;
  year:number;
  OS:string;
  height:number;
  width:number;
  price:number;
}


const Laptop = () => {
    const [lappyData,setlappyData]=useState<lappyType[]>([])
    const [formData,setFormdata]=useState({})



    const handleSubmit=(e:any)=>{
      e.preventDefault()
      let k:any=formData;
      sendData(k)
    }
    const sendData=(formData:lappyType)=>{
      axios.post(`http://localhost:8080/data`,formData).then(getData)
    }
    const getData=()=>{
       axios.get(`http://localhost:8080/data`).then((res: AxiosResponse<lappyType[]>)=>{
           const {data}=res;
           setlappyData(data);
       })
       .catch()
    }
    const handleChange=(e:any)=>{
       const inputName=e.target.name;
       setFormdata({
         ...formData,
         [inputName]:e.target.value,
       })
    }
    const handleChange1=(e:any)=>{
      let updatedarr=Sort(lappyData,e.target.value);
      setlappyData([...updatedarr]);
    }
    useEffect(()=>{
      getData();
    },[])

    function Sort(arr:lappyType[],q:keyof lappyType){
      const n = arr.length;
      for(let i=0;i<n;i++){
          for(let j=i+1;j<n;j++){
              if(arr[i][q]>arr[j][q]){
                  let temp = arr[i];
                  arr[i] = arr[j];
                  arr[j] = temp;
              }
          }
      }
      return arr
  }
  function handlefilter(OS: string) {
    axios
      .get("http://localhost:8080/data")
      .then((response: AxiosResponse<lappyType[]>) => {
        let { data } = response;
        if (OS !== "all") {
          data = data.filter((el) => el.OS === OS);
          setlappyData([...data]);
        } else {
          setlappyData([...data]);
        }
      });
  }
  return (
      <>
    <form onSubmit={handleSubmit}  >
      <label>Id</label>
      <input type="number" name="Id" onChange={handleChange} ></input><br/>
      <label>model</label>
      <input type="text"  name="model" onChange={handleChange}></input><br/>
      <label>make_year</label>
      <input type="number"  name="year" onChange={handleChange}></input><br/>
      <label>OS</label>
      <input type="string" name="OS" onChange={handleChange} ></input><br/>
      <label>screen_height(inches)</label>
      <input type="number" name="height" onChange={handleChange} ></input><br/>
      <label>screen_width(inches)</label>
      <input type="number" name="width" onChange={handleChange} ></input><br/>
      <label>price</label>
      <input type="number"  name="price" onChange={handleChange}></input><br/>
      <input type="submit"/>
    </form>

    <div>
        <label>Sort-by</label>
        <select onChange={handleChange1} name="sort" >
            <option value="Default">Default</option>
            <option value="OS">OS</option>
            <option value="model">model</option>
            <option value="year">year</option>
            <option value="price">price</option>
        </select>
        <label>Filter-by</label>
        <button  onClick={()=>handlefilter("windows")}>Windows</button>
        <button  onClick={()=>handlefilter("mac")}>Mac</button>
        <button  onClick={()=>handlefilter("dos")}>Dos</button>
        <button  onClick={()=>handlefilter("all")}>All</button>
        <button  onClick={()=>handlefilter("linux")}>Linux</button>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Model</th>
                    <th>Make Year</th>
                    <th>Os</th>
                    <th>Screen height</th>
                    <th>Screen width</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
            {lappyData.map((item) => {
              return <Table key={item.id} data={item} />;
            })}
            </tbody>
        </table>
    </div>
    </>
  )
}

export default Laptop