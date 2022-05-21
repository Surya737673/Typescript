import React from 'react'



type lappyType={
    id?:number,
    model?: string;
    year?: number;
    OS?: string;
    height?: number;
    width?: number;
    price?: number;
}
const Table = ({data}:{data:lappyType}) => {
  return (
    <tr>
        <td>{data.id}</td>
        <td>{data.model}</td>
        <td>{data.year}</td>
        <td>{data.OS}</td>
        <td>{data.height}</td>
        <td>{data.width}</td>
        <td>{data.price}</td>
    </tr>
  )
}

export default Table