import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CardDetails() {
  const { id } = useParams();
  const [data, setData]: any = useState({});
  useEffect(() => {
    axios
      .get(`http://localhost:8080/products/${id}`)
      .then((response: AxiosResponse) => {
        const { data } = response;
        console.log(data);
        setData({ ...data });
      })
      .catch(() => {
        console.log("error");
      });
  }, [id]);
  return (
    <div className="product">
      <span>
        <h4 className="detailsTitle">{data.product_name}</h4>
      </span>
      <img
        style={{ height: "150px", width: "150px" }}
        className="detailsImage"
        src="https://www.91-img.com/gallery_images_uploads/1/1/1135d2abb0905cd0225af484f826ae98206653fe.jpg?tr=h-550,w-0,c-at_max"
        alt="laptop_img"
      />
      <h3>{data.desc}</h3>
      {/* Notice the "Price: $". do not edit it. */}
      <span className="detailsPrice">Price: ${data.price}</span>
      <span className="detailsPrice"></span>
      <div>
        <h5>Reviews:</h5>
        <p>{data.review}</p>
        {/* Iterate over reviews and populate review like: 
        
        <div className="review">
          <span className="reviewBy">UserName1234</span>
          <span className="reviewDesc">This product is really good etc....</span>
        </div>
        
        */}
        {/* {data.reviews.map((item) => {
          return (
            <div>
              <h4>{item.by}</h4>
             
            </div>
          );
        })} */}
      </div>
    </div>
  );
}
export { CardDetails };