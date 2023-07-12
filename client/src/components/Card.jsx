import { Button, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Card = ({ amount, img, handleCheckout }) => {
  console.log(typeof(amount))


    return (
        <VStack>
            <Image src={img} boxSize={"64"} objectFit="cover" />
            <Text>₹{amount}</Text>
            <Button onClick={() => handleCheckout(amount)}>Buy Now</Button>
        </VStack>
    )
}

export default Card