import {View, Text, ScrollView, SafeAreaView} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import ElementOfCartoon from './ElementOfCartoon';
import {StyledBlock} from '../SimpleComponents/Block';
import {StyledText} from '../SimpleComponents/Text';
import {StyledPressable} from '../SimpleComponents/Pressable';
import Chart from '../Chart/Chart';
import RandomScreen from '../RandomScreen/RandomScreen';

export const MainScreen = ({navigation}) => {
  const state = useSelector(state => state.cartoons);

  const LoginScreenNav = () => {
    navigation.navigate('LoginPage');
  };

  const isEmpty = state.length;

  return (
    <SafeAreaView>
      <ScrollView>
        <StyledBlock flexDirection="row" justifyContent="space-between">
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
        <Chart />
        <RandomScreen />
        <StyledPressable mt="20px" ml="20px" onPress={LoginScreenNav}>
          <StyledText
            borderWidth="1px"
            width="100px"
            height="60px"
            textAlign="center"
            pt="15px"
            fz="18px">
            Login
          </StyledText>
        </StyledPressable>
      </ScrollView>
    </SafeAreaView>
  );
};
