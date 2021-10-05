import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { ChakraProvider } from "@chakra-ui/react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Box } from "@chakra-ui/react"
import Header1 from "../components/Delivery/header/index"
import Hero from "../components/Hero/index"
import Span from "../components/Span/index"
import Carousel from "../components/Slider/index"
import Tarousel from "../components/Slider/components/index"
import Stuff from "../components/Stuff/index"
import Footer from "../components/Delivery/footer/index"

const IndexPage = () => (
  <>
  
  <Layout>
    
  </Layout>
  <Hero/>
  <Span/>
  
  <Tarousel/>
  <Carousel/>
  <Stuff/>
  <Footer/>
  </>
)

export default IndexPage
