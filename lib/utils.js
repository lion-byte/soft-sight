import { Client } from 'tumblr.js'

export const ensureAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next()
  }
  res.redirect('/login')
}

export const ensureRestAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next()
  }
  res.json({ error: 'Authentication required' })
}

export const getTumblrClient = req => {
  const { TUMBLR_CONSUMER_KEY, TUMBLR_SECRET_KEY } = process.env
  const { token, tokenSecret } = req.user

  return new Client({
    credentials: {
      consumer_key: TUMBLR_CONSUMER_KEY,
      consumer_secret: TUMBLR_SECRET_KEY,
      token,
      token_secret: tokenSecret
    },
    returnPromises: true
  })
}
