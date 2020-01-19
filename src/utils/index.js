const apiEndpoint = '/.netlify/functions/api'

/**
 * @param {string} blogName
 */
export async function requestBlogInfo (blogName) {
  const response = await fetch(apiEndpoint, {
    method: 'post',
    body: JSON.stringify({ blogName })
  })

  const data = await response.json()

  if (data.apiError) {
    throw Error(data.apiError)
  }

  return data
}
