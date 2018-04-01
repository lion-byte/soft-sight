import { create } from 'axios'

export const instance = create({
  baseURL:
    process.env.NODE_ENV === 'production' ? '/.netlify/functions/api' : '/api',
  timeout: 10000
})

export const requestBlogInfo = async blogName => {
  const { data } = await instance.post('/tumblr', {
    blogName
  })
  return data
}

export const sleep = ms =>
  new Promise(resolve => {
    setTimeout(resolve, ms)
  })
