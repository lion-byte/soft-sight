import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import Footer from './Footer'
import Header from './Header'
import Theme from './Theme'

const LayoutStyles = styled.div`
  margin: 0 auto;
  max-width: 850px;
`

const Main = styled.main`
  background-color: ${props => props.theme.white};
  box-shadow: 0 0 0.75em rgba(0, 0, 0, 0.5);
  margin: 2rem auto 3em auto;
  min-height: 65vh;
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

      <Footer />
    </LayoutStyles>
  </Theme>
)

export default Layout
