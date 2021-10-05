import * as React from "react"
import { Box, Text, Span, Heading , Image, LinkOverlay, LinkBox} from "@chakra-ui/react"
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Dev from '../img/slider/dev.jpg'
import Cocinar from '../img/slider/cocinar.jpg'
import Custom from '../img/slider/custom.jpg'
import Game from '../img/slider/game.jpg'
import Sale from '../img/slider/help.jpg'
import Left from '../img/slider/left.png'
import Right from '../img/slider/right.png'
import Help from '../img/slider/sale.jpg'
import Gym from '../img/slider/gym.jpg'
import { useMediaQuery } from "@chakra-ui/react"
import { Wrapper } from './styled'

const Carousel = () => {
  const [isDesktop] = useMediaQuery("(min-width: 768px)")
  return(
    <Wrapper>
      
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={155}
        totalSlides={7}
        visibleSlides={4} 
      >
        <Slider>
          <Slide index={0}>
            <Box position="relative"
            overflow='hidden'
            _hover={{
              '.ani':{
                bottom:'0px',
                transition:'0.3s'
              }
            }}
            >
              <LinkBox className="boxlink" >
                  <LinkOverlay href='https://chakra-ui.com/docs/navigation/link-overlay'>
                    <Image src={Dev} w='100%' height='100%' objectFit='cover'/>
                    <Box className='ani' width="100%" textAlign='center' p="65% 0px 0px 0px " position="absolute" zIndex='99999'
                    bottom='-500px'
                    height='100%'
                    backdropFilter='blur(4px)'
                    transition='0.5s ease'
                    >
                      <Heading color="#fdfdfd" letterSpacing='3.5px'>
                        Developer
                      </Heading>
                    </Box>
                  </LinkOverlay>
              </LinkBox>
            </Box>
          </Slide>
          <Slide index={1}>
            <Box position="relative"
            overflow='hidden'
            _hover={{
              '.ani':{
                bottom:'0px',
                transition:'0.3s'
              }
            }}
            >
              <LinkBox className="boxlink" >
                  <LinkOverlay href='https://chakra-ui.com/docs/navigation/link-overlay'>
                    <Image src={Custom} w='100%' height='100%' objectFit='cover'/>
                    <Box className='ani' width="100%" textAlign='center' p="65% 0px 0px 0px " position="absolute" zIndex='99999'
                    bottom='-500px'
                    height='100%'
                    backdropFilter='blur(4px)'
                    transition='0.5s ease'
                    >
                      <Heading color="#fdfdfd" letterSpacing='3.5px'>
                        Customing
                      </Heading>
                    </Box>
                  </LinkOverlay>
              </LinkBox>
            </Box>
          </Slide>
          <Slide index={2}>
            <Box position="relative"
            overflow='hidden'
            _hover={{
              '.ani':{
                bottom:'0px',
                transition:'0.3s'
              }
            }}
            >
              <LinkBox className="boxlink" >
                  <LinkOverlay href='https://chakra-ui.com/docs/navigation/link-overlay'>
                    <Image src={Game} w='100%' height='100%' objectFit='cover'/>
                    <Box className='ani' width="100%" textAlign='center' p="65% 0px 0px 0px " position="absolute" zIndex='99999'
                    bottom='-500px'
                    height='100%'
                    backdropFilter='blur(4px)'
                    transition='0.5s ease'
                    >
                      <Heading color="#fdfdfd" letterSpacing='3.5px'>
                        Play & Fun
                      </Heading>
                    </Box>
                  </LinkOverlay>
              </LinkBox>
            </Box>
          </Slide>
          <Slide index={3}>
            <Box position="relative"
            overflow='hidden'
            _hover={{
              '.ani':{
                bottom:'0px',
                transition:'0.3s'
              }
            }}
            >
              <LinkBox className="boxlink" >
                  <LinkOverlay href='https://chakra-ui.com/docs/navigation/link-overlay'>
                    <Image src={Sale} w='100%' height='100%' objectFit='cover'/>
                    <Box className='ani' width="100%" textAlign='center' p="65% 0px 0px 0px " position="absolute" zIndex='99999'
                    bottom='-500px'
                    height='100%'
                    backdropFilter='blur(4px)'
                    transition='0.5s ease'
                    >
                      <Heading color="#fdfdfd" letterSpacing='3.5px'>
                        Assist
                      </Heading>
                    </Box>
                  </LinkOverlay>
              </LinkBox>
            </Box>
          </Slide>
          <Slide index={4}>
            <Box position="relative"
            overflow='hidden'
            _hover={{
              '.ani':{
                bottom:'0px',
                transition:'0.3s'
              }
            }}
            >
              <LinkBox className="boxlink" >
                  <LinkOverlay href='https://chakra-ui.com/docs/navigation/link-overlay'>
                    <Image src={Help} w='100%' height='100%' objectFit='cover'/>
                    <Box className='ani' width="100%" textAlign='center' p="65% 0px 0px 0px " position="absolute" zIndex='99999'
                    bottom='-500px'
                    height='100%'
                    backdropFilter='blur(4px)'
                    transition='0.5s ease'
                    >
                      <Heading color="#fdfdfd" letterSpacing='3.5px'>
                        Sale
                      </Heading>
                    </Box>
                  </LinkOverlay>
              </LinkBox>
            </Box>
          </Slide>
          <Slide index={5}>
            <Box position="relative"
            overflow='hidden'
            _hover={{
              '.ani':{
                bottom:'0px',
                transition:'0.3s'
              }
            }}
            >
              <LinkBox className="boxlink" >
                  <LinkOverlay href='https://chakra-ui.com/docs/navigation/link-overlay'>
                    <Image src={Gym} w='100%' height='100%' objectFit='cover'/>
                    <Box className='ani' width="100%" textAlign='center' p="65% 0px 0px 0px " position="absolute" zIndex='99999'
                    bottom='-500px'
                    height='100%'
                    backdropFilter='blur(4px)'
                    transition='0.5s ease'
                    >
                      <Heading color="#fdfdfd" letterSpacing='3.5px'>
                        Gym
                      </Heading>
                    </Box>
                  </LinkOverlay>
              </LinkBox>
            </Box>
          </Slide>
          <Slide index={6}>
            <Box position="relative"
            overflow='hidden'
            _hover={{
              '.ani':{
                bottom:'0px',
                transition:'0.3s'
              }
            }}
            >
              <LinkBox className="boxlink" >
                  <LinkOverlay href='https://chakra-ui.com/docs/navigation/link-overlay'>
                    <Image src={Cocinar} w='100%' height='100%' objectFit='cover'/>
                    <Box className='ani' width="100%" textAlign='center' p="65% 0px 0px 0px " position="absolute" zIndex='99999'
                    bottom='-500px'
                    height='100%'
                    backdropFilter='blur(4px)'
                    transition='0.5s ease'
                    >
                      <Heading color="#fdfdfd" letterSpacing='3.5px'>
                        decoct
                      </Heading>
                    </Box>
                  </LinkOverlay>
              </LinkBox>
            </Box>
          </Slide>
        </Slider>
          <ButtonBack>
            <Image src={Left} w='100%' height='100%' objectFit='cover'/>
          </ButtonBack>
          <ButtonNext>
            <Image src={Right} w='100%' height='100%' objectFit='cover'/>
          </ButtonNext>
      </CarouselProvider>
    </Wrapper>
  )
}
export default Carousel