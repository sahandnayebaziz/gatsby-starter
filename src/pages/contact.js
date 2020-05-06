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
      <img src="/interior-surfboard.jpg" />
      <h3>
        We would love to hear from you! Please use the form below for new
        client, general, and vendor inquiries.
      </h3>
      <form name="contact" method="POST" data-netlify="true" action="/thankyou">
        <input type="hidden" name="form-name" value="contact" />
        <fieldset>
          <label for="name">Name</label>
          <input type="text" id="name" required name="name" />
        </fieldset>
        <fieldset>
          <label for="email">Email Address</label>
          <input type="text" id="email" required name="email" />
        </fieldset>
        <fieldset>
          <label for="subject">Subject</label>
          <input type="text" id="subject" name="subject" />
        </fieldset>
        <fieldset>
          <label for="message">Message</label>
          <textarea id="message" required name="message" />
        </fieldset>
        <button type="submit">Submit</button>
      </form>
      <h3>
        Please contact{" "}
        <a href="mailto:cyd@thefoxalow.com">cyd@thefoxalow.com</a> for all media
        inquiries.
      </h3>
    </div>
  </Layout>
)

export default Page
