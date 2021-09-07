import * as React from "react"
import { Box, Text, Button, Link, Flex } from "@chakra-ui/react"
import Item from "./components/Item"

const Span = () => {
  return(
    <Box >
      <Text wisth="100%" textAlign="center" marginTop="80px" fontSize="2rem" fontWeight="900" letterSpacing="1.5px" >know my tastes</Text>
      <Flex direction='column' padding='10px 3% '>
        <Item/>
        <Item/>
      </Flex>
    </Box>
  )
}
export default Span