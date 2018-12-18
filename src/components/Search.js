import React, { PureComponent } from 'react'
import styled from 'styled-components'

import Blog from './Blog'

const SearchStyles = styled.section`
  .form {
    .options {
      align-items: center;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }

  .results {
    margin: 2em 0;
  }
`

export class Search extends PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      prevSearches: [],
      text: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  handleChange (e) {
    this.setState({ text: e.target.value })
  }

  onSubmit (e) {
    e.preventDefault()

    /* Trims surrounding whitespace and replaces inner-spaces with hyphens */
    const text = this.state.text
      .trim()
      .split(' ')
      .join('-')

    if (text === '') {
      return
    }

    this.setState(prevState => {
      if (prevState.prevSearches.includes(text)) {
        return {}
      }

      return {
        prevSearches: [text, ...prevState.prevSearches],
        text: ''
      }
    })
  }

  render () {
    const { prevSearches, text } = this.state

    return (
      <SearchStyles>
        <form onSubmit={this.onSubmit} className='form'>
          <input
            type='text'
            onChange={this.handleChange}
            placeholder='Check if Tumblr blog is explicit'
            value={text}
          />

          <section className='options'>
            <p>
              <i>
                Previous search results will be shown below the current search.
              </i>
            </p>

            <button>Check</button>
          </section>
        </form>

        <section className='results'>
          {prevSearches.map(name => (
            <Blog key={name} blogName={name} />
          ))}
        </section>
      </SearchStyles>
    )
  }
}

export default Search
