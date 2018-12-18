import React from 'react'
import { Link } from 'gatsby'

/**
 *
 * @param {object} props
 * @param {string} props.className
 * @param {boolean} [props.external]
 * @param {string} props.label
 * @param {string} props.path
 */
export const NavLink = props => {
  const { className, external, label, path } = props

  if (external) {
    return (
      <a
        className={`${className || ' button button-outline'}`}
        href={path}
        target='_blank'
        rel='noopener noreferrer'
      >
        {label}
      </a>
    )
  } else {
    return (
      <Link className={`${className || ' button button-outline'}`} to={path}>
        {label}
      </Link>
    )
  }
}

NavLink.defaultProps = {
  external: false,
  label: 'Link',
  path: '/'
}

/**
 * @param {object} props
 * @param {string} props.className
 */
export const Header = props => {
  const { className } = props

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
