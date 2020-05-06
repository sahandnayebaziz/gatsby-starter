import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Nav from "../components/nav"

import SEO from "../components/seo"
import "../stylesheets/index.sass"

const AboutPage = () => (
  <Layout title="About">
    <div className="About">
      <h2>Interior Design by Cydney Morris</h2>
      <p>
        It all began when Cydney Morris, co-founder and creative force behind
        cult womenswear label Stone Cold Fox, started chronicling the
        renovations of her newly acquired 1924 Venice Beach bungalow, which she
        affectionately named The Foxalow (
        <a href="https://www.instagram.com/the_foxalow/" target="_blank">
          @the_foxalow
        </a>
        ). What started as a passion project transforming her new home quickly
        turned into a full-fledged interior design venture when social media
        followers and Hollywood names began requesting her vintage-infused,
        coastal cottage designs with a decidedly French sensibility.
      </p>
      <div className="section">
        <img src="/about-2.jpg"></img>
        <p>
          <h2>Services</h2>
          Foxalow Interiors is a full service LA-based residential and
          commercial design studio founded by Cydney Morris. From finishings to
          furnishings and landscaping, Cydney can assist clients in renovations
          big or small—whether it be merely freshening up a room or working with
          one’s chosen architect on layout to completely rebuild a home. Her
          goal is to make her clients happy and feel unique in their own spaces
          by personalizing every project to fit the client’s needs, personality
          and lifestyle, while still reflecting the Foxalow ethos.
          <ul>
            <li>Interior Design</li>
            <li>Renovations</li>
            <li>Space planning</li>
            <li>Furniture selection, architectural features</li>
            <li>Design selection</li>
          </ul>
        </p>
      </div>
      <div className="section">
        <img src="/about-4.jpg"></img>
        <p>
          <h2>The Start</h2>
          The Foxalow has since evolved into a lifestyle: It’s hosting
          parties—from the table settings to the cocktails you serve; It’s
          finding love in architecture; It’s buying a little tiny house on a
          street that you dreamt of and making it your dream house. In essence,
          it’s tending to your garden, your home and your life and watching each
          of them grow. With this online destination, Cydney hopes to create a
          digital space to inspire and share her world as it translates to all
          things lifestyle and home, featuring her latest projects,
          of-the-moment inspirations, before-and-afters, and a marketplace
          spotlighting her latest designs and found treasures, altogether
          restarting a blog that touches on the everyday journeys of a growing
          life.
        </p>
      </div>
      <div className="section">
        <img src="/about-1.jpg"></img>
        <p>
          <h2>About Cydney</h2>
          Cydney now resides in Venice Beach with her Australian husband,
          Oliver. She grew up in Laguna Beach where she was deeply inspired by
          the women in her family and their penchant for design and DIY. Cydney
          observed in awe as her mother added extra bedrooms and French doors
          while her grandmother sewed beaded trims onto lampshades and
          passionately tended to her garden. This time ignited her love for
          spaces and the way they made one feel, and emboldened her to work hard
          so that one day she too could create a home all her own.
          <br />
          <br />
          She did just that when she purchased The Foxalow in 2017, nearly a
          decade after she and her best friend launched their highly
          sought-after clothing brand, Stone Cold Fox. It was here that she
          established her lived-in, romantic coastal aesthetic and successfully
          brought her imitable trademark taste into the interiors realm.
          <br />
          <br />
          Sidestepping her way into professional projects, Cydney soon gained
          the design world’s attention and a feature in Architectural Digest
          with the complete revamping of LuckyChap Entertainment’s production
          offices in L.A., transforming the workspace into a
          countryside-inspired, homey feminine retreat.
          <br />
          <br />
          She mines markets from Pasadena to Portugal and Paris to find Old
          World antique pieces that make the environs she creates feel timeless
          and like home. Because home is where you make memories, lay your head
          and grow your families, and for Cydney, there is no better feeling
          than realizing that your home is your favorite place to be.
        </p>
      </div>

      {/* <div className="feature">
        <div>
          <a href="https://www.instagram.com/the_foxalow/" target="_blank">
            @the_foxalow
          </a>
          <a href="https://www.instagram.com/cyd_morris/" target="_blank">
            @cyd_morris
          </a>
          <a href="https://www.instagram.com/stone_cold_fox/" target="_blank">
            @stone_cold_fox
          </a>
        </div>
      </div> */}
    </div>
  </Layout>
)

export default AboutPage
