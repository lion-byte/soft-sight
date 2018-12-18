import React from 'react'
import Helmet from 'react-helmet'

import '../styles/main.less'
import { Header } from '../components/header'

const LayoutWrapper = ({
  children,
  data: {
    site: {
      siteMetadata: { author, description, title }
    }
  }
}) => (
  <section className='layout-wrapper container'>
    <Helmet
      htmlAttributes={{
        lang: 'en'
      }}
      title={title}
      meta={[{ name: 'description', content: description }]}
    />

    <Header className='row' />

    <main className='row'>
      <section className='page-wrapper column'>{children}</section>
    </main>
  </section>
)

export default LayoutWrapper

export const query = graphql`
  query Data {
    site {
      siteMetadata {
        title
        author
        description
      }
    }
  }
`
