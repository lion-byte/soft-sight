import React, {Component} from 'react'
import Typed from 'typed.js'

export class TextType extends Component {
  componentDidMount () {
    const {strings} = this.props

    const options = {
      strings,
      showCursor: false,
      typeSpeed: 50,
      backSpeed: 40
    }

    this.typed = new Typed(this.el, options)
  }

  componentWillUnmount () {
    this.typed.destroy()
  }

  render () {
    return (<span ref={el => { this.el = el }} />)
  }
}
