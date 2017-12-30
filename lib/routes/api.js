import {Router} from 'express'
import { ensureRestAuthenticated as auth, getTumblrClient } from '../utils'

const api = Router()

api.get('/', (req, res, next) => {
  res.json({
    isAuthenticated: req.isAuthenticated()
  })
})

api.get('/user', auth, (req, res, next) => {
  const client = getTumblrClient(req)
  const { username } = req.user

  const result = async () => {
    try {
      const { user } = await client.userInfo()
      res.json({
        name: username,
        blogs: user.blogs
      })
    } catch (e) {
      res.json({
        error: 'Error with Tumblr API'
      })
      console.error(e)
    }
  }

  result()
})

api.get('/user/:blogname', auth, (req, res) => {
  const client = getTumblrClient(req)
  const {blogname} = req.params

  const result = async () => {
    try {
      const {users} = await client.blogFollowers(blogname)
      const {blog} = await client.blogInfo(blogname)

      res.json(
        Object.assign({}, blog, {followerUsers: users})
      )
    } catch (e) {
      res.json({
        error: 'Error with Tumblr API'
      })
      console.error(e)
    }
  }

  result()
})

api.post('/user/:blogname/followers', auth, (req, res) => {
  const client = getTumblrClient(req)
  const {blogname} = req.params
  const {offset} = req.body

  const result = async () => {
    try {
      const {users} = await client.blogFollowers(blogname, {
        limit: 20,
        offset: offset || 0
      })

      res.json({
        name: blogname,
        followers: users
      })
    } catch (e) {
      res.json({
        error: 'Error with Tumblr API'
      })
      console.error(e)
    }
  }

  result()
})

api.post('/blogs', auth, (req, res) => {
  const client = getTumblrClient(req)
  const {blogname} = req.body

  const result = async () => {
    try {
      const {blog} = await client.blogInfo(blogname)

      res.json(blog)
    } catch (e) {
      res.json({
        error: 'Error with Tumblr API'
      })
      console.error(e)
    }
  }

  result()
})

export {api}
