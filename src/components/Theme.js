import React from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import 'typeface-nunito'
import 'typeface-roboto'

const theme = {
  displayFont: `'Nunito', Arial, Helvetica, sans-serif`,
  baseFont: `'Roboto', Arial, Helvetica, sans-serif`,
  primaryColor: '#e300a3;',
  accentColor: 'rgb(98, 185, 183)',
  black: '#535353',
  white: '#fefefe'
}

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    background: linear-gradient(115deg,
      ${props => props.theme.accentColor} 5%,
      ${props => props.theme.white} 98%
    );
    color: ${props => props.theme.black};
    font-family: ${props => props.theme.baseFont};
    line-height: 1.5;
    margin: 0;
    min-height: 100vh;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${props => props.theme.displayFont};
  }

  a {
    color: ${props => props.theme.primaryColor};

    :active {
      color: ${props => props.theme.accentColor};
    }
  }

  p {
    margin-bottom: 1.5em;
  }

  button {
    appearance: none;
    background-color: ${props => props.theme.accentColor};
    border: none;
    border-radius: 0.2em;
    color: ${props => props.theme.white};
    cursor: pointer;
    padding: 1.5ch 1em;

    :active {
      background-color: ${props => props.theme.primaryColor};
    }
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
