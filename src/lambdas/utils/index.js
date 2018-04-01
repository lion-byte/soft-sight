const client = require('./client')

const onGet = (path, event, cb) => {
  if (event.httpMethod !== 'GET' || event.path !== path) {
    return
  }

  cb()
}

const onPost = (path, event, cb) => {
  if (event.httpMethod !== 'POST' || event.path !== path) {
    return
  }

  cb()
}

module.exports = {
  client,
  onGet,
  onPost
}
