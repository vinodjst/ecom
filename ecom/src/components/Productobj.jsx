import { useEffect, useState } from "react";

function Productobj() {
  
     const product = {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack",
    price: 109.95,
    description: "Your perfect pack for everyday use...",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    rating: {
      rate: 3.9,
      count: 120
    }
  };





 
  return (
    <div>
      <h3 className="products">Products</h3>

      <div className="product-container">
          <div className="product-card" key={product.id}>
      <img src={product.image} alt={product.title} />

      <h3>{product.title}</h3>

      <p>₹{product.price}</p>

      <p>{product.description}</p>

      <p>Category: {product.category}</p>

      <p>Rating: {product.rating.rate}</p>
      <p>Reviews: {product.rating.count}</p> 
        
        
         </div>
    
      </div>

    </div>
  );
}

export default Productobj;