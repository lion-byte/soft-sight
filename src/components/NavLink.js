import React from 'react'
import { Link } from 'gatsby'

/**
 * @param {object} props
 * @param {any} props.children
 * @param {string} [props.className]
 * @param {boolean} [props.external]
 * @param {string} props.path
 */
export const NavLink = props => {
  const { className, external, children, path } = props

  if (external) {
    return (
      <a
        className={className}
        href={path}
        target='_blank'
        rel='noopener noreferrer'
      >
        {children}
      </a>
    )
  } else {
    return (
      <Link className={className} to={path}>
        {children}
      </Link>
    )
  }
}

export default NavLink

NavLink.defaultProps = {
  external: false,
  path: '/'
}
