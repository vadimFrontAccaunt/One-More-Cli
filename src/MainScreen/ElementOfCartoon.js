import React from 'react';
import {Pressable, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import {StyledBlock} from '../SimpleComponents/Block';
import {StyledText} from '../SimpleComponents/Text';
import {actions} from '../../redux/store';

const ElementOfCartoon = ({cartonNumber, count, navigation}) => {
  const dispatch = useDispatch();
  const deleteCartoon = () => {
    dispatch(actions.deleteCartoonFromList(cartonNumber));
  };

  const handleActiveCartoonItemIndex = () => {
    dispatch(actions.findIndexOfCartoon(cartonNumber));
    navigation.navigate('ThecondPage');
  };

  return (
    <StyledBlock
      alignItems="center"
      flexDirection="row"
      justifyContent="space-between"
      mt="25px"
      ml="10px"
      mr="10px">
      <Pressable onPress={handleActiveCartoonItemIndex}>
        <StyledBlock
          flexDirection="row"
          justifyContent="space-between"
          width="240px">
          <Text>{cartonNumber}</Text>
          <StyledText
            bgc="green"
            width="80px"
            br="20px"
            textAlign="center"
            fz="18px">
            {count}
          </StyledText>
        </StyledBlock>
      </Pressable>
      <Pressable onPress={deleteCartoon}>
        <StyledBlock>
          <StyledText
            textAlign="center"
            bgc="red"
            width="80px"
            height="50px"
            pt="12px"
            pb="12px"
            fz="16px">
            Delete
          </StyledText>
        </StyledBlock>
      </Pressable>
    </StyledBlock>
  );
};

export default ElementOfCartoon;
