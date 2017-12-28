import {Router} from 'express'
import { ensureRestAuthenticated as auth } from '../utils'

const api = Router()

api.get('/', (req, res, next) => {
  res.json({
    isAuthenticated: req.isAuthenticated()
  })
})

api.get('/user', auth, (req, res, next) => {
  const {username} = req.user

  res.json({
    username,
    blogs: []
  })
})

api.get('/user/:blogname', auth, (req, res) => {
  const {blogname} = req.params

  res.json({
    name: blogname,
    title: '',
    url: `${blogname}.tumblr.com`,
    description: '',
    followerCount: 0
  })
})

api.get('/user/:blogname/followers', auth, (req, res) => {
  res.json({
    followers: []
  })
})

api.post('/blogs', auth, (req, res) => {
  const {body} = req

  res.json({
    blogs: [
      body
    ]
  })
})

export {api}
