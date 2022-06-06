import {View, Text, ScrollView, SafeAreaView} from 'react-native';
import React, {useContext} from 'react';
import {useSelector} from 'react-redux';
import ElementOfCartoon from './ElementOfCartoon';
import {StyledBlock} from '../SimpleComponents/Block';
import {StyledText} from '../SimpleComponents/Text';
import {StyledPressable} from '../SimpleComponents/Pressable';
import Chart from '../Chart/Chart';
import RandomScreen from '../RandomScreen/RandomScreen';
import {Context} from '../Language/context';
import {rus} from '../Language/rus';
import {eng} from '../Language/eng';

export const MainScreen = ({navigation}) => {
  const state = useSelector(state => state.cartoons);

  const [lang, setlang] = useContext(Context);

  const LoginScreenNav = () => {
    navigation.navigate('LoginPage');
  };

  const setLanguage = () => {
    if (lang.delete === 'Delete') {
      setlang(rus);
    } else if (lang.delete === 'Удалить') {
      setlang(eng);
    }
  };

  const isEmpty = state.length;

  return (
    <SafeAreaView>
      <ScrollView>
        <StyledBlock flexDirection="row" justifyContent="space-between">
          <Text>{lang.title.left}</Text>
          <Text>{lang.title.right}</Text>
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
            <Text>{lang.empt}</Text>
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
            {lang.login}
          </StyledText>
        </StyledPressable>
        <StyledPressable mt="20px" ml="20px" onPress={setLanguage}>
          <StyledText
            borderWidth="1px"
            width="100px"
            height="60px"
            textAlign="center"
            pt="15px"
            fz="18px">
            {lang.lang}
          </StyledText>
        </StyledPressable>
      </ScrollView>
    </SafeAreaView>
  );
};
