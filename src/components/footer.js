import { Link } from "gatsby"
import { get } from "lodash"
import { default as React, useState, useEffect } from "react"
import { Instagram } from "react-feather"

const Footer = props => {
  const [instagramPosts, setInstagramPosts] = useState([])

  useEffect(() => {
    // Request (GET https://www.instagram.com/sahandnayebaziz/?__a=1)
    fetch("https://www.instagram.com/the_foxalow/?__a=1", {
      method: "GET",
      headers: {},
    })
      .then(res => res.json())
      .then(body => {
        console.log(body)
        const posts = get(
          body,
          "graphql.user.edge_owner_to_timeline_media.edges",
          []
        ).map(p => p.node)
        console.log(posts)
        setInstagramPosts(posts.slice(0, 4))
      })
  }, [])

  return (
    <footer>
      <h3>
        Follow me{" "}
        <a href="https://www.instagram.com/the_foxalow" target="_blank">
          @the_foxalow
        </a>
      </h3>
      <div className="instagram-posts">
        {instagramPosts.map(igPost => {
          return (
            <a href="https://www.instagram.com/the_foxalow" target="_blank">
              <img src={igPost.thumbnail_src}></img>
            </a>
          )
        })}
      </div>
      <div className="social">
        <Link to="/contact">
          <h2>Say Hello</h2>
        </Link>
        <div className="icons">
          <a target="_blank" href="https://www.instagram.com/the_foxalow">
            <Instagram />
          </a>
        </div>
        <h3>Interior Design by Cydney Morris</h3>
      </div>
      <div className="copyright">Copyright © 2020 Cydney Morris</div>
    </footer>
  )
}

export default Footer
