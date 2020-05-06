import React from "react"
import _ from "lodash"

import Layout from "../components/layout"

function Post(props) {
  return (
    <Layout
      title={`${props.pageContext.post.title}`}
      description={`Read "${props.pageContext.post.title}" by Cydney Edwards on The Foxalow.`}
      imageURL={props.pageContext.post.jetpack_featured_media_url}
    >
      <div className="Post">
        <div className="post">
          {props.pageContext && (
            <React.Fragment>
              <h1
                dangerouslySetInnerHTML={{
                  __html: props.pageContext.post.title,
                }}
              ></h1>
              <div
                className="body"
                dangerouslySetInnerHTML={{
                  __html: props.pageContext.post.content,
                }}
              ></div>
            </React.Fragment>
          )}
        </div>
      </div>
    </Layout>
  )
}

export default Post
