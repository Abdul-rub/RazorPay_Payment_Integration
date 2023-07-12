import { Box, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { useSearchParams } from 'react-router-dom'



const PaymentSuccess = () => {

    const SearchId = useSearchParams()[0]
    const refrenceNumber = SearchId.get("reference")

  return (
    <>
    <Box h="100vh" display="flex" alignItems="center" justifyContent="center">
    <VStack spacing={4}>
      <Heading textTransform="uppercase">Order Successful</Heading>
      <Text>Reference No. {refrenceNumber}</Text>
    </VStack>
  </Box>
  </>
  )
}

export default PaymentSuccess