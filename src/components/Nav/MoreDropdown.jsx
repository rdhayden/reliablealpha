import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useDetectOutsideClick } from '../../hooks/useDetectOutsideClick';
import { useAuth } from '../../hooks/useAuth';
import DropdownContainer from './DropdownContainer';
import styled from 'styled-components';

const MoreDropdown = () => {
  const auth = useAuth();
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);

  return (
    <DropdownContainer>
      <StyledDiv onClick={onClick}>More &#9661;</StyledDiv>
      <nav ref={dropdownRef} className={`${isActive ? 'active' : 'inactive'}`}>
        <ul>
          <li>
            <Link to="#">Account</Link>
          </li>
          <li>
            <Link to="#">Alerts</Link>
          </li>
          <li>
            <Link onClick={() => auth.logout()}>Logout</Link>
          </li>
        </ul>
      </nav>
    </DropdownContainer>
  );
};

const StyledDiv = styled.div`
  color: ${(props) => props.theme.colors.white3};
  border-color: ${(props) => props.theme.colors.grey1};
  border-radius: 0.25rem;
  border-style: solid;
  border-width: 1px;
  text-align: center;
  width: 100px;
  word-spacing: 40px;
  @media ${(props) => props.theme.breakpoints.xxs} {
    width: 80px;
    word-spacing: 20px;
  }
`;

export default MoreDropdown;
