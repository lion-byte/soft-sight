import React, { Fragment } from 'react'
import { Search } from '../components/search'

const HomePage = () => (
  <Fragment>
    <section className='splash'>
      <h2>Welcome to Soft Sight!</h2>
    </section>

    <Search />
  </Fragment>
)

export default HomePage
