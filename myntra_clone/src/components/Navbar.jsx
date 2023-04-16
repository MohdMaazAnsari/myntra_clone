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
                          <li><a href = "#">Deodorants</Link></li>
                          <li><a href = "#">Perfumes</Link></li>
                          <li><a href = "#">Beard Care</Link></li>
                          <li><a href = "#">Shaving & Aftersave</Link></li>
                          <li><a href = "#">Beard Grooming</Link></li>
                        </ul>
                      </div>
                      {/* <!-- end of item --> */}
                      <div class = "sub-menu-item">
                        <h4>Clothing</h4>
                        <ul>
                          <li><a href = "#">T-Shirts</a></li>
                          <li><a href = "#">Formal Shirts</a></li>
                          <li><a href = "#">Casual Shirts</a></li>
                          <li><a href = "#">Jeans</a></li>
                          <li><a href = "#">Casual Trousers</a></li>
                          <li><a href = "#">Track Pants</a></li>
                          <li><a href = "#">Cargos</a></li>
                          <li><a href = "#">Suits</a></li>
                          <li><a href = "#">Jackets</a></li>
                          <li><a href = "#">Tracksuits</a></li>
                        </ul>
                      </div>
                      {/* <!-- end of item --> */}
                      <div class = "sub-menu-item">
                        <h4>Accessories</h4>
                        <ul>
                          <li><a href = "#">Backpacks</a></li>
                          <li><a href = "#">Wallets</a></li>
                          <li><a href = "#">Belts</a></li>
                          <li><a href = "#">Sunglasses</a></li>
                          <li><a href = "#">Frames</a></li>
                          <li><a href = "#">Jewellery</a></li>
                          <li><a href = "#">Watches</a></li>
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
                          <li><a href = "#">Sports Shoes</a></li>
                          <li><a href = "#">Casual Shoes</a></li>
                          <li><a href = "#">Formal Shoes</a></li>
                          <li><a href = "#">Flats</a></li>
                          <li><a href = "#">Sandals</a></li>
                          <li><a href = "#">Heels</a></li>
                          <li><a href = "#">Boots</a></li>
                          <li><a href = "#">Sneakers</a></li>
                        </ul>
                      </div>
                      {/* <!-- end of item -->
                      <!-- item --> */}
                      <div class = "sub-menu-item">
                        <h4>Beauty & Grooming</h4>
                        <ul>
                          <li><a href = "#">Make Up</a></li>
                          <li><a href = "#">Skin Care</a></li>
                          <li><a href = "#">Hair Care</a></li>
                          <li><a href = "#">Bath & Spa</a></li>
                          <li><a href = "#">Deodorants & Perfumes</a></li>
                        </ul>
                      </div>
                      {/* <!-- end of item --> */}
                      <div class = "sub-menu-item">
                        <h4>Clothing</h4>
                        <ul>
                          <li><a href = "#">Dresses</a></li>
                          <li><a href = "#">Jeans</a></li>
                          <li><a href = "#">Shorts</a></li>
                          <li><a href = "#">Skirts</a></li>
                          <li><a href = "#">Trousers</a></li>
                          <li><a href = "#">Jeggings</a></li>
                          <li><a href = "#">Sarees</a></li>
                          <li><a href = "#">Kurtas</a></li>
                          <li><a href = "#">Gowns</a></li>
                        </ul>
                      </div>
                      {/* <!-- end of item --> */}
                      <div class = "sub-menu-item">
                        <h4>Accessories</h4>
                        <ul>
                          <li><a href = "#">Handbags</a></li>
                          <li><a href = "#">Shoulder Bags</a></li>
                          <li><a href = "#">Sling Bags</a></li>
                          <li><a href = "#">Clutches</a></li>
                          <li><a href = "#">Wallets</a></li>
                          <li><a href = "#">Belts</a></li>
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
                          <li><a href = "#">men's clothing</a></li>
                          <li><a href = "#">women's clothing</a></li>
                          <li><a href = "#">men's shoes</a></li>
                          <li><a href = "#">women's shoes</a></li>
                          <li><a href = "#">clothing deals</a></li>
                        </ul>
                      </div>
                      {/* <!-- end of item -->
                      <!-- item --> */}
                      <div class = "sub-menu-item">
                        <h4>Girls' Clothing</h4>
                        <ul>
                          <li><a href = "#">fine jewelry</a></li>
                          <li><a href = "#">fashion jewelry</a></li>
                          <li><a href = "#">men's accessories</a></li>
                          <li><a href = "#">handbags & bags</a></li>
                          <li><a href = "#">kid's clothing</a></li>
                        </ul>
                      </div>
                      {/* <!-- end of item --> */}
                      <div class = "sub-menu-item">
                        <h4>Footwear</h4>
                        <ul>
                          <li><a href = "#">fine jewelry</a></li>
                          <li><a href = "#">fashion jewelry</a></li>
                          <li><a href = "#">men's accessories</a></li>
                          <li><a href = "#">handbags & bags</a></li>
                          <li><a href = "#">kid's clothing</a></li>
                        </ul>
                      </div>
                      {/* <!-- end of item --> */}
                      <div class = "sub-menu-item">
                        <h4>Baby Care</h4>
                        <ul>
                          <li><a href = "#">Diapers</a></li>
                          <li><a href = "#">Baby grooming</a></li>
                          <li><a href = "#">Baby Food</a></li>
                          <li><a href = "#">Baby Gear</a></li>
                          <li><a href = "#">Baby Bedding</a></li>
                          <li><a href = "#">Baby Healthcare</a></li>
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
                          <li><a href = "#">Bedsheets</a></li>
                          <li><a href = "#">Curtains</a></li>
                          <li><a href = "#">Cushions & Pillows</a></li>
                          <li><a href = "#">Blankets</a></li>
                          <li><a href = "#">Bath Towels</a></li>
                          <li><a href = "#">Floor Covering</a></li>
                          <li><a href = "#">Smart Door Locks</a></li>
                        </ul>
                      </div>
                      {/* <!-- end of item -->
                      <!-- item --> */}
                      <div class = "sub-menu-item">
                        <h4>Home Decor</h4>
                        <ul>
                          <li><a href = "#">Painting</a></li>
                          <li><a href = "#">Clocks</a></li>
                          <li><a href = "#">Wall Shelves</a></li>
                          <li><a href = "#">Stickers</a></li>
                          <li><a href = "#">Bulbs</a></li>
                          <li><a href = "#">Wall Lamps</a></li>
                          <li><a href = "#">Table Lamps</a></li>
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
