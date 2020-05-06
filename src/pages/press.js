import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Nav from "../components/nav"

import SEO from "../components/seo"
import "../stylesheets/index.sass"

const pressItems = [
  {
    img: "ad",
    href:
      "https://www.architecturaldigest.com/story/margot-robbie-luckychap-entertainment-office",
    title:
      "Inside Margot Robbie’s Homey New L.A. LuckyChap Entertainment Office",
    picture:
      "https://media.architecturaldigest.com/photos/5d36149110eb7a000884e3cf/16:9/w_2560%2Cc_limit/190620_AD_Margot_Robbie__1709-2.jpg",
  },
  {
    img: "vogue",
    href: "https://m.youtube.com/watch?v=Bl5630CeYFs",
    title: "73 Questions With Margot Robbie | Vogue",
    picture: "https://i.ytimg.com/vi/Bl5630CeYFs/maxresdefault.jpg",
  },
  {
    img: "harpers-bazaar",
    href: "https://www.harpersbazaar.com.au/fashion/margot-robbie-house-18779",
    title:
      "Margot Robbie's Los Angeles Home is Sunny, Beachy Interior Design Perfection",
    picture:
      "https://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/hb/2019/06/07/1559864732630_margot-robbie-backyard-2.jpg",
  },
  {
    img: "house-beautiful",
    href:
      "https://www.housebeautiful.com/design-inspiration/celebrity-homes/a27819122/margot-robbie-venice-beach-cottage-vogue-73-questions/",
    title:
      "Margot Robbie Takes Us Into Her Adorable Venice Beach Cottage For Vogue’s 73 Questions",
    picture:
      "https://media1.popsugar-assets.com/files/thumbor/paWCwohYgg0Imf1LaFcVkLojwrk/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2019/06/06/678/n/1922794/e9674e7b175f4534_Screen_Shot_2019-06-06_at_10.46.10_AM/i/Funny-how-celebrities-celebrity-chefs-always-seem-big.png",
  },
  {
    img: "brides",
    href:
      "https://www.brides.com/story/stone-cold-fox-designer-cydney-morris-wedding-in-sydney-australia",
    title:
      "Stone Cold Fox Designer Cydney Morris’s Vintage-Inspired Wedding in Sydney, Australia",
    picture:
      "https://www.brides.com/thmb/mtWeTxnNbFRIZEKtXqao_K-zVbk=/800x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__brides__public__brides-services__production__2019__07__01__5d1a10c7d7a9ea0009d03672_cydney-edwards-stone-cold-fox-wedding_11-d70df652c99c42d0a97709609a16def4.jpg",
  },
  {
    img: "rose-inc",
    href: "https://www.roseinc.com/blogs/content/cydney-morris-edwards",
    title: "The Go-Sees: Cydney Morris Edwards",
    picture:
      "https://cdn.shopify.com/s/files/1/0100/9257/6804/articles/unnamed_4df5b53a-ab77-4afe-9fe6-bdec921d0e8f_900x.jpg?v=1571121381",
  },
  {
    img: "hello-magazine",
    href:
      "https://www.hellomagazine.com/homes/2019060773911/margot-robbie-house-tour-vogue-73-questions/",
    title: "Margot Robbie shares a tour of her dreamy California beach house",
    picture:
      "https://www.hellomagazine.com/imagenes/homes/2019060773911/margot-robbie-house-tour-vogue-73-questions/0-359-874/margot-robbie-house-bedroom-z.jpg",
  },
  {
    img: "vogue",
    href:
      "https://www.vogue.com.au/brides/trends/inside-the-wedding-of-stone-cold-foxs-founder-and-designer-cydney-morris/image-gallery/fbda2c1ab4a7d80fa6634050f9b0345e",
    title:
      "Inside the wedding of Stone Cold Fox’s founder and designer Cydney Morris",
    picture: "/press-vogue-au.jpg",
  },
  {
    img: "over-the-moon",
    href:
      "https://overthemoon.com/beauty/cydney-morris-stone-cold-fox-designer-wedding-beauty-routine/",
    title:
      "Stone Cold Fox Designer Cydney Morris Spills Her Wedding Beauty Secrets",
    picture:
      "https://overthemoon.com/wp-content/uploads/2019/05/6c199191-cydney-beauty-secrets-768x811.jpg",
  },
]

const Page = () => (
  <Layout>
    <SEO title="Press" />
    <div className="press">
      <h2>Cydney in the Press</h2>
      <div className="items">
        {pressItems.map(p => {
          return (
            <a href={p.href} target="_blank">
              <div>
                <img src={`${p.img}.jpg`} className="logo"></img>
                {p.picture && <img className="picture" src={p.picture} />}
                <h2>{p.title || "test"}</h2>
                <img src="/link.png" className="link" />
              </div>
            </a>
          )
        })}
      </div>
    </div>
  </Layout>
)

export default Page
