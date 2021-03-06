import React from 'react'

import Layout from '../components/Layout'

export function ContactPage () {
  return (
    <Layout>
      <h1>Contact</h1>

      <p>
        Feature requests and questions can be sent to{' '}
        <a href='mailto:mark@lion-byte.com'>mark@lion-byte.com</a>.
      </p>
    </Layout>
  )
}

export default ContactPage
