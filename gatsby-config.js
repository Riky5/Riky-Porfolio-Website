module.exports = {
  siteMetadata: {
    title: `my eCV`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'udhmime6',
        dataset: 'production',
      },
    }
  ]
}