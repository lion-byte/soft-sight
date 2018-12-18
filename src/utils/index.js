export const apiEndpoint = '/.netlify/functions/api'

export const requestBlogInfo = async blogName => {
  const response = await window.fetch(apiEndpoint, {
    method: 'post',
    body: JSON.stringify({ blogName })
  })

  const data = await response.json()

  if (data.apiError) {
    throw Error(data.apiError)
  }

  return data
}

export const sleep = (ms = 0) => new Promise(resolve => setTimeout(resolve, ms))
