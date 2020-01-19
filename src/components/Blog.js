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
export const Blog = props => {
  const { blogName } = props

  const fetchData = useCallback(() => requestBlogInfo(blogName), [blogName])
  const { loading, error, data, execute } = useAsync(fetchData)

  useEffect(() => {
    if (blogName) {
      execute()
    }
  }, [blogName, execute])

  if (loading) {
    return (
      <BlogStyles>
        <h3>Loading...</h3>
        <Loading />
      </BlogStyles>
    )
  } else if (error) {
    return (
      <BlogError
        requestArgs={[blogName]}
        error={error.message}
        retry={execute}
      />
    )
  } else {
    return <BlogInner data={data} />
  }
}

export default Blog

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

/**
 * @param {object} props
 * @param {object} [props.data]
 * @param {object} props.data.blog
 * @param {string} props.data.blog.description
 * @param {boolean} props.data.blog.is_adult
 * @param {boolean} props.data.blog.is_nsfw
 * @param {string} props.data.blog.name
 * @param {number} props.data.blog.posts
 * @param {string} props.data.blog.title
 * @param {number} props.data.blog.updated
 * @param {string} props.data.blog.url
 */
export const BlogInner = props => {
  if (!props.data) {
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
  } = props.data.blog

  const isExplicit = isAdult || isNSFW
  const timeSinceUpdate =
    updated === 0
      ? 'Never'
      : formatDistanceToNow(new Date(updated * 1000), { addSuffix: true })

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
