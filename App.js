import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import LoginScreen from './src/LoginScreen/LoginScreen';
import {MainScreen} from './src/MainScreen/MainScreen';
import {ThecondScreen} from './src/MainScreen/ThecondScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="MainPage" component={MainScreen} />
          <Stack.Screen name="ThecondPage" component={ThecondScreen} />
          <Stack.Screen name="LoginPage" component={LoginScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
export default App;
