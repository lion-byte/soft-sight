import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import '../styles/main.less'
import { Header } from '../components/header'

const LayoutWrapper = ({
  children,
  data: { site: { siteMetadata: { author, description, title } } }
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
      <section className='page-wrapper column'>{children()}</section>
    </main>
  </section>
)

LayoutWrapper.propTypes = {
  children: PropTypes.func.isRequired,
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        author: PropTypes.string,
        description: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  }).isRequired
}

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
