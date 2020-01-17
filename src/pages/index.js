import React from 'react'

import Layout from '../components/Layout'
import Search from '../components/Search'

export function HomePage () {
  return (
    <Layout>
      <h1>Welcome to Soft Sight!</h1>

      <Search />
    </Layout>
  )
}

export default HomePage
