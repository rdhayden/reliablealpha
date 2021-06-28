import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useDetectOutsideClick } from '../../hooks/useDetectOutsideClick';

import DropdownContainer from './DropdownContainer';
import Hamburger from '../../images/hamburgerMenuWhite.png';
import StyledNavLink from './StyledNavLink';

const HamburgerMenu = () => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);

  return (
    <HamburgerContainer>
      <img src={Hamburger} alt="Dropdown menu" onClick={onClick} />
      <nav ref={dropdownRef} className={`${isActive ? 'active' : 'inactive'}`}>
        <ul>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/positions">Positions</Link>
          </li>
          <li>
            <StyledNavLink to="/scanner">Scanner</StyledNavLink>
          </li>
        </ul>
      </nav>
    </HamburgerContainer>
  );
};

const HamburgerContainer = styled(DropdownContainer)`
  display: none;

  img {
    width: 20px;
    height: 20px;
  }

  @media ${(props) => props.theme.breakpoints.s} {
    display: inline;
  }
`;

export default HamburgerMenu;
