const { config } = require('dotenv')

config()

const { client } = require('./utils')

exports.handler = (event, context, callback) => {
  if (event.httpMethod === 'POST') {
    const { blogName } = JSON.parse(event.body)

    client
      .getBlogInfo(blogName)
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
