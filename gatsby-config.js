/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: 'Book Court Book Club',
    description: 'The digital home of the Book Court Book Club podcast.'
  },
  plugins: [
    `gatsby-transformer-remark`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,        
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host: process.env.CONTENTFUL_HOST,  
        forceFullSync: true,
      },
    },
    {
      resolve: 'gatsby-omni-font-loader',
      options: {
        enableListener: true,
        preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
        web: [
          {
            name: 'Nanum Gothic, Arima Madurai', 
            file: 'https://fonts.googleapis.com/css2?family=Arima+Madurai:wght@500&family=Nanum+Gothic&display=swap',
          }
        ]
      }
    }
  ],
}
