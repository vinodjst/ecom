import { useEffect, useState } from "react";

function Productarr() {
  
    const products = [
  {
    id: 1,
    title: "Backpack",
    price: 109.95,
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
  },
  {
    id: 2,
    title: "T-Shirt",
    price: 29.99,
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
  },
  {
    id: 3,
    title: "Shoes",
    price: 59.99,
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"
  },
  {
    id: 4,
    title: "T-Shirt",
    price: 29.99,
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
  },
  {
    id: 5,
    title: "T-Shirt",
    price: 29.99,
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
  }
];



 
  return (
    <div>
      <h3 className="products">Products</h3>

      <div className="product-container">

     {products.map((product) =>(

          <div className="product-card" key={product.id}>
      <img src={product.image} alt={product.title} />

      <h3>{product.title}</h3>

      <p>₹{product.price}</p>

    
         </div>
))}
    
      </div>

    </div>
  );
}

export default Productarr;