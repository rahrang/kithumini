module.exports = {
  siteMetadata: {
    title: `Kithumini Jayasiri`,
    description: `UC Berkeley senior studying Nutritional Sciences, and running every race with all her heart.`,
    author: `@rahrang`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
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
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `minimal-ui`,
        icon: `src/images/kimi-main.jpg`, // This path is relative to the root of the site.
      },
    },
  ],
};
