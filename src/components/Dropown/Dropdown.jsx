import React, { useRef } from 'react';
import styled from 'styled-components';
import { useDetectOutsideClick } from '../../hooks/useDetectOutsideClick';
import Button from '../Button/Button';

const Dropdown = (props) => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);

  return (
    <DropdownContainer>
      <Button onClick={onClick} className="menu-trigger">
        {props.label}
      </Button>
      <nav ref={dropdownRef} className={`${isActive ? 'active' : 'inactive'}`}>
        <ul>{props.children}</ul>
      </nav>
    </DropdownContainer>
  );
};

const DropdownContainer = styled.div`
  align-self: center;

  nav {
    background-color: ${(props) =>
      props.backgroundColor
        ? props.backgroundColor
        : props.theme.colors.green1};
    border-radius: 0.25rem;
    position: absolute;
    top: 60px;

    width: 100px;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
    opacity: 0;
    visibility: hidden;
    transform: translateY(-20px);
    transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
  }

  .active {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.white3};
    padding: 5px 5px;
    display: block;
  }
`;

export default Dropdown;
