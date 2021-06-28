import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Logo from '../../images/logo128.png';

const LogoLink = () => (
  <StyledLink to="/">
    <img src={Logo} alt="Logo" />
  </StyledLink>
);

const StyledLink = styled(Link)`
  img {
    width: 40px;
    height: 40px;
  }

  @media ${(props) => props.theme.breakpoints.m} {
    img {
      width: 25px;
      height: 25px;
    }
  }
`;

export default LogoLink;