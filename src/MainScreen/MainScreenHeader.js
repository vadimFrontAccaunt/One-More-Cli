import React from 'react';
import {StyledBlock} from '../SimpleComponents/Block';
import {Text} from 'react-native';

export const MainScreenHeader = () => {
  return (
    <StyledBlock flexDirection="row" justifyContent="space-between">
      <Text>CARTON №</Text>
      <Text>ACT.</Text>
    </StyledBlock>
  );
};
