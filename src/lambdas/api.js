const path = require('path')
const { config } = require('dotenv')

config()

const { tumblr } = require('./lib')

exports.handler = (event, context, callback) => {
  const api = event.path.split(path.sep).splice(2)

  switch (api[0]) {
    case 'tumblr':
      tumblr(event, context, callback)
      break
    default:
      callback(null, {
        statusCode: 200,
        body: JSON.stringify({
          msg: 'Hmm'
        })
      })
  }
}
