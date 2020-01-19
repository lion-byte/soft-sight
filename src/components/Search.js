import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'

import Blog from './Blog'

const SearchStyles = styled.div`
  form {
    display: flex;
    flex-direction: column;

    input[type='text'] {
      border: 0.125em solid ${props => props.theme.accentColor};
      border-radius: 0.2em;
      height: 3.2em;
      padding: 0.2em 1em;
    }

    .options {
      align-items: center;
      display: flex;
      flex-direction: row;
      font-style: italic;
      justify-content: space-between;
    }
  }

  .results {
    margin: 1em 0 2em 0;
  }
`

export function Search () {
  /**
   * @typedef {ReadonlyArray<string>} SearchList
   */
  /**
   * @type {[SearchList, React.Dispatch<React.SetStateAction<SearchList>>]}
   */
  const [prevSearches, setPrevSearches] = useState([])
  const { handleSubmit, register, reset } = useForm()

  const onSubmit = useCallback(
    /**
     * @param {Record<string, string>} data
     */
    data => {
      const blogName = (data.blogName || '')
        .trim()
        .replace(/ /g, '-')
        .toLowerCase()

      if (!blogName) {
        return
      }

      if (prevSearches.includes(blogName)) {
        const blogIndex = prevSearches.indexOf(blogName)

        setPrevSearches(
          [blogName].concat(
            prevSearches.slice(0, blogIndex),
            prevSearches.slice(blogIndex + 1)
          )
        )
      } else {
        setPrevSearches([blogName].concat(prevSearches))
      }

      reset()
    },
    [prevSearches, reset]
  )

  return (
    <SearchStyles>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor='search-input'>Tumblr Username</label>
        <input
          id='search-input'
          type='text'
          inputMode='search'
          placeholder='Check if Tumblr blog is explicit'
          name='blogName'
          autoComplete='off'
          ref={register}
          required
        />

        <div className='options'>
          <p>Previous search results will be shown below the current search.</p>

          <button type='submit'>Check</button>
        </div>
      </form>

      <section className='results'>
        {prevSearches.map(name => (
          <Blog key={name} blogName={name} />
        ))}
      </section>
    </SearchStyles>
  )
}

export default Search
