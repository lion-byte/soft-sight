import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    displayFont: string
    baseFont: string
    primaryColor: string
    accentColor: string
    black: string
    white: string
  }
}
