import styles from '../styles/Dropdown.module.css'

import {

    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    useColorMode
  } from '@chakra-ui/react'


  import { Stack, Text } from '@chakra-ui/react';
// import { Navigate } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';


  const dropdown_options = [

    {to : '/MensPage', text : 'Mens'},
    {to : '#', text : 'Womens'},
    {to : '#', text : 'Kids'},
    {to : '#', text : 'Fragrance'},
    {to : '#', text : 'Appliances'},
    {to : '#', text : 'Bath&Body'},
    {to : '#', text : `Natural`},
    {to : '#', text : 'Health & Wellness'},

];


function Navaccordion() {

  const Navigate=useNavigate()

   const  {colorMode} = useColorMode();

   const handleclick=()=>{
    Navigate("/MensPage")
   }

 
  return (

    <Box mt={'40px'}>


        <Stack>

        {dropdown_options.map((el,i) => {

                return <Text onClick={handleclick} className = {styles[`drp${i}`]} pb = '3' color = {colorMode == 'light' ? ('gray.600') :('gray.300')} key = {el.text} _hover = {{cursor : 'pointer', color : colorMode == 'light' ? 'purple' : 'aqua'}}  fontWeight={'600'} fontSize={['sm','1rem','1rem','1rem']}>{el.text}</Text>

        })}
=
        </Stack>




  {/* -------------------------------------------------------- */}


    

    
    </Box>
  )
}

export default Navaccordion