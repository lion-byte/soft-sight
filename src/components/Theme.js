import React from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'

import 'milligram/dist/milligram.css'

const theme = {}

const GlobalStyles = createGlobalStyle`
  body {
    background: linear-gradient(115deg, rgba(98, 185, 183, 1) 5%, rgba(236, 246, 237, 1) 98%);
    line-height: 1.5;
    margin: 0;
    min-height: 100vh;
  }

  p {
    margin-bottom: 1.5em;
  }
`

export const Theme = props => {
  const { children } = props

  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <GlobalStyles />

        {children}
      </React.Fragment>
    </ThemeProvider>
  )
}

export default Theme
