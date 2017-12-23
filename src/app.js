import React, { Component } from 'react'
import { UserBlogs } from './components'

export class App extends Component {
  render () {
    return (
      <div>
        <h2>User Blogs</h2>
        <UserBlogs />
      </div>
    )
  }
}
