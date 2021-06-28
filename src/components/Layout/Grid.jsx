import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 2rem repeat(12, 1fr) 2rem;
  margin: ${(props) => (props.marginDefault ? props.marginDefault : 0)};
  grid-template-rows: max-content;

  @media ${(props) => props.theme.breakpoints.m} {
    grid-template-columns: 2rem repeat(6, 1fr) 2rem;
    margin: ${(props) => (props.marginMedium ? props.marginMedium : 0)};
  }

  @media ${(props) => props.theme.breakpoints.s} {
    grid-template-columns: 1rem repeat(6, 1fr) 1rem;
    margin: ${(props) => (props.marginSmall ? props.marginSmall : 0)};
  }
`;

export default Grid;
