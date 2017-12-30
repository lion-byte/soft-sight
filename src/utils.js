export const errorCatch = err => console.error(err)

export const apiFetchGet = async url => {
  try {
    return await (await window.fetch(url, {
      credentials: 'same-origin'
    })).json()
  } catch (e) {
    throw e
  }
}

export const apiFetchPost = async (url, body) => {
  try {
    return await (await window.fetch(url, {
      body,
      credentials: 'same-origin',
      headers: {
        'content-type': 'application/json'
      },
      method: 'post'
    })).json()
  } catch (e) {
    throw e
  }
}

export const getData = async (url, defaultData = null) => {
  try {
    const data = await apiFetchGet(url)
    const { error } = data

    if (error) {
      throw new Error(error)
    } else {
      return data
    }
  } catch (e) {
    errorCatch(e)
    return defaultData
  }
}

export const postData = async (url, body = {}, defaultData = null) => {
  try {
    const data = await apiFetchPost(url, JSON.stringify(body))
    const { error } = data

    if (error) {
      throw new Error(error)
    } else {
      return data
    }
  } catch (e) {
    errorCatch(e)
    return defaultData
  }
}
