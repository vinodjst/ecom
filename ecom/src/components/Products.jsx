import { useEffect, useState } from "react"
import ProductsFiltering from "./ProductsFiltering"

function Products() {
  const [products, setProducts] = useState([])
  const [count, setCount] = useState(0)
  const [categoryFilterOptions, setCategoryFilterOptions] = useState([])
  const [activeCategoryFilterOptionId, setActiveCategoryFilterOptionId] =
    useState("all")

  const [cart, setCart] = useState([])

  useEffect(() => {
    fetch("https://fakestoreapi.com/products") //api call
      .then((res) => res.json()) //response
      .then((data) => {
        console.log(data) //printing
        setProducts(data)

        const categoriesSet = new Set()
        data.forEach((eachProd) => categoriesSet.add(eachProd.category))
        console.log(categoriesSet)
        const categoriesFilterOptions = [
          { id: "all", name: "all" },
          ...[...categoriesSet].map((item) => ({
            id: item,
            name: item,
          })),
        ]
        setCategoryFilterOptions(categoriesFilterOptions)
        setActiveCategoryFilterOptionId(categoriesFilterOptions[0].id)
      }) //setting into products[]
      .catch((err) => console.log(err))
  }, [])

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product])
    alert("Product added to the cart")
  }

  const onChangeCategory = (id) => {
    setActiveCategoryFilterOptionId(id)
  }

  const filteredProducts =
    activeCategoryFilterOptionId === "all"
      ? products
      : products.filter((p) => p.category === activeCategoryFilterOptionId)

  return (
    <div>
      <p>Cart : {cart.length}</p>

      <h3 className="products">Products</h3>
      <ProductsFiltering
        categoryFilterOptions={categoryFilterOptions}
        activeCategoryFilterOptionId={activeCategoryFilterOptionId}
        onChangeCategory={onChangeCategory}
      />
      <div className="product-container">
        {filteredProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.title} />

            <h3>{product.title}</h3>

            <p className="price">₹{product.price}</p>

            <button className="crt" onClick={() => addToCart(product)}>
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products
