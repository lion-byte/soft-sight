import React, { Component } from 'react'
import { Blog } from './blog'

export class Search extends Component {
  constructor (props) {
    super(props)

    this.state = {
      prevSearches: [],
      text: ''
    }
  }

  handleChange (e) {
    this.setState({ text: e.target.value })
  }

  isInvalidSearch (input) {
    if (input === '') {
      return true
    } else {
      return false
    }
  }

  onSubmit (e) {
    e.preventDefault()

    /* Trims surrounding whitespace and replaces inner-spaces with hyphens */
    const text = this.state.text
      .trim()
      .split(' ')
      .join('-')

    if (this.isInvalidSearch(text)) {
      return
    }

    this.setState(prevState => {
      if (prevState.prevSearches.includes(text)) {
        return {}
      }

      console.log(`Searching for: ${text}`)

      return {
        prevSearches: [text, ...prevState.prevSearches],
        text: ''
      }
    })
  }

  render () {
    const { prevSearches, text } = this.state
    return (
      <section className='search'>
        <form onSubmit={e => this.onSubmit(e)} className='clearfix'>
          <input
            type='text'
            onChange={e => this.handleChange(e)}
            placeholder='Check if Tumblr blog is explicit'
            value={text}
          />
          <span className='float-left'>
            <p>
              <i>
                Previous search results will be shown below the current search.
              </i>
            </p>
          </span>
          <button className='float-right'>Check</button>
        </form>

        <section className='results'>
          {prevSearches.map(name => <Blog key={name} blogName={name} />)}
        </section>
      </section>
    )
  }
}
