import Navbar from '../components/Navbar'
import Productarr from '../components/Productarr';
import Productobj from '../components/Productobj';
import Products from '../components/Products';
import '../home.css'

function Home() {

 

  return (

    <div>
 
         <div className="homeh1">
          <h1>Ecom - shopee</h1>
          <Navbar/>
          </div>
    
    
    <Products/>
    </div>
  
);
}

export default Home;


