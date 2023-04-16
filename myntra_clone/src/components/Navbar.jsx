import React from 'react'

import{Box, Flex,HStack,Spacer,Input} from "@chakra-ui/react"
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
<Box >MEN</Box>
<ul>
    <li>a</li>
    <li>b</li>
    <li>c</li>
    <li>d</li>
    <li>e</li>
</ul>

</Box>
<Box >WOMEN</Box>
<Box>KIDS</Box>
<Box>HOME & LIVING</Box>
<Box>BEAUTY</Box>

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
