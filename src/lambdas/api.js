const { config } = require('dotenv')

config()

const { client: { getBlogInfo } } = require('./utils')

exports.handler = (event, context, callback) => {
  if (event.httpMethod === 'POST') {
    const { body: bodyText } = event
    const { blogName } = JSON.parse(bodyText)
    console.log(blogName)

    getBlogInfo(blogName)
      .then(data => {
        callback(null, {
          statusCode: 200,
          body: JSON.stringify(data)
        })
      })
      .catch(error => {
        callback(null, {
          statusCode: 200,
          body: JSON.stringify({ apiError: error.message })
        })
      })
  } else {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify({ error: 'Not here dude' })
    })
  }
}
