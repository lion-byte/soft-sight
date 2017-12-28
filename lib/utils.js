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
