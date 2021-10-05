import * as React from "react"
import { Box, Text, Button, Link } from "@chakra-ui/react"
import Back from "../img/dev.jpg"

const Hero = () => {
  return(
    <Box padding='70px 0px 0px 5%' marginTop='1px' className="fondo" height={{base:"100vh", md:"500px"}} bgImage={Back} bgSize="cover" position='relative'
    _before={{
      content:"''",
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: "#b1afaf9e",
    }}
    >
      <Box position='relative'>
        <Box marginBottom="20px">
          <Text
          fontSize='3rem'
          color='#333'
          fontWeight='900'
          letterSpacing='1.5px'
          margin='0px'
          >
            come with me, let's start
          </Text>
        </Box>
        <Box width="70%">
          <Text
          fontSize='1.2rem'
          letterSpacing='1px'
          margin='0px'
          > Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque esse quisquam ipsam dolores facilis ab repellendus voluptatibus molestiae perspiciatis incidunt. Quos nemo nisi veritatis amet maxime molestias nam eum? Quos.</Text>
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
  )
}
export default Hero