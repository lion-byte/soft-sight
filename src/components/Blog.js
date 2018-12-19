import React from 'react'
import { unix } from 'moment'
import styled from 'styled-components'

import { requestBlogInfo } from '../utils'
import Fetch from './Fetch'
import Loading from './Loading'

/**
 * @param {object} props
 * @param {string} props.blogName
 */
export const Blog = props => {
  const { blogName } = props

  return (
    <Fetch
      request={requestBlogInfo}
      requestArgs={[blogName]}
      child={BlogInner}
      onLoading={BlogLoading}
      onError={BlogError}
    />
  )
}

export default Blog

const BlogStyles = styled.section`
  border-top: 0.125em solid rgba(98, 185, 183, 1);
  border-bottom: 0.125em solid rgba(98, 185, 183, 1);
  margin: 0 0 3em 0;
  padding: 1em 0 0 0;

  h3,
  p {
    margin-top: 0;
  }

  .description {
    overflow-wrap: break-word;
    white-space: pre-wrap;
  }
`

export const BlogLoading = props => {
  return (
    <BlogStyles>
      <h3>Loading...</h3>
      <Loading />
    </BlogStyles>
  )
}

export const BlogError = ({ requestArgs: [blogName], error = '', retry }) => {
  let errorText = error
  let allowRetry = true

  if (error.search(/404/g) !== -1) {
    errorText = `This blog doesn't exist.`
    allowRetry = false
  } else if (error.search(/timeout/g) !== -1) {
    errorText = `Check your network connection.`
  }

  return (
    <BlogStyles>
      <p>
        Sorry, could not find Tumblr blog: <u>{blogName}</u>.
        <br />
        {errorText}
      </p>

      <p>{allowRetry && <button onClick={retry}>Retry</button>}</p>
    </BlogStyles>
  )
}

export const BlogInner = props => {
  const {
    data: {
      blog: {
        description,
        is_adult: isAdult,
        is_nsfw: isNSFW,
        name,
        posts,
        title,
        updated,
        url
      }
    }
  } = props

  const isExplicit = isAdult || isNSFW
  const timeSinceUpdate = updated === 0 ? 'Never' : unix(updated).fromNow()

  return (
    <BlogStyles>
      <h3>{name}</h3>

      <p>
        <b>{isExplicit ? '' : 'Not '}NSFW</b>
      </p>

      <p>
        Title: {title || '[No title provided]'}
        <br />
        URL: {url}
        <br />
        Post count: {posts}
        <br />
        Last updated: {timeSinceUpdate}
      </p>

      <p className='description'>
        Description:
        <br />
        {description || '[No description provided]'}
      </p>
    </BlogStyles>
  )
}
