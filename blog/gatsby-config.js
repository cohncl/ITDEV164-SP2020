module.exports = {
  siteMetadata: {
    title: `Gatsby Blog`,
    description: `Starting off the semester with a blog`,
    author: `Charles Cohn`,
    contact: {
      name: `Charles Cohn`,
      company: `Blogs Inc.`,
      address: `P.O. Box 1234`,
    }
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: 'lm8n2ist7rz4',
        accessToken: 'bGN3bBsHxMrPOo3p0wzaiyEX1eLqtttpjCYAzeDMMwU'
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}