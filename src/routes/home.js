import React, {Component} from 'react'
import { SpinnerDonut } from 'mini.css-react'
import { TextType } from '../components'
import { isAuth, getUserInfo } from '../api'

export class Home extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isLoading: true,
      isUser: false,
      name: ''
    }
  }

  componentDidMount () {
    const init = async () => {
      const isUser = await isAuth()
      const { name } = await getUserInfo()

      this.setState({
        isLoading: false,
        isUser,
        name
      })
    }

    init()
  }

  render () {
    const { isLoading, isUser, name } = this.state

    if (isLoading) {
      return (
        <div>
          <h2>
            <TextType strings={['Loading', 'Loading.', 'Loading..', 'Loading...']} />
            <SpinnerDonut elementType='span' />
          </h2>
        </div>
      )
    }

    if (isUser) {
      return (
        <div>
          <h2>Hello, <TextType strings={[name]} />!</h2>
          <p>
            <a href='/logout'>Logout</a>
          </p>
        </div>
      )
    } else {
      return (
        <div>
          <h2>Hello, <TextType strings={['guest']} />!</h2>
          <p>
            <a href='/login'>Login</a>
          </p>
        </div>
      )
    }
  }
}
