/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header1 from "./Delivery/header"

import "./layout.css"

const Layout = ({ children }) => {

  return (
    <>
      <Header1/>
      
    </>
  )
}



export default Layout
