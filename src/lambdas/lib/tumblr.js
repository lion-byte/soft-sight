const { client: { getBlogInfo }, onPost } = require('../utils')

module.exports = (event, context, callback) => {
  onPost('/api/tumblr', event, async () => {
    const { body: bodyText } = event
    const { blogName } = JSON.parse(bodyText)

    console.log(blogName)

    try {
      const data = await getBlogInfo(blogName)

      callback(null, {
        statusCode: 200,
        body: JSON.stringify(data)
      })
    } catch (error) {
      console.error(error)
      callback(null, {
        statusCode: 200,
        body: JSON.stringify({ error: error.toString() })
      })
    }
  })
}
