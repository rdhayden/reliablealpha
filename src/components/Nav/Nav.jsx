import React from 'react';
import styled from 'styled-components';
import NavLeft from './NavLeft';
import HamburgerMenu from './HamburgerMenu';
import NavRight from './NavRight';

const Nav = () => {
  return (
    <NavContainer>
      <NavLeft />
      <HamburgerMenu />
      <NavRight />
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  grid-column: 1 / -1;
  padding: 1rem 0;
  display: grid;
  grid-template-columns: 2rem 50px repeat(auto-fill, minmax(100px, 1fr)) 2rem;

  background-color: ${(props) => props.theme.colors.black1};
`;

export default Nav;
