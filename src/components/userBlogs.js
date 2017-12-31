import React, {Component} from 'react'
import { Blog } from './blog'

export class UserBlogs extends Component {
  render () {
    const {blogs} = this.props
    return (
      <section className='user-blogs'>
        {blogs.map((b, index) => <Blog key={index} {...b} />)}
      </section>
    )
  }
}
