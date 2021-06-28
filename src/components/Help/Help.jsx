import React from 'react';
import styled from 'styled-components';

import H1 from '../Typography/H1';
import Text from '../Typography/Text';
import { useAuth } from '../../hooks/useAuth';

const Help = () => {
  const auth = useAuth();

  return (
    <PositionsContainer>
      <H1>Help</H1>
      <Text>Logged in as {auth.user.email}</Text>
    </PositionsContainer>
  );
};

const PositionsContainer = styled.div`
  grid-column: 2 / span 12;
  padding: 3rem 0 5.5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${(props) => props.theme.breakpoints.m} {
    grid-column: 2 / span 6;
  }
`;

export default Help;
