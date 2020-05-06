import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"
import "../stylesheets/index.sass"

const IndexPage = () => (
  <Layout hideNav={true} hideFooter={true}>
    <SEO title="Home" />
    <div className="Home">
      <div className="content">
        <img src="logo-white.png"></img>
        <Link to="/portfolio">
          <h1>Enter</h1>
        </Link>
      </div>
      <Link to="/about">
        <p>By Cydney Morris</p>
      </Link>
    </div>
  </Layout>
)

export default IndexPage
