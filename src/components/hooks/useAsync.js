import { useState, useCallback } from 'react'

/**
 * @param {() => Promise} asyncFunction
 */
export function useAsync (asyncFunction) {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  const execute = useCallback(() => {
    setLoading(true)
    setData(null)
    setError(null)

    return asyncFunction()
      .then(response => setData(response))
      .catch(error => setError(error))
      .finally(() => setLoading(false))
  }, [asyncFunction])

  return { execute, loading, data, error }
}

export default useAsync
