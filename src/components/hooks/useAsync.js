import { useState, useCallback } from 'react'

/**
 * @template T
 * @param {() => Promise<T>} asyncFunction
 */
export function useAsync (asyncFunction) {
  const [loading, setLoading] = useState(false)

  /** @type {[T, React.Dispatch<T>]} */
  const [data, setData] = useState(null)

  /** @type {[Error, React.Dispatch<Error>]} */
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
