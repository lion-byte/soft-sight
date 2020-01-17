import React from 'react'
import styled from 'styled-components'

import NavLink from './NavLink'

const HeaderStyles = styled.header`
  background-color: #fff;
  box-shadow: 0 0 0.75em rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-family: ${props => props.theme.displayFont};
  font-size: 1.25em;
  justify-content: space-between;

  a {
    display: inline-block;
    padding: 1ch 1.5ch;
    text-decoration: none;
  }

  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
  }
`

export const Header = props => (
  <HeaderStyles>
    <NavLink path='/'>Soft Sight</NavLink>

    <nav>
      <NavLink path='/'>Home</NavLink>
      <NavLink path='/contact'>Contact</NavLink>
    </nav>
  </HeaderStyles>
)

export default Header
