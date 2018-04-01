module.exports = {
  siteMetadata: {
    author: 'Mark Hernandez',
    description: 'Detect likely explicit blogs on Tumblr',
    title: 'Soft Sight'
  },
  plugins: [
    'gatsby-plugin-catch-links',
    'gatsby-plugin-less',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-react-next',
    'gatsby-plugin-netlify' // must be last
  ],
  proxy: {
    prefix: '/api',
    url: 'http://localhost:9000'
  }
}
