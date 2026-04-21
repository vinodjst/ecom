import "./products.css"

const products = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f",
  },
  {
    id: 3,
    name: "Men's Casual Sneakers",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
  },
  {
    id: 4,
    name: "Women's Handbag",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3",
  },
  {
    id: 5,
    name: "Gaming Mechanical Keyboard",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
  },
  {
    id: 6,
    name: "4K Ultra HD Smart TV",
    price: 499.99,
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6",
  },
  {
    id: 7,
    name: "Portable Bluetooth Speaker",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1589256469067-ea99122bbdc4",
  },
  {
    id: 8,
    name: "DSLR Camera",
    price: 699.99,
    image: "https://images.unsplash.com/photo-1488684430052-f2d92fb178c2",
  },
  {
    id: 9,
    name: "Office Ergonomic Chair",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
  },
  {
    id: 10,
    name: "Coffee Maker Machine",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
  },
]

function Products() {
  return (
    <div className="products-container">
      <div className="product-card">
        <img
          src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
          className="product-img"
          alt="product-img"
        />
        <p className="product-title">Wireless Bluetooth Headphones</p>
        <p className="product-price">$59.99</p>
        <button className="add-to-cart-btn">Add to Cart</button>
      </div>

      <div className="product-card">
        <img
          src="https://images.unsplash.com/photo-1517433456452-f9633a875f6f"
          className="product-img"
          alt="product-img"
        />
        <p className="product-title">Smart Fitness Watch</p>
        <p className="product-price">$89.99</p>
        <button className="add-to-cart-btn">Add to Cart</button>
      </div>

      <div className="product-card">
        <img
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
          className="product-img"
          alt="product-img"
        />
        <p className="product-title">Men's Casual Sneakers</p>
        <p className="product-price">$49.99</p>
        <button className="add-to-cart-btn">Add to Cart</button>
      </div>

      <div className="product-card">
        <img
          src="https://images.unsplash.com/photo-1584917865442-de89df76afd3"
          className="product-img"
          alt="product-img"
        />
        <p className="product-title">Women's Handbag</p>
        <p className="product-price">$39.99</p>
        <button className="add-to-cart-btn">Add to Cart</button>
      </div>

      <div className="product-card">
        <img
          src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
          className="product-img"
          alt="product-img"
        />
        <p className="product-title">Gaming Mechanical Keyboard</p>
        <p className="product-price">$79.99</p>
        <button className="add-to-cart-btn">Add to Cart</button>
      </div>

      <div className="product-card">
        <img
          src="https://images.unsplash.com/photo-1593784991095-a205069470b6"
          className="product-img"
          alt="product-img"
        />
        <p className="product-title">4K Ultra HD Smart TV</p>
        <p className="product-price">$499.99</p>
        <button className="add-to-cart-btn">Add to Cart</button>
      </div>

      <div className="product-card">
        <img
          src="https://images.unsplash.com/photo-1589256469067-ea99122bbdc4"
          className="product-img"
          alt="product-img"
        />
        <p className="product-title">Portable Bluetooth Speaker</p>
        <p className="product-price">$29.99</p>
        <button className="add-to-cart-btn">Add to Cart</button>
      </div>

      <div className="product-card">
        <img
          src="https://images.unsplash.com/photo-1488684430052-f2d92fb178c2"
          className="product-img"
          alt="product-img"
        />
        <p className="product-title">DSLR Camera</p>
        <p className="product-price">$699.99</p>
        <button className="add-to-cart-btn">Add to Cart</button>
      </div>

      <div className="product-card">
        <img
          src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7"
          className="product-img"
          alt="product-img"
        />
        <p className="product-title">Office Ergonomic Chair</p>
        <p className="product-price">$149.99</p>
        <button className="add-to-cart-btn">Add to Cart</button>
      </div>

      <div className="product-card">
        <img
          src="https://images.unsplash.com/photo-1509042239860-f550ce710b93"
          className="product-img"
          alt="product-img"
        />
        <p className="product-title">Coffee Maker Machine</p>
        <p className="product-price">$99.99</p>
        <button className="add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
  )
}

export default Products
