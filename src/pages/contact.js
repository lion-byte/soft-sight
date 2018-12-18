import React from 'react'

import Layout from '../components/Layout'

const ContactPage = props => (
  <Layout>
    <section className='splash'>
      <h2>Contact</h2>
    </section>

    <p>
      Feature requests and questions can be sent to{' '}
      <a href='mailto:mark@lion-byte.com'>mark@lion-byte.com</a>.
    </p>
  </Layout>
)

export default ContactPage