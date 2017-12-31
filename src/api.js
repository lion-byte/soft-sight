import { getData, postData } from './utils'

export const isAuth = async () => {
  const defaultValue = { isAuthenticated: false }
  const { isAuthenticated } = await getData('/api/', defaultValue)

  return isAuthenticated
}

export const getUserInfo = async () => {
  const defaultValue = {}
  const result = await getData('/api/user', defaultValue)

  return result
}

export const getUserBlogInfo = async blogname => {
  const defaultValue = {}
  const result = await getData(`/api/user/${blogname}`, defaultValue)

  return result
}

export const getUserBlogFollowers = async (blogname, offset = 0) => {
  const defaultValue = { followers: [] }
  const { followers } = await postData(
    `/api/user/${blogname}/followers`,
    { offset },
    defaultValue
  )

  return followers
}

export const getBlogInfo = async blogname => {
  const defaultValue = {}
  const result = await postData('/api/blog', { blogname }, defaultValue)

  return result
}
