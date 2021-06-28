import styled from 'styled-components';

const H1 = styled.h1`
  color: ${(props) => props.theme.colors.black1};
  font-weight: 600;
  font-size: 3.25;
  line-height: 3.25rem;
  margin: ${(props) => (props.margin ? props.margin : '0')};
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'left')};

  @media ${(props) => props.theme.breakpoints.xs} {
    font-size: 2.5rem;
    line-height: 2.5rem;
  }

  @media ${(props) => props.theme.breakpoints.s} {
    font-size: 1.75rem;
    line-height: 1.75rem;
  }
`;

export default H1;
