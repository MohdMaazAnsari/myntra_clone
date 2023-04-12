import React from 'react'

import{Box, Flex,HStack,Spacer,Input,Image} from "@chakra-ui/react"
import { AiOutlineSearch,AiOutlineUser,AiOutlineHeart } from "react-icons/ai";
import { BiCartAlt } from "react-icons/bi";

export const Navbar = () => {
  return (
   <Box>

    <Flex justifyContent={'space-evenly'} m={10}>

<HStack spacing="30" bg="blue.800" p="5">
<Box h="40px" w="40px">

    <img  src="https://images.indianexpress.com/2021/01/myntra.png" w="100%" h="100%" alt="logo"/>
</Box>

<Box >men</Box>
<Box >women</Box>
<Box>kids</Box>
<Box>home & living</Box>
<Box>beauty</Box>

</HStack>
<Spacer/>

{/* ----------------- */}
<HStack bg="blue.300" w="40%">
<Box w="100%">
    <Input/>
    {/* searchbar */}
</Box>
<Box><AiOutlineSearch/></Box>

</HStack>
{/* ------------------ */}
<Spacer/>

<HStack spacing="30">
    
<Box><AiOutlineUser/></Box>
<Box><AiOutlineHeart/></Box>
<Box><BiCartAlt/></Box>

</HStack>
    </Flex>


   </Box>
  )
}
