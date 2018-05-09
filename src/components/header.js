import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

export const NavLink = ({ className, external, label, path }) =>
  external ? (
    <a
      className={`${className || ' button button-outline'}`}
      href={path}
      target='_blank'
      rel='noopener noreferrer'
    >
      {label}
    </a>
  ) : (
    <Link className={`${className || ' button button-outline'}`} to={path}>
      {label}
    </Link>
  )

NavLink.propTypes = {
  className: PropTypes.string,
  external: PropTypes.bool,
  label: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired
}

NavLink.defaultProps = {
  external: false,
  label: 'Link',
  path: '/'
}

export class Header extends PureComponent {
  render () {
    const { className } = this.props

    return (
      <header className={className || ''}>
        <nav className='column'>
          <NavLink
            className='title button button-clear'
            label='Soft Sight'
            path='/'
          />
          <NavLink label='Home' path='/' />
          <NavLink label='Contact' path='/contact' />
          <NavLink
            label='GitHub'
            path='https://github.com/lion-byte/soft-sight'
            external
          />
        </nav>
      </header>
    )
  }
}
