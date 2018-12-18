import React, { Fragment } from 'react'
import { unix } from 'moment'

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
    <section className='blog'>
      <Fetch
        request={requestBlogInfo}
        requestArgs={[blogName]}
        child={BlogInner}
        onLoading={BlogLoading}
        onError={BlogError}
      />
    </section>
  )
}

export default Blog

export const BlogLoading = props => {
  return (
    <Fragment>
      <h3>Loading...</h3>
      <Loading />
    </Fragment>
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
    <p className='clearfix'>
      <span className='float-left'>
        Sorry, could not find Tumblr blog: <u>{blogName}</u>.
        <br />
        {errorText}
      </span>
      {allowRetry && (
        <button className='float-right' onClick={retry}>
          Retry
        </button>
      )}
    </p>
  )
}

export const BlogInner = ({
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
}) => (
  <Fragment>
    <h3>{name}</h3>
    <p>
      <b>{isAdult || isNSFW ? '' : 'Not'} NSFW</b>
    </p>
    <p>
      Title: {title || '[No title provided]'}
      <br />
      Url: {url}
      <br />
      Post count: {posts}
      <br />
      Last updated: {updated === 0 ? 'Never' : `${unix(updated).fromNow()}`}
    </p>
    <p className='description'>
      Description:
      <br />
      {description || '[No description provided]'}
    </p>
  </Fragment>
)
