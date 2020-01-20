const apiEndpoint = '/.netlify/functions/api'

/**
 * @typedef {object} BlogInfo
 * @property {string} [apiError]
 * @property {object} [blog]
 * @property {string} [blog.description]
 * @property {boolean} blog.is_adult
 * @property {boolean} blog.is_nsfw
 * @property {string} blog.name
 * @property {number} blog.posts
 * @property {string} [blog.title]
 * @property {number} blog.updated
 * @property {string} blog.url
 */

/**
 * @param {string} blogName
 */
export async function requestBlogInfo (blogName) {
  const response = await fetch(apiEndpoint, {
    method: 'post',
    body: JSON.stringify({ blogName })
  })

  /** @type {BlogInfo} */
  const data = await response.json()

  if (data.apiError) {
    throw Error(data.apiError)
  }

  return data
}
