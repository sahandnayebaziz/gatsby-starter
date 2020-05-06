const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // The “graphql” function allows us to run arbitrary
  // queries against the local Gatsby GraphQL schema. Think of
  // it like the site has a built-in database constructed
  // from the fetched data that you can run queries against.
  const result = await graphql(`
    {
      allWordpressPost {
        edges {
          node {
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
    }
  `)

  // Check for any errors
  if (result.errors) {
    throw new Error(result.errors)
  }

  // Access query results via object destructuring
  const { allWordpressPost } = result.data

  const postTemplate = path.resolve(`./src/templates/post.js`)
  allWordpressPost.edges.forEach(edge => {
    createPage({
      path: path.normalize("posts/" + edge.node.path),
      component: postTemplate,
      context: {
        id: edge.node.id,
        post: edge.node,
      },
    })
  })
}
