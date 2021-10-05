import * as React from "react"
import { Box, Text, Button, Link, Flex, Image } from "@chakra-ui/react"
import Beisbol from "../../../img/beisbol.jpg"
import Develop from "../../../img/develop.jpg"


const Item = () => {
  return(
    <Flex marginBottom="30px" justifyContent="space-between" flexWrap="wrap" width="100%">
      <Box marginBottom="20px" width={{base:"100%", md:"45%", lg:"31%"}} minWidth="300px" height="auto" boxShadow="0px 2px 5px 3px rgba(207,207,207,0.4)" background="#f3f3f3" 
      _hover={{
        ".foto":{
          transform:"scale(1.2)",
          transition:"0.2s",
        }
      }}
      >
        <Box padding="20px 20px" overflow="hidden">
          <Box overflow="hidden">
            <Link href="#" >
              <Image className="foto" src={Beisbol} alt="" borderRadius="5px" transition="0.2s" objectFit="cover" boxSize="100%"
              margin="0px"
              />
            </Link>
          </Box>
          <Box marginTop="20px">
            <Text color='#333' fontSize="1.2rem"> <strong>Beisbol</strong><br/> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit ipsum, aliquam ullam ipsam repudiandae sed, est adipisci doloremque eius rerum commodi ducimus laborum.</Text>
          </Box>
          <Box
          marginTop='30px'
          >
            <Link
            textDecoration="none"
            padding='15px 40px'
            color="white"
            background='#333'
            transition='0.2s '
            _hover={{
              background:"#b1afaf9e",
              transition:"0.2s",
              color:"#333"
            }}
            >
              let's talk
            </Link>
          </Box>
        </Box>
      </Box>
      <Box marginBottom="20px" width={{base:"100%", md:"45%", lg:"31%"}} minWidth="300px" height="auto" boxShadow="0px 2px 5px 3px rgba(207,207,207,0.4)" background="#f3f3f3" 
      _hover={{
        ".foto":{
          transform:"scale(1.2)",
          transition:"0.2s",
        }
      }}
      >
        <Box padding="20px 20px" overflow="hidden">
          <Box overflow="hidden">
            <Link href="#" >
              <Image className="foto" src={Beisbol} alt="" borderRadius="5px" transition="0.2s" objectFit="cover" boxSize="100%"
              margin="0px"
              />
            </Link>
          </Box>
          <Box marginTop="20px">
            <Text color='#333' fontSize="1.2rem"> <strong>Beisbol</strong><br/> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit ipsum, aliquam ullam ipsam repudiandae sed, est adipisci doloremque eius rerum commodi ducimus laborum.</Text>
          </Box>
          <Box
          marginTop='30px'
          >
            <Link
            textDecoration="none"
            padding='15px 40px'
            color="white"
            background='#333'
            transition='0.2s '
            _hover={{
              background:"#b1afaf9e",
              transition:"0.2s",
              color:"#333"
            }}
            >
              let's talk
            </Link>
          </Box>
        </Box>
      </Box>
      <Box marginBottom="20px" width={{base:"100%", md:"45%", lg:"31%"}} minWidth="300px" height="auto" boxShadow="0px 2px 5px 3px rgba(207,207,207,0.4)" background="#f3f3f3" 
      _hover={{
        ".foto":{
          transform:"scale(1.2)",
          transition:"0.2s",
        }
      }}
      >
        <Box padding="20px 20px" overflow="hidden">
          <Box overflow="hidden">
            <Link href="#" >
              <Image className="foto" src={Beisbol} alt="" borderRadius="5px" transition="0.2s" objectFit="cover" boxSize="100%"
              margin="0px"
              />
            </Link>
          </Box>
          <Box marginTop="20px">
            <Text color='#333' fontSize="1.2rem"> <strong>Beisbol</strong><br/> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit ipsum, aliquam ullam ipsam repudiandae sed, est adipisci doloremque eius rerum commodi ducimus laborum.</Text>
          </Box>
          <Box
          marginTop='30px'
          >
            <Link
            textDecoration="none"
            padding='15px 40px'
            color="white"
            background='#333'
            transition='0.2s '
            _hover={{
              background:"#b1afaf9e",
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