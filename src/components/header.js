import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

export const NavLink = ({ className, label, path }) => (
  <Link className={`${className || ' button button-outline'}`} to={path}>
    {label}
  </Link>
)

NavLink.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired
}

export const Header = ({ className }) => (
  <header className={className || ''}>
    <nav className='column'>
      <NavLink
        className='title button button-clear'
        label='Soft Sight'
        path='/'
      />
      <NavLink label='Home' path='/' />
    </nav>
  </header>
)
