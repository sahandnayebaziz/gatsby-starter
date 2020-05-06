import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Nav from "../components/nav"

import SEO from "../components/seo"
import "../stylesheets/index.sass"

const Page = () => (
  <Layout>
    <SEO title="Contact" />
    <div className="Contact">
      <h3>
        We would love to hear from you! Please use the form below for new
        client, general, and vendor inquiries.
      </h3>
      <br></br>
      <br></br>
      <br></br>
      Thank you! Your message has been received.
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h3>
        Please contact{" "}
        <a href="mailto:cyd@thefoxalow.com">cyd@thefoxalow.com</a> for all media
        inquiries.
      </h3>
    </div>
  </Layout>
)

export default Page
