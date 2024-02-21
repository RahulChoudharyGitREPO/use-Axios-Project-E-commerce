import {  Route , Routes, Link } from "react-router-dom"
import {Home} from './Home'
import { About } from "./About"
import { Product } from "./Product"
import { SingleProduct } from "./SingleProduct"
function App() {

  return ( <>
    
    <div className="flex justify-center space-x-10">
      <Link to="/">Home</Link>
      <Link to="/About">About</Link>
      <Link to="/Product">Product</Link>
      </div>
      <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/About" element={<About/>}/>
         <Route path="/Product/:id" element={<SingleProduct/>}/>
         <Route path="/Product" element={<Product/>}/>

         
      </Routes>
      </>
  )
}

export default App

