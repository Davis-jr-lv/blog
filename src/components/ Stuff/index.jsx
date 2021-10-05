import * as React from "react"
import { Box, Text, Flex, Heading, Image} from "@chakra-ui/react"
import Beach from "../img/dev/beach.jpg"
import Mountain from "../img/dev/mountain.jpg"
import Basket from "../img/dev/basket.jpg"

const Stuff = () => {
  return(
    <Flex direction="column" padding="0px 38px" width="100%">
      <Box textAlign="center" marginTop="80px" marginBottom="40px"> 
        <Heading m="0px">Things to do</Heading>
        <Text>there are many things to do, let's get started </Text>
      </Box>
      <Flex flexWrap="wrap" marginBottom="30px" justifyContent="center" >
        <Box width={{base:'100%', lg:'50%'}} marginRight={{base:'0px', lg:'30px'}}> 
          <Image src={Beach} objectFit='cover'/>
        </Box>
        <Box width={{base:'100%', lg:'40%'}} paddingTop="30px">
          <Heading>Go to Beach</Heading>
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut delectus, mollitia corrupti quia ex quam aliquid expedita quas enim animi asperiores ad debitis culpa amet. Unde laudantium id 
            <br/><br/>
            explicabo enim! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi esse, ex placeat adipisci quae unde, veniam dolor hic fuga, rem veritatis voluptates minus quod.
          </Text>
        </Box>
      </Flex>
      <Flex flexWrap="wrap" marginBottom="30px" justifyContent="center" >
        <Box width={{base:'100%', lg:'40%'}} paddingTop="30px">
          <Heading>Go to Beach</Heading>
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut delectus, mollitia corrupti quia ex quam aliquid expedita quas enim animi asperiores ad debitis culpa amet. Unde laudantium id explicabo enim!
            <br/><br/>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium enim blanditiis, officiis pariatur sit et laboriosam tenetur, eligendi illo recusandae neque.
          </Text>
        </Box>
        <Box width={{base:'100%', lg:'50%'}} marginLeft={{base:'0px', lg:'30px'}}>
          <Image src={Mountain} objectFit='cover' />
        </Box>
      </Flex>
      <Flex flexWrap="wrap" marginBottom="30px" justifyContent="center" >
        <Box width={{base:'100%', lg:'50%'}} marginRight={{base:'0px', lg:'30px'}}>
          <Image src={Basket} />
        </Box>
        <Box width={{base:'100%', lg:'40%'}} paddingTop="30px">
          <Heading>Go to Beach</Heading>
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut delectus, mollitia corrupti quia ex quam aliquid expedita quas enim animi asperiores ad debitis culpa amet. Unde laudantium id explicabo enim!
            <br/><br/>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium accusamus doloribus neque accusantium maiores, repellat ex eaque? Omnis in.akapellah
          </Text>
        </Box>
      </Flex>
    </Flex>
  )
}
export default Stuff