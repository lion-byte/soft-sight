import { dataGrab } from './utils'

export const isAuth = async () => {
  const defaultValue = { isAuthenticated: false }
  const { isAuthenticated } = await dataGrab('/api/', defaultValue)

  return isAuthenticated
}
