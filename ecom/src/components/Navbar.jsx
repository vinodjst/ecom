import { Link } from 'react-router-dom'
import '../home.css'

function Navbar() {
  return (

    <div>
       <div className="homeh1">
          <h1>Ecom - shopee</h1>
          </div>
    
   <div>

      <ul className='navbar'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/about">about</Link></li>
      </ul>
    </div>
    </div>
  );
}

export default Navbar;