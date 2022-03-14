module.exports = {
  siteMetadata: {
    title: `my eCV`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-fontawesome-css",
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'udhmime6',
        dataset: 'production',
      },
    }
  ]
}