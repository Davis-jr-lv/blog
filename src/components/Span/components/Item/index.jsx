import * as React from "react"
import { Box, Text, Button, Heading, Link, Flex, Image } from "@chakra-ui/react"
import Beisbol from "../../../img/beisbol.jpg"
import Develop from "../../../img/develop.jpg"


const Item = () => {
  return(
    <Flex marginBottom="30px" justifyContent="space-between" flexWrap="wrap" width="100%">
      <Box marginBottom="20px" width={{base:"100%", md:"45%", lg:"31%"}} minWidth={{ base:"200px", lg:"300px" }} height="auto" background="white" border="3px solid #333" 
      _hover={{
        ".foto":{
          transform:"scale(1.2)",
          transition:"0.5s",
        }
      }}
      >
        <Box padding="20px 20px" overflow="hidden">
          <Box overflow="hidden">
            <Link href="#" >
              <Image className="foto" src={Beisbol} alt="" borderRadius="5px" transition="0.5s" objectFit="cover" boxSize="100%"
              margin="0px"
              />
            </Link>
          </Box>
          <Box marginTop="20px">
            <Heading margin="0px" fontSize="1.2rem">Beisbol</Heading>
            <Text color='#333' fontSize="1rem"> 
             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit ipsum, aliquam ullam ipsam repudiandae sed, est adipisci doloremque eius rerum commodi ducimus laborum.</Text>
          </Box>
          <Box
          marginTop='30px'
          >
            <Link
            border="3px solid #333"
            textDecoration="none"
            padding='15px 40px'
            color="white"
            background='#333'
            transition='0.2s '
            _hover={{
              background:"white",
              transition:"0.2s",
              color:"#333"
            }}
            >
            let's talk
            </Link>
          </Box>
        </Box>
      </Box>
      <Box marginBottom="20px" width={{base:"100%", md:"45%", lg:"31%"}} minWidth={{ base:"200px", lg:"300px" }} height="auto"  background="white" border="3px solid #333" 
      _hover={{
        ".foto":{
          transform:"scale(1.2)",
          transition:"0.5s",
        }
      }}
      >
        <Box padding="20px 20px" overflow="hidden">
          <Box overflow="hidden">
            <Link href="#" >
              <Image className="foto" src={Beisbol} alt="" borderRadius="5px" transition="0.5s" objectFit="cover" boxSize="100%"
              margin="0px"
              />
            </Link>
          </Box>
          <Box marginTop="20px">
            <Heading margin="0px" fontSize="1.2rem">Beisbol</Heading>
            <Text color='#333' fontSize="1rem">  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit ipsum, aliquam ullam ipsam repudiandae sed, est adipisci doloremque eius rerum commodi ducimus laborum.</Text>
          </Box>
          <Box
          marginTop='30px'
          >
            <Link
            border="3px solid #333"
            textDecoration="none"
            padding='15px 40px'
            color="white"
            background='#333'
            transition='0.2s '
            _hover={{
              background:"white",
              transition:"0.2s",
              color:"#333"
            }}
            >
            let's talk
            </Link>
          </Box>
        </Box>
      </Box>
      <Box marginBottom="20px" width={{base:"100%", md:"45%", lg:"31%"}} minWidth={{ base:"200px", lg:"300px" }} height="auto"  background="white" border="3px solid #333" 
      _hover={{
        ".foto":{
          transform:"scale(1.2)",
          transition:"0.5s",
        }
      }}
      >
        <Box padding="20px 20px" overflow="hidden">
          <Box overflow="hidden">
            <Link href="#" >
              <Image className="foto" src={Beisbol} alt="" borderRadius="5px" transition="0.5s" objectFit="cover" boxSize="100%"
              margin="0px"
              />
            </Link>
          </Box>
          <Box marginTop="20px">
            <Heading margin="0px" fontSize="1.2rem">Beisbol</Heading>
            <Text color='#333' fontSize="1rem">  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit ipsum, aliquam ullam ipsam repudiandae sed, est adipisci doloremque eius rerum commodi ducimus laborum.</Text>
          </Box>
          <Box
          marginTop='30px'
          >
            <Link
            border="3px solid #333"
            textDecoration="none"
            padding='15px 40px'
            color="white"
            background='#333'
            transition='0.2s '
            _hover={{
              background:"white",
              transition:"0.2s",
              color:"#333"
            }}
            >
            let's talk
            </Link>
          </Box>
        </Box>
      </Box>
    </Flex>
    
  )
}
export default Item