import React from 'react';
import {View, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Welcome from './pages/Login/Welcome/Welcome';
import Register from './pages/Login/Register/Register';
import Verification from './pages/Login/Verification/Verification';
import Information from './pages/Login/Information/Information';
import Pin from './pages/Login/Pin/Pin';
import Home from './pages/Home/Home';
import CardCenter from './pages/CardCenter/CardCenter';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="WelcomeScreen" component={Welcome} />
        <Stack.Screen name="RegisterScreen" component={Register} />
        <Stack.Screen name="VerificationScreen" component={Verification} />
        <Stack.Screen name="InformationScreen" component={Information} />
        <Stack.Screen name="PinScreen" component={Pin} />
        <Stack.Screen name="HomeScreen" component={Home} />
        <Stack.Screen name="CardCenterScreen" component={CardCenter} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
