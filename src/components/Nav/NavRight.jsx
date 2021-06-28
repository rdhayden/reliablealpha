import React from 'react';
import styled from 'styled-components';

import MoreDropdown from './MoreDropdown';
import SearchBar from '../Search/SearchBar';
import StyledNavLink from './StyledNavLink';
import { useAuth } from '../../hooks/useAuth';

const NavRight = () => {
  const auth = useAuth();

  return (
    <>
      {auth.user && (
        <StyledNav1>
          <SearchBar />
          <MoreDropdown />
        </StyledNav1>
      )}
      {!auth.user && (
        <StyledNav2>
          <StyledNavLink to="/signup">Sign Up</StyledNavLink>
          <StyledNavLink to="/login">Login</StyledNavLink>
        </StyledNav2>
      )}
    </>
  );
};

const StyledNav1 = styled.div`
  grid-column: -5 / -2;
  display: grid;
  grid-template-columns: 2fr 1fr;

  @media ${(props) => props.theme.breakpoints.xs} {
    grid-column: -4 / -2;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

const StyledNav2 = styled.div`
  grid-column: -4 / -2;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export default NavRight;
