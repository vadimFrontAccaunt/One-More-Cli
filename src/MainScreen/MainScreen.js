import {View, Text, ScrollView, SafeAreaView} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import ElementOfCartoon from './ElementOfCartoon';
import {StyledBlock} from '../SimpleComponents/Block';
import {StyledText} from '../SimpleComponents/Text';
import {StyledPressable} from '../SimpleComponents/Pressable';
import Chart from '../Chart/Chart';
import RandomScreen from '../RandomScreen/RandomScreen';
import {MainScreenHeader} from './MainScreenHeader';

export const MainScreen = ({navigation}) => {
  const state = useSelector(state => state.cartoons);

  const handleLoginNavigation = () => {
    navigation.navigate('LoginPage');
  };

  const isEmpty = state.length;

  return (
    <SafeAreaView>
      <ScrollView>
        <MainScreenHeader />
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
        <StyledPressable mt="20px" ml="20px" onPress={handleLoginNavigation}>
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
