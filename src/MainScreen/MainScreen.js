import {View, Text, ScrollView, SafeAreaView} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import ElementOfCartoon from './ElementOfCartoon';

import {FlexedView} from '../../styles';

export const MainScreen = ({navigation}) => {
  const state = useSelector(state => state.cartoons);

  let empty;
  if (state.length === 0) {
    empty = false;
  } else {
    empty = true;
  }
  return (
    <SafeAreaView>
      <ScrollView>
        <FlexedView marginL="20px" marginR="20px" marginT="5px">
          <Text>CARTON №</Text>
          <Text>ACT.</Text>
        </FlexedView>

        {empty ? (
          state.map(el => (
            <ElementOfCartoon
              key={el.cartonNumber}
              cartonNumber={el.cartonNumber}
              count={el.count}
              navigation={navigation}
            />
          ))
        ) : (
          <View>
            <Text>Sorry, my state is empty</Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};
