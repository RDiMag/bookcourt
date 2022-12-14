/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: 'gatsby-omni-font-loader',
      options: {
        enableListener: true,
        preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
        web: [
          {
            name: 'Gentium Plus',
            file: 'https://fonts.googleapis.com/css2?family=Gentium+Plus&family=Nanum+Gothic&display=swap',
          }
        ]
      }
    }
  ],
}
