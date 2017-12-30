export const errorCatch = err => console.error(err)

export const apiFetch = async url => {
  try {
    return await (await window.fetch(url, {
      credentials: 'same-origin'
    })).json()
  } catch (e) {
    throw e
  }
}

export const apiRequest = async (url, body) => {
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

export const dataGrab = async (url, defaultData = null) => {
  try {
    const data = await apiFetch(url)
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

export const dataFetch = async (url, body = {}, defaultData = null) => {
  try {
    const data = await apiRequest(url, JSON.stringify(body))
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
