const _ = require("lodash")
import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Nav from "../components/nav"

import SEO from "../components/seo"
import "../stylesheets/index.sass"

const Page = () => {
  const postsQuery = useStaticQuery(
    graphql`
      query {
        allWordpressPost(
          filter: { categories: { elemMatch: { name: { eq: "Portfolio" } } } }
        ) {
          nodes {
            id
            path
            title
            content
            categories {
              id
              name
            }
            jetpack_featured_media_url
            slug
          }
        }
      }
    `
  )

  const posts = _.get(postsQuery, "allWordpressPost.nodes", [])

  return (
    <Layout>
      <SEO title="Portfolio" />
      <div className="Portfolio">
        <div className="posts">
          {posts.map(p => {
            return (
              <Link to={`/posts/${p.slug}`}>
                <div className="post">
                  <img src={p.jetpack_featured_media_url}></img>
                  <h2>{p.title}</h2>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default Page
