import React from 'react'
import styled from 'styled-components'

import NavLink from './NavLink'

const FooterStyles = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const Footer = props => (
  <FooterStyles>
    <p>
      By{' '}
      <NavLink path='https://www.lion-byte.com/' external>
        Mark Hernandez
      </NavLink>
      {' | '}
      <NavLink path='https://github.com/lion-byte/soft-sight' external>
        GitHub
      </NavLink>
    </p>
  </FooterStyles>
)

export default Footer
