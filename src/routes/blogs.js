import React, {Component} from 'react'
import { getUserInfo } from '../api'
import { UserBlogs } from '../components'

export class Blogs extends Component {
  constructor (props) {
    super(props)
    this.state = {
      blogs: []
    }
  }

  componentDidMount () {
    const init = async () => {
      const { blogs } = await getUserInfo()

      this.setState({ blogs })
    }
    init()
  }

  render () {
    const {blogs} = this.state

    return (
      <section>
        <h1>Blogs</h1>
        <UserBlogs blogs={blogs} />
      </section>
    )
  }
}
