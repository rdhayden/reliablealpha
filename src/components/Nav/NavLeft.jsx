import styled from 'styled-components';

import Logo from './Logo';
import StyledNavLink from './StyledNavLink';
import { useAuth } from '../../hooks/useAuth';

const NavLeft = () => {
  const auth = useAuth();

  return (
    <StyledNav>
      <Logo />
      {auth.user && (
        <>
          <StyledNavLink to="/dashboard">Dashboard</StyledNavLink>
          <StyledNavLink to="/portfolios">Portfolios</StyledNavLink>
          <StyledNavLink to="/optimize">Optimize</StyledNavLink>
          <StyledNavLink to="/help">Help</StyledNavLink>
        </>
      )}
    </StyledNav>
  );
};

const StyledNav = styled.div`
  grid-column: 2 / 7;
  display: grid;
  grid-template-columns: 50px 1fr 1fr 1fr 1fr;

  @media ${(props) => props.theme.breakpoints.s} {
    display: none;
  }
`;

export default NavLeft;
