import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import Header from './Header'
import Theme from './Theme'

const LayoutStyles = styled.div`
  margin: 0 auto;
  max-width: 1200px;
`

const Main = styled.main`
  background-color: rgba(255, 255, 255, 0.95);
  box-shadow: 0 0 0.75em rgba(0, 0, 0, 0.5);
  margin: 4rem auto;
  max-width: 850px;
  min-height: 50vh;
  padding: 1em;

  h1 {
    text-align: center;
  }
`

export const Layout = ({ children }) => (
  <Theme>
    <LayoutStyles>
      <Helmet
        htmlAttributes={{
          lang: 'en'
        }}
        defaultTitle='Soft Sight'
        titleTemplate='%s | Soft Sight'
      >
        <meta
          name='description'
          content='Detect likely explicit blogs on Tumblr'
        />
      </Helmet>

      <Header />

      <Main>{children}</Main>
    </LayoutStyles>
  </Theme>
)

export default Layout
