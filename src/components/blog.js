import React, { Component } from 'react'

export class Blog extends Component {
  render () {
    const {name, title, url, description} = this.props

    return (
      <section className='card fluid'>
        <section className='section'>
          <h4>
            {name}
            <small>{url}</small>
            <small>{title}</small>
          </h4>
          {
            description
            ? <p className='description'>{description}</p>
            : <p className='description'><i><small>No description</small></i></p>
          }
        </section>
      </section>
    )
  }
}
