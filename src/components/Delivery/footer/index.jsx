import * as React from "react"
import { Box, Text, Flex, Heading, List, ListItem, Link} from "@chakra-ui/react"


const Footer = () => {
  return(
    <footer>
      <Flex direction="column" bg="#333" height="auto" width="100%"
      color="white"
      textAlign="center"
      padding="80px 38px 10px 38px"
      >
        <Box>
          <Heading fontSize="16px">DAVIS JR</Heading>  
        </Box>
        <Flex
        justifyContent="center"
        fontSize="14px"
        marginTop="0px"
        >
          <List
          margin="10px"
          >
            <ListItem>
              <Link>BLOG</Link>
            </ListItem>
          </List>
          <List
          margin="10px"
          >
            <ListItem>
              <Link>REDES</Link>
            </ListItem>
          </List>
          <List
          margin="10px"
          >
            <ListItem>
              <Link>CONTACTO</Link>
            </ListItem>
          </List>
        </Flex> 
        <Box marginTop="40px">
          <Text fontSize="12px">Copyright © 2017 All Rights Reserved by Davis Jr.</Text>  
        </Box> 
      </Flex>
    </footer>
  )
}
export default Footer