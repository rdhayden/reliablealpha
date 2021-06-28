import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export default styled(NavLink)`
  align-self: center;
  justify-self: center;
  text-decoration: none;
  color: ${(props) => props.theme.colors.white3};
`;
