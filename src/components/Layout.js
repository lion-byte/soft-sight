import React from 'react'
import Helmet from 'react-helmet'

import '../styles/main.less'
import { Header } from './header'

export const Layout = ({ children }) => (
  <section className='layout-wrapper container'>
    <Helmet
      htmlAttributes={{
        lang: 'en'
      }}
      title='Soft Sight'
      titleTemplate='%s | Soft Sight'
    >
      <meta
        name='description'
        content='Detect likely explicit blogs on Tumblr'
      />
    </Helmet>

    <Header className='row' />

    <main className='row'>
      <section className='page-wrapper column'>{children}</section>
    </main>
  </section>
)

export default Layout
