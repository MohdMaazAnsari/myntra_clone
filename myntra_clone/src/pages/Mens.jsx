import {useState,useEffect} from 'react'
import axios from "axios"
import { Cards } from '../components/Card'
import "../styles/card.css"
export const Mens = () => {

const [data,setdata]=useState([])


useEffect(()=>{
   axios.get(`https://myntback.onrender.com/data`)
    .then((res)=>{
        // console.log(res.data)
setdata(res.data)
    }).catch((err)=>{
        console.log(err)
    })
    // console.log(product)
},[])
console.log(data)






  return (

    
<>

<div id="filter-div">
      <div class="filter">
        <div id="filtering">
            <h2>
              Filter
            </h2>
            <h4>Sort By Name</h4>
               <a href="#"> <ul id="AtoZ">A to Z</ul> </a>
                <a href="#"><ul id="ZtoA">Z to A</ul></a>
            
            <h4>Sort By Price</h4>
                <a href="#"><ul id="LtH">Low To High</ul></a>
                <a href="#"><ul id="HtL">High To Low</ul></a>
            
            <h4>Filter By Brand</h4>
                <a href="#"><ul id="calvin">Calvin Klein</ul></a>
                <a href="#"><ul id="diesel">Diesel</ul></a>
                <a href="#"><ul id="turtle">Turtle</ul></a>
                <a href="#"><ul id="raymond">Raymond</ul></a>
                <a href="#"><ul id="adidas">Adidas</ul></a>

        </div>
      </div>
    <div id="product-container">
        {/* <!--here append all products--> */}
        <div className='cards'>
{
    data.map((el)=>{
        return <Cards image={el.pic} name={el.name} price={el.price} rating={el.rating} des={el.des} key={el.id}/>
    })
}
    </div>
    </div>



</div>
</>
  )
}
