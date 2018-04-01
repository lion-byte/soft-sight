import { create } from 'axios'

export const instance = () =>
  create({
    baseURL:
      process.env.NODE_ENV === 'production'
        ? '/.netlify/functions/api'
        : '/api',
    timeout: 10000
  })

export const requestBlogInfo = blogName => {
  return new Promise((resolve, reject) => {
    instance()
      .post('/', {
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
