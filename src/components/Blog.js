import React, { useCallback, useEffect } from 'react'
import { formatDistanceToNow } from 'date-fns'
import styled from 'styled-components'

import { requestBlogInfo } from '../utils'
import useAsync from './hooks/useAsync'
import Loading from './Loading'

const BlogStyles = styled.article`
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

/**
 * @param {object} props
 * @param {string} props.blogName
 */
export function Blog (props) {
  const { blogName } = props

  const fetchData = useCallback(() => requestBlogInfo(blogName), [blogName])
  const { loading, error, data, execute } = useAsync(fetchData)

  useEffect(() => {
    if (blogName) {
      execute()
    }
  }, [blogName, execute])

  const blog = data?.blog

  if (loading) {
    return (
      <BlogStyles>
        <h3>Loading...</h3>
        <Loading />
      </BlogStyles>
    )
  } else if (error) {
    return (
      <BlogError blogName={blogName} error={error.message} retry={execute} />
    )
  } else if (!blog) {
    return null
  }

  const {
    description,
    is_adult: isAdult,
    is_nsfw: isNSFW,
    name,
    posts,
    title,
    updated,
    url
  } = blog

  const isExplicit = isAdult || isNSFW
  const timeSinceUpdate =
    updated === 0
      ? 'Never'
      : formatDistanceToNow(updated * 1000, { addSuffix: true })

  return (
    <BlogStyles>
      <h3>{name}</h3>

      <p>
        <b>{isExplicit ? '' : 'Not '}NSFW</b>
      </p>

      <p>
        Title: {title || '[No title given]'}
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

export default Blog

/**
 * @param {object} props
 * @param {string} props.blogName
 * @param {string} props.error
 * @param {() => void} [props.retry]
 */
export function BlogError (props) {
  const { blogName, error = '', retry } = props

  let errorText = error
  let allowRetry = true

  if (error.includes('404')) {
    errorText = `This blog doesn't exist.`
    allowRetry = false
  } else if (error.includes('timeout')) {
    errorText = 'Check your network connection.'
  }

  return (
    <BlogStyles>
      <p>
        Sorry, could not find Tumblr blog: <u>{blogName}</u>.
        <br />
        {errorText}
      </p>

      {allowRetry && (
        <p>
          <button type='button' onClick={retry}>
            Retry
          </button>
        </p>
      )}
    </BlogStyles>
  )
}
