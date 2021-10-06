import * as React from "react"
import { Box, Text, Button, Link, Flex } from "@chakra-ui/react"
import Item from "./components/Item"
import ItemTwo from "./components/ItemTwo/index"

const Span = () => {
  return(
    <Box background="#e9e9e9" paddingTop="80px">
      <Box textAlign="center" marginBottom="20px" >
        <Text borderBottom="3px solid #333" color='#333' wisth="310px" left="0px" right="0" margin="0 auto" marginTop="40px" fontSize="2rem" fontWeight="600" letterSpacing={{base:"0.5px" , lg:"1.5px"}} >know my tastes</Text>
      </Box>
      <Flex direction='column' padding='10px 3% '>
        <Item/>
        <ItemTwo/>
      </Flex>
    </Box>
  )
}
export default Span