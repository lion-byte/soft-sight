import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import { Fetch } from './fetch'
import { Loading } from './loading'
import { requestBlogInfo } from '../utils'
import { unix } from 'moment'

export const Blog = ({ blogName }) => (
  <section className='blog'>
    <Fetch
      request={() => requestBlogInfo(blogName)}
      child={BlogInner}
      onError={() => (
        <span>
          Sorry, could not find <u>{blogName}</u>
        </span>
      )}
      onLoading={() => (
        <Fragment>
          <h3>Loading...</h3>
          <Loading />
        </Fragment>
      )}
    />
  </section>
)

Blog.propTypes = {
  blogName: PropTypes.string.isRequired
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
  },
  error
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
      Last updated: {posts === 0 ? 'Never' : `${unix(updated).fromNow()}`}
    </p>
    <p>
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
  error: PropTypes.string
}
