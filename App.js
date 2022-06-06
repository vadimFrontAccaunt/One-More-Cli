import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import {Context} from './src/Language/context';
import {eng} from './src/Language/eng';
import LoginScreen from './src/LoginScreen/LoginScreen';
import {MainScreen} from './src/MainScreen/MainScreen';
import {ThecondScreen} from './src/MainScreen/ThecondScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  const [lang, setLang] = useState(eng);
  return (
    <Provider store={store}>
      <Context.Provider value={[lang, setLang]}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="MainPage" component={MainScreen} />
            <Stack.Screen name="ThecondPage" component={ThecondScreen} />
            <Stack.Screen name="LoginPage" component={LoginScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Context.Provider>
    </Provider>
  );
};
export default App;
