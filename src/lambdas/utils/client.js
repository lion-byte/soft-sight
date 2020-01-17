const { createClient } = require('tumblr.js')

const getClient = () => {
  const { TUMBLR_CONSUMER_KEY, TUMBLR_SECRET_KEY } = process.env

  return createClient({
    credentials: {
      consumer_key: TUMBLR_CONSUMER_KEY,
      consumer_secret: TUMBLR_SECRET_KEY
    },
    returnPromises: true
  })
}

/**
 * @param {string} blogName
 * @returns {Promise}
 */
function getBlogInfo (blogName) {
  // @ts-ignore
  return getClient().blogInfo(blogName)
}

module.exports = {
  getBlogInfo,
  getClient
}
