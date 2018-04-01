const { config } = require('dotenv')

config()

const { client: { getBlogInfo } } = require('./utils')

exports.handler = (event, context, callback) => {
  console.log(event)

  if (event.httpMethod === 'POST') {
    const { body: bodyText } = event
    const { blogName } = JSON.parse(bodyText)
    console.log(blogName)

    getBlogInfo(blogName)
      .then(data => {
        console.log(data)

        callback(null, {
          statusCode: 200,
          body: JSON.stringify(data)
        })
      })
      .catch(error => {
        console.error(error)

        callback(null, {
          statusCode: 200,
          body: JSON.stringify({ error: error.toString() })
        })
      })
  } else {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify({ error: 'Not here dude' })
    })
  }
}
