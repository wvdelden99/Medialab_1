import React, { useState } from 'react'; // Voeg useState toe aan de import van React

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from '../views/Welcome';
import Register from '../views/Register'; 
import Login from '../views/Login'; 
import HomeScreen from '../views/HomeScreen'; 
import UpdateProfile from '../views/UpdateProfile'
import UpdatePassword from '../views/UpdatePassword'
import useAuth from '../hooks/useAuth';

const Stack = createNativeStackNavigator();

const NavigationStack = () => {
  const {user} = useAuth();

  if(user){
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
          <Stack.Screen name="UpdateProfile" component={UpdateProfile} options={{headerShown: false}}/>
          <Stack.Screen name="UpdatePassword" component={UpdatePassword} options={{headerShown: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen name="Welcome" component={Welcome} options={{headerShown: false}}/>
          <Stack.Screen name="Register" component={Register} options={{headerShown: false}}/>
          <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
};

export default NavigationStack;
