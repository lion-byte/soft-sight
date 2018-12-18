import React from 'react'

import Layout from '../components/Layout'
import Search from '../components/Search'

const HomePage = props => (
  <Layout>
    <section className='splash'>
      <h2>Welcome to Soft Sight!</h2>
    </section>

    <Search />
  </Layout>
)

export default HomePage
