import * as React from "react"
import { Box, Flex, List, ListItem, Text, Link, Menu, MenuButton, MenuItem, MenuList,IconButton  } from "@chakra-ui/react"
import { Wrapper } from './styled'
import { useMediaQuery } from "@chakra-ui/react"
import { HamburgerIcon } from '@chakra-ui/icons'

const Header1 = () => { 
    const [isDesktop] = useMediaQuery("(min-width: 769px)")
    
    return(
        <Box >
         {isDesktop ? ( 
            <div>

                <Box className='options'
                paddingTop='1rem' 
                paddingBottom='1rem' 
                paddingLeft='20px'
                paddingRight='20px'
                fontSize='.875rem'
                boxShadow='0 0 5px #dedede'
                
                >
                    <Flex width="100%" justifyContent='space-between'>
                        <Box>
                            <Text 
                            margin='-2px 20px 0px 0px'
                            padding='0px'
                            textTransform='uppercase'
                            >
                                Davis jr
                            </Text>
                        </Box>
                        <Box>
                            <Wrapper>
                                <List 
                                display='flex'
                                padding='0px'
                                margin='0px'
                                textTransform='uppercase'
                                fontSize='.875rem'
                                >
                                    <ListItem
                                    margin='0px 10px 0px 10px'
                                    
                                    >
                                        <Link href="/" className='nav'
                                        margin='0px'
                                        padding='21px 10px'
                                        textDecoration='none !important'
                                        position='relative'
                                        >
                                            Blog
                                        </Link>
                                    </ListItem>
                                    <ListItem
                                    margin='0px 10px 0px 10px'
                                    
                                    >
                                        <Link href="/" className='nav'
                                        margin='0px'
                                        padding='21px 10px'
                                        textDecoration='none !important'
                                        position='relative'
                                        >
                                            Redes
                                        </Link>
                                    </ListItem>
                                    <ListItem
                                    margin='0px 10px 0px 10px'
                                    
                                    >
                                        <Link href="/" className='nav'
                                        margin='0px'
                                        padding='21px 10px'
                                        textDecoration='none !important'
                                        position='relative'
                                        >
                                            Contacto
                                        </Link>
                                    </ListItem>
                                </List>
                            </Wrapper>
                        </Box>
                    </Flex>
                </Box>
            </div>
         ) : ( 

            <Flex direction="row" justifyContent="space-between" padding="1rem 20px 1rem 20px" display='flex' width='100%'>
                <Box className='optionMobile'
                padding="10px 0px 0px 0px"
                >
                    <Text 
                        margin='0px'
                        padding='0px'
                        textTransform='uppercase'
                        >
                            Davis jr
                    </Text>
                </Box>
                <Box>
                    <Menu>
                        <MenuButton
                            as={IconButton}
                            aria-label="Options"
                            icon={<HamburgerIcon />}
                            variant="outline"
                        />
                        <MenuList>
                            <MenuItem >
                            New Tab
                            </MenuItem>
                            <MenuItem >
                            New Window
                            </MenuItem>
                            <MenuItem >
                            Open Closed Tab
                            </MenuItem>
                            <MenuItem >
                            Open File...
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
            </Flex>
        )}
        
        </Box>
    )
}
export default Header1