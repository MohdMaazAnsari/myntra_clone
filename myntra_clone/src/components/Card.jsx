import React from 'react'
import { Card, CardHeader, CardBody, CardFooter,Image,Stack,Text,ButtonGroup,Divider,Button ,Heading} from '@chakra-ui/react'
import "../styles/card.css"
import {RiStarSFill
} from "react-icons/ri"


export const Cards = ({image, name, price, rating, des}) => {



    let arr=new Array(rating).fill(0)


  return (
    <Card maxW='sm'>
  <CardBody>
    <Image h="240px"
      src={image}
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='sm'>{name}</Heading>
      <Text>
    {des}
      </Text>
      <Text color='black' fontSize='xl'>
      ${price}
      </Text>
   
      <Text color='blue.600' fontSize='2xl' mt="0px">
    rating:

   <div className='rating' mt="0px"> {
      arr.map((el)=><RiStarSFill/>)
    }</div>

    

      </Text>
      
  
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
  )
}
