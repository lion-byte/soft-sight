const { Client } = require('tumblr.js')

const getClient = () => {
  const { TUMBLR_CONSUMER_KEY, TUMBLR_SECRET_KEY } = process.env

  return new Client({
    credentials: {
      consumer_key: TUMBLR_CONSUMER_KEY,
      consumer_secret: TUMBLR_SECRET_KEY
    },
    returnPromises: true
  })
}

const getBlogInfo = async blogName => {
  const client = getClient()

  try {
    const result = await client.blogInfo(blogName)
    return result
  } catch (error) {
    throw error
  }
}

module.exports = {
  getBlogInfo,
  getClient
}
