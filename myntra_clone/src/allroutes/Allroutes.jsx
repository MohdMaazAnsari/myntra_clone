
import {Route,Routes} from "react-router-dom"






import Home from "../pages/Home"
import About from "../pages/About"


function Allroutes() {
  return (
  <div>
   <Routes>
   <Route path="/" element={<Home/>}/> 
   <Route path="/about" element={<About/>}/> 
    
      </Routes>
      </div>
  )
}

export default Allroutes