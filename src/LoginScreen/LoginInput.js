import {StyledInput} from '../SimpleComponents/Input';
import {StyledText} from '../SimpleComponents/Text';
import React from 'react';
import {View} from 'react-native';

export const LoginInput = ({
  onChangeText,
  value,
  lable,
  onBlur,
  touched,
  errors,
}) => {
  return (
    <View>
      <StyledText fz="20px">{lable}</StyledText>
      <StyledInput
        borderWidth="1px"
        value={value}
        onBlur={onBlur}
        onChangeText={onChangeText}
      />
      {touched && errors && <StyledText color="red">{errors}</StyledText>}
    </View>
  );
};
