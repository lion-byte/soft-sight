import { Router } from 'express'

const main = Router()

main.get('/login', (req, res) => {
  if (req.isAuthenticated()) {
    res.redirect('/')
  } else {
    res.redirect('/auth/tumblr/')
  }
})

main.get('/logout', (req, res) => {
  req.logout()
  res.redirect('/')
})

export {main}
