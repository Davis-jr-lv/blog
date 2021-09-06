import * as React from "react"
import { Box, Flex, UnorderedList, ListItem, Text } from "@chakra-ui/react"

const Header1 = () => (
    <Box paddingTop='1rem' paddingBottom='1rem' bg='blue'>
        <Flex>
            <Box>
                <Text>Davis jr</Text>
            </Box>
            <Box>
                <UnorderedList display='flex'>
                    <ListItem>Blog</ListItem>
                    <ListItem>Redes</ListItem>
                    <ListItem>Contacto</ListItem>
                </UnorderedList>
            </Box>
        </Flex>
    </Box>
  )
export default Header1