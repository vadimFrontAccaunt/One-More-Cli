import React, {useContext} from 'react';
import {Pressable, Text} from 'react-native';
import {useDispatch} from 'react-redux';

import {actions} from '../../redux/store';
import {BorderedText, FlexedView} from '../../styles';

const ElementOfCartoon = ({cartonNumber, count, navigation}) => {
  const dispatch = useDispatch();
  const deleteCartoon = () => {
    dispatch(actions.deleteCartoonFromList(cartonNumber));
  };

  const findIndex = () => {
    dispatch(actions.findIndexOfCartoon(cartonNumber));
    navigation.navigate('ThecondPage');
  };

  return (
    <FlexedView marginT="25px" marginL="10px" marginR="10px">
      <Pressable onPress={findIndex}>
        <FlexedView width="240px">
          <Text>{cartonNumber}</Text>
          <BorderedText
            backgroundColor="green"
            width="80px"
            borderRadius="20px">
            {count}
          </BorderedText>
        </FlexedView>
      </Pressable>
      <Pressable onPress={deleteCartoon}>
        <FlexedView>
          <BorderedText
            backgroundColor="red"
            width="80px"
            height="50px"
            paddingT="12px">
            Delete
          </BorderedText>
        </FlexedView>
      </Pressable>
    </FlexedView>
  );
};

export default ElementOfCartoon;
