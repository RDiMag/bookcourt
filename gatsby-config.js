/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: 'Book Court Book Club',
    description: 'The digital home of the Book Court Book Club podcast.'
  },
  plugins: [
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
