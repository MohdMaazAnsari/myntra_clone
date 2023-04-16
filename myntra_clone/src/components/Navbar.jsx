import React from 'react'

import{Box, Flex,HStack,Spacer,Input, Link} from "@chakra-ui/react"
import { AiOutlineSearch,AiOutlineUser,AiOutlineHeart } from "react-icons/ai";
import { BiCartAlt } from "react-icons/bi";
import {Nav,Center} from "../styles/Navbar_Style"


export const Navbar = () => {
  return (
   <Box >

    <Flex sx={Nav} justifyContent={'space-evenly'} m={10}>

<HStack spacing="30" bg="blue.300" p="5">
<Box w="60px" >

    <img src="https://images.indianexpress.com/2021/01/myntra.png" w="100%"
    h="40px" alt="logo"/>
</Box>

<Box>
<div id="h">
        
    

        <div class = "main-wrapper">
            <nav class = "navbar">
              <div class = "navbar-collapse">
                <ul class = "navbar-nav">
      
                  <li>
                    <a href = "#" class = "menu-link">
                      Electronics
                      <i class="arrow down"></i>
                    </a>
                    <div class = "sub-menu">
                      {/* <!-- item --> */}
                      <div class = "sub-menu-item">
                        <h4>Mobiles</h4>
                        <ul>
                          <li><Link href = "#">Mi</Link></li>
                          <li><Link href = "#">Realme</Link></li>
                          <li><Link href = "#">Samsung</Link></li>
                          <li><Link href = "#">One Plus</Link></li>
                          <li><Link href = "#">Vivo</Link></li>
                          <li><Link href = "#">Oppo</Link></li>
                          <li><Link href = "#">Apple</Link></li>
                          <li><Link href = "#">Infinix</Link></li>
                          <li><Link href = "#">Honor</Link></li>
                          <li><Link href = "#">Asus</Link></li>
                        </ul>
                      </div>
                      {/* <!-- end of item -->
                      <!-- item --> */}
                      <div class = "sub-menu-item">
                        <h4>Mobile Accessories</h4>
                        <ul>
                          <li><Link href = "#">Mobile Cases</Link></li>
                          <li><Link href = "#">Headphone & Headsets</Link></li>
                          <li><Link href = "#">Power Banks</Link></li>
                          <li><Link href = "#">Screenguards</Link></li>
                          <li><Link href = "#">Mobile Cables</Link></li>
                          <li><Link href = "#">Memory Cards</Link></li>
                          <li><Link href = "#">Mobile Chargers</Link></li>
                          <li><Link href = "#">Mobile Holders</Link></li>
                          <li><Link href = "#">Smart Watches</Link></li>
                          <li><Link href = "#">Smart Glasses(VR)</Link></li>
                        </ul>
                      </div>
                      {/* <!-- end of item --> */}
                      <div class = "sub-menu-item">
                        <h4>PCs & Accessories</h4>
                        <ul>
                          <li><Link href = "#">Laptops</Link></li>
                          <li><Link href = "#">Gaming Laptops</Link></li>
                          <li><Link href = "#">Desktop PCs</Link></li>
                          <li><Link href = "#">External Hard Disks</Link></li>
                          <li><Link href = "#">Pendrives</Link></li>
                          <li><Link href = "#">Laptop Skins & Decals</Link></li>
                          <li><Link href = "#">Laptop Bag</Link></li>
                          <li><Link href = "#">Mouse</Link></li>
                          <li><Link href = "#">Keyboard</Link></li>
                          <li><Link href = "#">Monitors</Link></li>
                        </ul>
                      </div>
                      {/* <!-- end of item --> */}
                      <div class = "sub-menu-item">
                        <h4>Features</h4>
                        <ul>
                          <li><Link href = "#">Google Assistance Store</Link></li>
                          <li><Link href = "#">ShoppingMania SmartBuy</Link></li>
                          <li><Link href = "#">Sony PS4 Pro & Slim</Link></li>
                          <li><Link href = "#">Apple Products</Link></li>
                          <li><Link href = "#">Microsoft Store</Link></li>
                          <li><Link href = "#">JBL Speakers</Link></li>
                          <li><Link href = "#">Philips</Link></li>
                          <li><Link href = "#">Mobile No Cost EMI</Link></li>
                          <li><Link href = "#">Complete Mobile Protection</Link></li>
                        </ul>
                      </div>
                      {/* <!-- end of item --> */}
                      
                    </div>
                  </li>
      
                  <li>
                    <a href = "mens-product.html" class = "menu-link">
                      Men
                      <i class="arrow down"></i>
                    </a>
                    <div class = "sub-menu">
                      {/* <!-- item --> */}
                      <div class = "sub-menu-item">
                        <h4>Footwear</h4>
                        <ul>
                          <li><Link href = "#">Sports Shoes</Link></li>
                          <li><Link href = "#">Casual Shoes</Link></li>
                          <li><Link href = "#">Formal Shoes</Link></li>
                          <li><Link href = "#">Sandals & Floaters</Link></li>
                          <li><Link href = "#">Running Shoes</Link></li>
                          <li><Link href = "#">Flip-Flops</Link></li>
                          <li><Link href = "#">Loafers</Link></li>
                          <li><Link href = "#">Sneakers</Link></li>
                        </ul>
                      </div>
                      {/* <!-- end of item -->
                      <!-- item --> */}
                      <div class = "sub-menu-item">
                        <h4>Men's Grooming</h4>
                        <ul>
                          <li><Link href = "#">Deodorants</Link></li>
                          <li><Link href = "#">Perfumes</Link></li>
                          <li><Link href = "#">Beard Care</Link></li>
                          <li><Link href = "#">Shaving & Aftersave</Link></li>
                          <li><Link href = "#">Beard Grooming</Link></li>
                        </ul>
                      </div>
                      {/* <!-- end of item --> */}
                      <div class = "sub-menu-item">
                        <h4>Clothing</h4>
                        <ul>
                          <li><Link href = "#">T-Shirts</Link></li>
                          <li><Link href = "#">Formal Shirts</Link></li>
                          <li><Link href = "#">Casual Shirts</Link></li>
                          <li><Link href = "#">Jeans</Link></li>
                          <li><Link href = "#">Casual Trousers</Link></li>
                          <li><Link href = "#">Track Pants</Link></li>
                          <li><Link href = "#">Cargos</Link></li>
                          <li><Link href = "#">Suits</Link></li>
                          <li><Link href = "#">Jackets</Link></li>
                          <li><Link href = "#">Tracksuits</Link></li>
                        </ul>
                      </div>
                      {/* <!-- end of item --> */}
                      <div class = "sub-menu-item">
                        <h4>Accessories</h4>
                        <ul>
                          <li><Link href = "#">Backpacks</Link></li>
                          <li><Link href = "#">Wallets</Link></li>
                          <li><Link href = "#">Belts</Link></li>
                          <li><Link href = "#">Sunglasses</Link></li>
                          <li><Link href = "#">Frames</Link></li>
                          <li><Link href = "#">Jewellery</Link></li>
                          <li><Link href = "#">Watches</Link></li>
                        </ul>
                      </div>
                      {/* <!-- end of item --> */}
                    </div>
      
                  </li>
      
                  <li>
                    <a href = "women-product.html" class = "menu-link">
                      Women
                      <i class="arrow down"></i>
                    </a>
                    <div class = "sub-menu">
                      {/* <!-- item --> */}
                      <div class = "sub-menu-item">
                        <h4>Footwear</h4>
                        <ul>
                          <li><Link href = "#">Sports Shoes</Link></li>
                          <li><Link href = "#">Casual Shoes</Link></li>
                          <li><Link href = "#">Formal Shoes</Link></li>
                          <li><Link href = "#">Flats</Link></li>
                          <li><Link href = "#">Sandals</Link></li>
                          <li><Link href = "#">Heels</Link></li>
                          <li><Link href = "#">Boots</Link></li>
                          <li><Link href = "#">Sneakers</Link></li>
                        </ul>
                      </div>
                      {/* <!-- end of item -->
                      <!-- item --> */}
                      <div class = "sub-menu-item">
                        <h4>Beauty & Grooming</h4>
                        <ul>
                          <li><Link href = "#">Make Up</Link></li>
                          <li><Link href = "#">Skin Care</Link></li>
                          <li><Link href = "#">Hair Care</Link></li>
                          <li><Link href = "#">Bath & Spa</Link></li>
                          <li><Link href = "#">Deodorants & Perfumes</Link></li>
                        </ul>
                      </div>
                      {/* <!-- end of item --> */}
                      <div class = "sub-menu-item">
                        <h4>Clothing</h4>
                        <ul>
                          <li><Link href = "#">Dresses</Link></li>
                          <li><Link href = "#">Jeans</Link></li>
                          <li><Link href = "#">Shorts</Link></li>
                          <li><Link href = "#">Skirts</Link></li>
                          <li><Link href = "#">Trousers</Link></li>
                          <li><Link href = "#">Jeggings</Link></li>
                          <li><Link href = "#">Sarees</Link></li>
                          <li><Link href = "#">Kurtas</Link></li>
                          <li><Link href = "#">Gowns</Link></li>
                        </ul>
                      </div>
                      {/* <!-- end of item --> */}
                      <div class = "sub-menu-item">
                        <h4>Accessories</h4>
                        <ul>
                          <li><Link href = "#">Handbags</Link></li>
                          <li><Link href = "#">Shoulder Bags</Link></li>
                          <li><Link href = "#">Sling Bags</Link></li>
                          <li><Link href = "#">Clutches</Link></li>
                          <li><Link href = "#">Wallets</Link></li>
                          <li><Link href = "#">Belts</Link></li>
                        </ul>
                      </div>
                      {/* <!-- end of item --> */}
                    </div>
      
                  </li>
      
                  <li>
                    <a href = "#" class = "menu-link">
                      Baby & Kids
                      <i class="arrow down"></i>
                    </a>
                    <div class = "sub-menu">
                      {/* <!-- item --> */}
                      <div class = "sub-menu-item">
                        <h4>Boys' Clothing</h4>
                        <ul>
                          <li><Link href = "#">men's clothing</Link></li>
                          <li><Link href = "#">women's clothing</Link></li>
                          <li><Link href = "#">men's shoes</Link></li>
                          <li><Link href = "#">women's shoes</Link></li>
                          <li><Link href = "#">clothing deals</Link></li>
                        </ul>
                      </div>
                      {/* <!-- end of item -->
                      <!-- item --> */}
                      <div class = "sub-menu-item">
                        <h4>Girls' Clothing</h4>
                        <ul>
                          <li><Link href = "#">fine jewelry</Link></li>
                          <li><Link href = "#">fashion jewelry</Link></li>
                          <li><Link href = "#">men's accessories</Link></li>
                          <li><Link href = "#">handbags & bags</Link></li>
                          <li><Link href = "#">kid's clothing</Link></li>
                        </ul>
                      </div>
                      {/* <!-- end of item --> */}
                      <div class = "sub-menu-item">
                        <h4>Footwear</h4>
                        <ul>
                          <li><Link href = "#">fine jewelry</Link></li>
                          <li><Link href = "#">fashion jewelry</Link></li>
                          <li><Link href = "#">men's accessories</Link></li>
                          <li><Link href = "#">handbags & bags</Link></li>
                          <li><Link href = "#">kid's clothing</Link></li>
                        </ul>
                      </div>
                      {/* <!-- end of item --> */}
                      <div class = "sub-menu-item">
                        <h4>Baby Care</h4>
                        <ul>
                          <li><Link href = "#">Diapers</Link></li>
                          <li><Link href = "#">Baby grooming</Link></li>
                          <li><Link href = "#">Baby Food</Link></li>
                          <li><Link href = "#">Baby Gear</Link></li>
                          <li><Link href = "#">Baby Bedding</Link></li>
                          <li><Link href = "#">Baby Healthcare</Link></li>
                        </ul>
                      </div>
                      {/* <!-- end of item --> */}
                    </div>
      
                  </li>
      
                  <li>
                    <a href = "#" class = "menu-link">
                      Home & Furniture
                      <i class="arrow down"></i>
                    </a>
                    <div class = "sub-menu">
                      {/* <!-- item --> */}
                      <div class = "sub-menu-item">
                        <h4>Furnishing</h4>
                        <ul>
                          <li><Link href = "#">Bedsheets</Link></li>
                          <li><Link href = "#">Curtains</Link></li>
                          <li><Link href = "#">Cushions & Pillows</Link></li>
                          <li><Link href = "#">Blankets</Link></li>
                          <li><Link href = "#">Bath Towels</Link></li>
                          <li><Link href = "#">Floor Covering</Link></li>
                          <li><Link href = "#">Smart Door Locks</Link></li>
                        </ul>
                      </div>
                      {/* <!-- end of item -->
                      <!-- item --> */}
                      <div class = "sub-menu-item">
                        <h4>Home Decor</h4>
                        <ul>
                          <li><Link href = "#">Painting</Link></li>
                          <li><Link href = "#">Clocks</Link></li>
                          <li><Link href = "#">Wall Shelves</Link></li>
                          <li><Link href = "#">Stickers</Link></li>
                          <li><Link href = "#">Bulbs</Link></li>
                          <li><Link href = "#">Wall Lamps</Link></li>
                          <li><Link href = "#">Table Lamps</Link></li>
                        </ul>
                      </div>
                      {/* <!-- end of item -->
                      <!-- item --> */}
                      <div class = "sub-menu-item">
                        <h4>Furnitures</h4>
                        <ul>
                          <li><a href = "#">Beds</a></li>
                          <li><a href = "#">Mattresses</a></li>
                          <li><a href = "#">Wardrobes</a></li>
                          <li><a href = "#">Sofa</a></li>
                          <li><a href = "#">TV Units</a></li>
                          <li><a href = "#">Shoe Racks</a></li>
                          <li><a href = "#">Coffee Tables</a></li>
                          <li><a href = "#">Bean Bags</a></li>
                          <li><a href = "#">Sofa Beds</a></li>
                        </ul>
                      </div>
                    </div>
                  </li>
      
                  <li>
                    <a href = "#" class = "menu-link">
                      Sports, Books & More
                      <i class="arrow down"></i>
                    </a>
                    <div class = "sub-menu">
                      {/* <!-- item --> */}
                      <div class = "sub-menu-item">
                        <h4>Sports</h4>
                        <ul>
                          <li><a href = "#">Cricket</a></li>
                          <li><a href = "#">Badminton</a></li>
                          <li><a href = "#">Cycling</a></li>
                          <li><a href = "#">Football</a></li>
                          <li><a href = "#">Skating</a></li>
                          <li><a href = "#">Swimming</a></li>
                          <li><a href = "#">Home Gyms</a></li>
                          <li><a href = "#">Hiking</a></li>
                        </ul>
                      </div>
                      {/* <!-- end of item -->
                      <!-- item --> */}
                      <div class = "sub-menu-item">
                        <h4>Books</h4>
                        <ul>
                          <li><a href = "#">Entrance Exams</a></li>
                          <li><a href = "#">Academics</a></li>
                          <li><a href = "#">Non Fiction</a></li>
                          <li><a href = "#">Self-Help</a></li>
                          <li><a href = "#">E-Learning</a></li>
                          <li><a href = "#">Young Readers</a></li>
                        </ul>
                      </div>
                      {/* <!-- end of item --> */}
                      <div class = "sub-menu-item">
                        <h4>Stationery</h4>
                        <ul>
                          <li><a href = "#">Pens</a></li>
                          <li><a href = "#">Diaries</a></li>
                          <li><a href = "#">Card Holders</a></li>
                          <li><a href = "#">Desk Organizers</a></li>
                          <li><a href = "#">Calculators</a></li>
                        </ul>
                      </div>
                      {/* <!-- end of item --> */}
                    </div>
      
                  </li>
      
                  <li>
                    <a href = "#" class = "menu-link">
                      Flight
                    </a>
                  </li>
      
                  <li>
                    <a href = "#" class = "menu-link">
                      Offer Zone
                    </a>
                  </li>
      
                  <li>
                    <a href = "#" class = "menu-link">
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
<HStack bg="blue.300" w="40%">
<Box w="100%" m="20px">
    <Input/>
    {/* searchbar */}
</Box>
<Box><AiOutlineSearch/></Box>

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
<Box><BiCartAlt/>
<span>Cart</span>
</Box>

</HStack>
    </Flex>


   </Box>
  )
}
