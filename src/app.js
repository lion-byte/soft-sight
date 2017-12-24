import React, { Component } from 'react'
import { UserBlogs, LoadingData } from './components'

export class App extends Component {
  render () {
    return (
      <div>
        <LoadingData />

        <h2>User Blogs</h2>
        <UserBlogs />
      </div>
    )
  }
}
