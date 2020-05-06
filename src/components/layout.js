/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Nav from "./nav"
import SEO from "./seo"
import Footer from "./footer"

import "./../stylesheets/index.sass"

const Layout = props => {
  return (
    <div>
      <SEO {...props} />
      {!props.hideNav && <Nav></Nav>}
      <div>
        <main>{props.children}</main>
        {!props.hideFooter && <Footer />}
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
