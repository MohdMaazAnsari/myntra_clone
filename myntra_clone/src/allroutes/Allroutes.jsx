
import {Route,Routes} from "react-router-dom"






import Home from "../pages/Home"
import About from "../pages/About"
import { Mens } from "../pages/Mens"


function Allroutes() {
  return (
  <div>
   <Routes>
   <Route path="/" element={<Home/>}/> 
   <Route path="/about" element={<About/>}/> 
   <Route path="/mens" element={<Mens/>}/>
    
      </Routes>
      </div>
  )
}

export default Allroutes