import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Card } from "./Card";

function Body() {
  const [data, setData]: any = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/products")
      .then((response: AxiosResponse) => {
        const { data } = response;
        setData([...data]);
      })
      .catch(() => {
        console.log("error");
      });
  }, []);
  return (
    <div
      className="container"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "25px"
      }}
    >
      {/* Iterate over data and show `Card` here */}
      {data.map((el: any) => {
        return <Card key={el.id} d={el} />;
      })}
    </div>
  );
}

export { Body };