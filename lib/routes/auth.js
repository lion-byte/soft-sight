import {Router} from 'express'
import passport from 'passport'

const auth = Router()

auth.get('/', passport.authenticate('tumblr'), (req, res, next) => {})

auth.get('/callback', passport.authenticate('tumblr', {failureRedirect: '/'}), (req, res, next) => {
  res.redirect('/')
})

export {auth}
