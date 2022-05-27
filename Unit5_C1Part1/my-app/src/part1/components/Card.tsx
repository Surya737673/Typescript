import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Card({ d }: any) {
  const navigate = useNavigate();


  const [f,setF]=useState(false)
  function AddCart(){
   axios.post("http://localhost:8080/CartData",d)
     setF(true)
  }

  return (
    <div
      onClick={() => navigate(`/${d.id}`)}
      className="item"
      style={{ border: "1px solid lightgray" }}
    >
      <img
        style={{ height: "150px", width: "150px" }}
        src="https://www.91-img.com/gallery_images_uploads/1/1/1135d2abb0905cd0225af484f826ae98206653fe.jpg?tr=h-550,w-0,c-at_max"
        className="productImage"
        alt="laptop_img"
      />
      <h4>{d.product_name}</h4>
      <span>
        <Link className="productLink" to={`/${d.id}`}>
          {/* Product Name */}
        </Link>
      </span>
      <span className="productCategory">{d.category}</span>
      <br />
      {/* Notice the $ before price. keep it dont edit it. eg: "$123" */}
      <span className="productPrice">${d.price}</span>
      <br />
      {/* Notice the Ratings: text. don't edit it. eg: "Ratings: 3.5" */}
      <span className="productRating">Ratings: {d.rating}</span>
      <br />
      {/* Show button here if item is already in the cart. otherwise show "Item Already in cart" */}
      {/*
      <div className="itemInCart">Item Already in cart</div> 
       OR
      <button className="productAddtoCart">
        Add to cart
      </button>
      */}
      {/* {!d.isInCart ? <button>Add to cart</button> : <div>Already in Cart</div>} */}


      {
      f ?  (<div className="Cart">Item Already in cart</div>):
       
     ( <button className="AddtoCart" onClick={AddCart}>
        Add to cart
      </button>)
     
    }
    </div>
  );
}

export { Card };