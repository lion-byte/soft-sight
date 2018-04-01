import { create } from 'axios'
import { resolve } from 'path'

export const instance = () =>
  create({
    baseURL:
      process.env.NODE_ENV === 'production'
        ? resolve(window.location.toString(), '/.netlify/functions/api')
        : '/api',
    timeout: 10000
  })

export const requestBlogInfo = blogName => {
  return new Promise((resolve, reject) => {
    instance()
      .post('/tumblr', {
        blogName
      })
      .then(({ data }) => resolve(data))
      .catch(reject)
  })
}

export const sleep = ms =>
  new Promise(resolve => {
    setTimeout(resolve, ms)
  })
