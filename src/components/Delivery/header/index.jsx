import React from 'react'
import {
    Box,
    Flex,
    Text,
    UnorderedList,
    ListItem,
    LinkOverlay,
  } from '@chakra-ui/react';
  
  export const Header = () =>{
    return(
        <Box bg='white' borderBottom='1px solid #777'>
            <Flex>
                <Box>
                    <Text>Davis Jr</Text>
                </Box>
                <Box>
                    <UnorderedList>
                        <ListItem><LinkOverlay href="">Home</LinkOverlay></ListItem>
                        <ListItem><LinkOverlay href="">Sobre Mi</LinkOverlay></ListItem>
                        <ListItem><LinkOverlay href="">Contactar</LinkOverlay></ListItem>
                    </UnorderedList>
                </Box>
            </Flex>
        </Box>
    ) ;
}