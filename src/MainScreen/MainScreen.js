import {View, Text, ScrollView, SafeAreaView} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import ElementOfCartoon from './ElementOfCartoon';
import {StyledBlock} from '../SimpleComponents/Block';

export const MainScreen = ({navigation}) => {
  const state = useSelector(state => state.cartoons);

  const isEmpty = state.length;

  return (
    <SafeAreaView>
      <ScrollView>
        <StyledBlock
          display="flex"
          flexDirection="row"
          justifyContent="space-between">
          <Text>CARTON №</Text>
          <Text>ACT.</Text>
        </StyledBlock>

        {isEmpty ? (
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
