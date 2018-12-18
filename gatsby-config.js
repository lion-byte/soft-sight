const proxy = require('http-proxy-middleware')

module.exports = {
  siteMetadata: {
    author: 'Mark Hernandez',
    description: 'Detect likely explicit blogs on Tumblr',
    title: 'Soft Sight'
  },
  plugins: [
    'gatsby-plugin-catch-links',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-netlify' // must be last
  ],
  developMiddleware: app => {
    app.use(
      '/.netlify/functions/',
      proxy({
        target: 'http://localhost:9000',
        pathRewrite: {
          '/.netlify/functions/': ''
        }
      })
    )
  }
}
