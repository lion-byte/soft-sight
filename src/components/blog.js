import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import { Fetch } from './fetch'
import { Loading } from './loading'
import { requestBlogInfo } from '../utils'
import { unix } from 'moment'

export const Blog = ({ blogName }) => (
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

Blog.propTypes = {
  blogName: PropTypes.string.isRequired
}

export const BlogLoading = () => (
  <Fragment>
    <h3>Loading...</h3>
    <Loading />
  </Fragment>
)

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

BlogInner.propTypes = {
  data: PropTypes.shape({
    blog: PropTypes.shape({
      description: PropTypes.string.isRequired,
      is_adult: PropTypes.bool.isRequired,
      is_nsfw: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
      posts: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      updated: PropTypes.number.isRequired,
      url: PropTypes.string.isRequired
    }).isRequired
  }),
  error: PropTypes.string,
  apiError: PropTypes.string
}
