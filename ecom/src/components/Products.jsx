import { useEffect, useState } from "react";

function Products() {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products") //api call
      .then((res) => res.json())  //response
      .then((data) => {
        console.log(data);   //printing
        setProducts(data)})  //setting into products[]
      .catch((err) => console.log(err));
  }, []);

  const addToCart =(product) =>{
  
    setCart((prevCart)=>[...prevCart, product]);
    alert('Product added to the cart');

  };

  return (
    <div>
      <p>Cart : {cart.length}</p>
      
      <h3 className="products">Products</h3>

      
      <div className="product-container">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.title} />

            <h3>{product.title}</h3>

            <p className="price">₹{product.price}</p>

            <button className="crt" onClick={()=>addToCart(product)}>Add to cart</button>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Products;