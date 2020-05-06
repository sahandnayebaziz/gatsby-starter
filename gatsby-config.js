module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-source-wordpress",
      options: {
        baseUrl: "www.cms-the-foxalow.com",
        protocol: "https",
        auth: {},
        cookies: {},
        verboseOutput: false,
        perPage: 100,
        searchAndReplaceContentUrls: {},
        concurrentRequests: 10,
        includedRoutes: ["**/categories", "**/tags", "**/posts"],
        keepMediaSizes: true,
        normalizer: function({ entities }) {
          return entities
        },
      },
    },
  ],
}
