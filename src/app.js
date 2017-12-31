import React, { Component } from 'react'
import { SpinnerDonut } from 'mini.css-react'
import { UserBlogs } from './components'
import { isAuth, getUserInfo } from './api'

export class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isLoading: true,
      isUser: false,
      name: '',
      blogs: []
    }
  }

  componentDidMount () {
    ;(async () => {
      const isUser = await isAuth()
      const { name, blogs } = await getUserInfo()

      this.setState({
        isLoading: false,
        isUser,
        name,
        blogs
      })
    })()
  }

  render () {
    const { isLoading, isUser, name, blogs } = this.state

    if (isLoading) {
      return (
        <div>
          <h2>
            Loading...
            <SpinnerDonut elementType='span' />
          </h2>
        </div>
      )
    }

    if (isUser) {
      return (
        <div>
          <h2>Hello, {name}!</h2>
          <p>
            <a href='/logout'>Logout</a>
          </p>
          <UserBlogs blogs={blogs} />
        </div>
      )
    } else {
      return (
        <div>
          <h2>Hello, guest!</h2>
          <p>
            <a href='/login'>Login</a>
          </p>
        </div>
      )
    }
  }
}
