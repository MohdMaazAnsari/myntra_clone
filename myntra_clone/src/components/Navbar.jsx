import React from 'react'

import{Box, Flex,HStack,Spacer,Input, Link} from "@chakra-ui/react"

import { AiOutlineSearch,AiOutlineUser,AiOutlineHeart } from "react-icons/ai";
import { BiCartAlt } from "react-icons/bi";
import {Nav,Center,menu,circular,inp} from "../styles/Navbar_Style"
import "../Navbar.css"


export const Navbar = () => {




  return (
   <Box sx={Center} >

    <Flex sx={Nav} justifyContent={'space-evenly'} m={10}>

<HStack spacing="30"  p="5">
<Box w="60px" >

    <img src="https://images.indianexpress.com/2021/01/myntra.png" w="100%"
    h="40px" alt="logo"/>
</Box>

<Box sx={menu}>

     <div id="h">
     
        
    

    <div class = "main-wrapper">
        <nav class = "navbar">
          <div class = "navbar-collapse">
            <ul class = "navbar-nav">
  
              <li>
                <a href = "_" class = "menu-link">
                  Electronics
                </a>
                <div class = "sub-menu">
                  {/* <!-- item --> */}
                  <div class = "sub-menu-item">
                    <h4>Mobiles</h4>
                    <ul>
                      <li><a href = "_">Mi</a></li>
                      <li><a href = "_">Realme</a></li>
                      <li><a href = "_">Samsung</a></li>
                      <li><a href = "_">One Plus</a></li>
                      <li><a href = "_">Vivo</a></li>
                      <li><a href = "_">Oppo</a></li>
                      <li><a href = "_">Apple</a></li>
                      <li><a href = "_">Infinix</a></li>
                      <li><a href = "_">Honor</a></li>
                      <li><a href = "_">Asus</a></li>
                    </ul>
                  </div>
                  {/* <!-- end of item -->
                  <!-- item --> */}
                  <div class = "sub-menu-item">
                    <h4>Mobile Accessories</h4>
                    <ul>
                      <li><a href = "_">Mobile Cases</a></li>
                      <li><a href = "_">Headphone & Headsets</a></li>
                      <li><a href = "_">Power Banks</a></li>
                      <li><a href = "_">Screenguards</a></li>
                      <li><a href = "_">Mobile Cables</a></li>
                      <li><a href = "_">Memory Cards</a></li>
                      <li><a href = "_">Mobile Chargers</a></li>
                      <li><a href = "_">Mobile Holders</a></li>
                      <li><a href = "_">Smart Watches</a></li>
                      <li><a href = "_">Smart Glasses(VR)</a></li>
                    </ul>
                  </div>
                  {/* <!-- end of item --> */}
                  <div class = "sub-menu-item">
                    <h4>PCs & Accessories</h4>
                    <ul>
                      <li><a href = "_">Laptops</a></li>
                      <li><a href = "_">Gaming Laptops</a></li>
                      <li><a href = "_">Desktop PCs</a></li>
                      <li><a href = "_">External Hard Disks</a></li>
                      <li><a href = "_">Pendrives</a></li>
                      <li><a href = "_">Laptop Skins & Decals</a></li>
                      <li><a href = "_">Laptop Bag</a></li>
                      <li><a href = "_">Mouse</a></li>
                      <li><a href = "_">Keyboard</a></li>
                      <li><a href = "_">Monitors</a></li>
                    </ul>
                  </div>
                  {/* <!-- end of item --> */}
                  <div class = "sub-menu-item">
                    <h4>Features</h4>
                    <ul>
                      <li><a href = "_">Google Assistance Store</a></li>
                      <li><a href = "_">ShoppingMania SmartBuy</a></li>
                      <li><a href = "_">Sony PS4 Pro & Slim</a></li>
                      <li><a href = "_">Apple Products</a></li>
                      <li><a href = "_">Microsoft Store</a></li>
                      <li><a href = "_">JBL Speakers</a></li>
                      <li><a href = "_">Philips</a></li>
                      <li><a href = "_">Mobile No Cost EMI</a></li>
                      <li><a href = "_">Complete Mobile Protection</a></li>
                    </ul>
                  </div>
                  {/* <!-- end of item --> */}
                  
                </div>
              </li>
  
              <li>
                {/* <a href = "mens-product.html" class = "menu-link"> */}
                 <Link href="/MensPage">mens</Link>
                {/* </a> */}
                <div class = "sub-menu">
                  {/* <!-- item --> */}
                  <div class = "sub-menu-item">
                    <h4>Footwear</h4>
                    <ul>
                      <li><a href = "_">Sports Shoes</a></li>
                      <li><a href = "_">Casual Shoes</a></li>
                      <li><a href = "_">Formal Shoes</a></li>
                      <li><a href = "_">Sandals & Floaters</a></li>
                      <li><a href = "_">Running Shoes</a></li>
                      <li><a href = "_">Flip-Flops</a></li>
                      <li><a href = "_">Loafers</a></li>
                      <li><a href = "_">Sneakers</a></li>
                    </ul>
                  </div>
                  {/* <!-- end of item -->
                  <!-- item --> */}
                  <div class = "sub-menu-item">
                    <h4>Men's Grooming</h4>
                    <ul>
                      <li><a href = "_">Deodorants</a></li>
                      <li><a href = "_">Perfumes</a></li>
                      <li><a href = "_">Beard Care</a></li>
                      <li><a href = "_">Shaving & Aftersave</a></li>
                      <li><a href = "_">Beard Grooming</a></li>
                    </ul>
                  </div>
                  {/* <!-- end of item --> */}
                  <div class = "sub-menu-item">
                    <h4>Clothing</h4>
                    <ul>
                      <li><a href = "_">T-Shirts</a></li>
                      <li><a href = "_">Formal Shirts</a></li>
                      <li><a href = "_">Casual Shirts</a></li>
                      <li><a href = "_">Jeans</a></li>
                      <li><a href = "_">Casual Trousers</a></li>
                      <li><a href = "_">Track Pants</a></li>
                      <li><a href = "_">Cargos</a></li>
                      <li><a href = "_">Suits</a></li>
                      <li><a href = "_">Jackets</a></li>
                      <li><a href = "_">Tracksuits</a></li>
                    </ul>
                  </div>
                  {/* <!-- end of item --> */}
                  <div class = "sub-menu-item">
                    <h4>Accessories</h4>
                    <ul>
                      <li><a href = "_">Backpacks</a></li>
                      <li><a href = "_">Wallets</a></li>
                      <li><a href = "_">Belts</a></li>
                      <li><a href = "_">Sunglasses</a></li>
                      <li><a href = "_">Frames</a></li>
                      <li><a href = "_">Jewellery</a></li>
                      <li><a href = "_">Watches</a></li>
                    </ul>
                  </div>
                  {/* <!-- end of item --> */}
                </div>
  
              </li>
  
              <li>
                <a href = "women-product.html" class = "menu-link">
                  Women
                </a>
                <div class = "sub-menu">
                  {/* <!-- item --> */}
                  <div class = "sub-menu-item">
                    <h4>Footwear</h4>
                    <ul>
                      <li><a href = "_">Sports Shoes</a></li>
                      <li><a href = "_">Casual Shoes</a></li>
                      <li><a href = "_">Formal Shoes</a></li>
                      <li><a href = "_">Flats</a></li>
                      <li><a href = "_">Sandals</a></li>
                      <li><a href = "_">Heels</a></li>
                      <li><a href = "_">Boots</a></li>
                      <li><a href = "_">Sneakers</a></li>
                    </ul>
                  </div>
                  {/* <!-- end of item -->
                  <!-- item --> */}
                  <div class = "sub-menu-item">
                    <h4>Beauty & Grooming</h4>
                    <ul>
                      <li><a href = "_">Make Up</a></li>
                      <li><a href = "_">Skin Care</a></li>
                      <li><a href = "_">Hair Care</a></li>
                      <li><a href = "_">Bath & Spa</a></li>
                      <li><a href = "_">Deodorants & Perfumes</a></li>
                    </ul>
                  </div>
                  {/* <!-- end of item --> */}
                  <div class = "sub-menu-item">
                    <h4>Clothing</h4>
                    <ul>
                      <li><a href = "_">Dresses</a></li>
                      <li><a href = "_">Jeans</a></li>
                      <li><a href = "_">Shorts</a></li>
                      <li><a href = "_">Skirts</a></li>
                      <li><a href = "_">Trousers</a></li>
                      <li><a href = "_">Jeggings</a></li>
                      <li><a href = "_">Sarees</a></li>
                      <li><a href = "_">Kurtas</a></li>
                      <li><a href = "_">Gowns</a></li>
                    </ul>
                  </div>
                  {/* <!-- end of item --> */}
                  <div class = "sub-menu-item">
                    <h4>Accessories</h4>
                    <ul>
                      <li><a href = "_">Handbags</a></li>
                      <li><a href = "_">Shoulder Bags</a></li>
                      <li><a href = "_">Sling Bags</a></li>
                      <li><a href = "_">Clutches</a></li>
                      <li><a href = "_">Wallets</a></li>
                      <li><a href = "_">Belts</a></li>
                    </ul>
                  </div>
                  {/* <!-- end of item --> */}
                </div>
  
              </li>
  
              <li>
                <a href = "_" class = "menu-link">
                  Baby
                </a>
                <div class = "sub-menu">
                  {/* <!-- item --> */}
                  <div class = "sub-menu-item">
                    <h4>Boys' Clothing</h4>
                    <ul>
                      <li><a href = "_">men's clothing</a></li>
                      <li><a href = "_">women's clothing</a></li>
                      <li><a href = "_">men's shoes</a></li>
                      <li><a href = "_">women's shoes</a></li>
                      <li><a href = "_">clothing deals</a></li>
                    </ul>
                  </div>
                  {/* <!-- end of item -->
                  <!-- item --> */}
                  <div class = "sub-menu-item">
                    <h4>Girls' Clothing</h4>
                    <ul>
                      <li><a href = "_">fine jewelry</a></li>
                      <li><a href = "_">fashion jewelry</a></li>
                      <li><a href = "_">men's accessories</a></li>
                      <li><a href = "_">handbags & bags</a></li>
                      <li><a href = "_">kid's clothing</a></li>
                    </ul>
                  </div>
                  {/* <!-- end of item --> */}
                  <div class = "sub-menu-item">
                    <h4>Footwear</h4>
                    <ul>
                      <li><a href = "_">fine jewelry</a></li>
                      <li><a href = "_">fashion jewelry</a></li>
                      <li><a href = "_">men's accessories</a></li>
                      <li><a href = "_">handbags & bags</a></li>
                      <li><a href = "_">kid's clothing</a></li>
                    </ul>
                  </div>
                  {/* <!-- end of item --> */}
                  <div class = "sub-menu-item">
                    <h4>Baby Care</h4>
                    <ul>
                      <li><a href = "_">Diapers</a></li>
                      <li><a href = "_">Baby grooming</a></li>
                      <li><a href = "_">Baby Food</a></li>
                      <li><a href = "_">Baby Gear</a></li>
                      <li><a href = "_">Baby Bedding</a></li>
                      <li><a href = "_">Baby Healthcare</a></li>
                    </ul>
                  </div>
                  {/* <!-- end of item --> */}
                </div>
  
              </li>
  
              <li>
                <a href = "_" class = "menu-link">
                 Furniture
                </a>
                <div class = "sub-menu">
                  {/* <!-- item --> */}
                  <div class = "sub-menu-item">
                    <h4>Furnishing</h4>
                    <ul>
                      <li><a href = "_">Bedsheets</a></li>
                      <li><a href = "_">Curtains</a></li>
                      <li><a href = "_">Cushions & Pillows</a></li>
                      <li><a href = "_">Blankets</a></li>
                      <li><a href = "_">Bath Towels</a></li>
                      <li><a href = "_">Floor Covering</a></li>
                      <li><a href = "_">Smart Door Locks</a></li>
                    </ul>
                  </div>
                  {/* <!-- end of item -->
                  <!-- item --> */}
                  <div class = "sub-menu-item">
                    <h4>Home Decor</h4>
                    <ul>
                      <li><a href = "_">Painting</a></li>
                      <li><a href = "_">Clocks</a></li>
                      <li><a href = "_">Wall Shelves</a></li>
                      <li><a href = "_">Stickers</a></li>
                      <li><a href = "_">Bulbs</a></li>
                      <li><a href = "_">Wall Lamps</a></li>
                      <li><a href = "_">Table Lamps</a></li>
                    </ul>
                  </div>
                  {/* <!-- end of item -->
                  <!-- item --> */}
                  <div class = "sub-menu-item">
                    <h4>Furnitures</h4>
                    <ul>
                      <li><a href = "_">Beds</a></li>
                      <li><a href = "_">Mattresses</a></li>
                      <li><a href = "_">Wardrobes</a></li>
                      <li><a href = "_">Sofa</a></li>
                      <li><a href = "_">TV Units</a></li>
                      <li><a href = "_">Shoe Racks</a></li>
                      <li><a href = "_">Coffee Tables</a></li>
                      <li><a href = "_">Bean Bags</a></li>
                      <li><a href = "_">Sofa Beds</a></li>
                    </ul>
                  </div>
                </div>
              </li>
  
              <li>
                <a href = "_" class = "menu-link">
                 More
                </a>
                <div class = "sub-menu">
                  {/* <!-- item --> */}
                  <div class = "sub-menu-item">
                    <h4>Sports</h4>
                    <ul>
                      <li><a href = "_">Cricket</a></li>
                      <li><a href = "_">Badminton</a></li>
                      <li><a href = "_">Cycling</a></li>
                      <li><a href = "_">Football</a></li>
                      <li><a href = "_">Skating</a></li>
                      <li><a href = "_">Swimming</a></li>
                      <li><a href = "_">Home Gyms</a></li>
                      <li><a href = "_">Hiking</a></li>
                    </ul>
                  </div>
                  {/* <!-- end of item -->
                  <!-- item --> */}
                  <div class = "sub-menu-item">
                    <h4>Books</h4>
                    <ul>
                      <li><a href = "_">Entrance Exams</a></li>
                      <li><a href = "_">Academics</a></li>
                      <li><a href = "_">Non Fiction</a></li>
                      <li><a href = "_">Self-Help</a></li>
                      <li><a href = "_">E-Learning</a></li>
                      <li><a href = "_">Young Readers</a></li>
                    </ul>
                  </div>
                  {/* <!-- end of item --> */}
                  <div class = "sub-menu-item">
                    <h4>Stationery</h4>
                    <ul>
                      <li><a href = "_">Pens</a></li>
                      <li><a href = "_">Diaries</a></li>
                      <li><a href = "_">Card Holders</a></li>
                      <li><a href = "_">Desk Organizers</a></li>
                      <li><a href = "_">Calculators</a></li>
                    </ul>
                  </div>
                  {/* <!-- end of item --> */}
                </div>
  
              </li>
  
              <li>
                <a href = "_" class = "menu-link">
                  Flight
                </a>
              </li>
  
              <li>
                <a href = "_" class = "menu-link">
                  Offer
                </a>
              </li>
  
              <li>
                <a href = "_" class = "menu-link">
                  Grocery
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>


    </Box>

</HStack>
<Spacer/>

{/* ----------------- */}
<HStack  w="40%" mr="10px">
<Box w="100%">
    <Input sx={inp}/>
    {/* searchbar */}
</Box>
<Box  colorScheme="gray" p="10px" sx={circular} ><AiOutlineSearch/></Box>

</HStack>
{/* ------------------ */}
<Spacer/>

<HStack  spacing="30">
    
<Box sx={Center}><AiOutlineUser/>
<span>Profile</span>
</Box>
<Box><AiOutlineHeart/>
<span>Wishlist</span>
</Box>
<Box>
<Link href="/Cart"><BiCartAlt/></Link>

<span>Cart</span>
</Box>

</HStack>
    </Flex>


   </Box>
  )
}
