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
