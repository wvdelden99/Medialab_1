import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Welcome from '../views/Welcome';
import Register from '../views/Register'; 
import Login from '../views/Login'; 
import { Home } from '../views/Home';
import { Discover } from '../views/Discover';
import { Friends } from '../views/Friends';
import  Account from '../views/Account';
import UpdateProfile from '../views/UpdateProfile'
import UpdatePassword from '../views/UpdatePassword'
import { Article } from '../views/Article'
import useAuth from '../hooks/useAuth';
import { HomeIcon, MagnifyingGlassIcon, InboxIcon, UserIcon } from 'react-native-heroicons/solid';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="HomeScreen" component={Home} options={{ headerShown: false }}/>
      <HomeStack.Screen name="Article" component={Article} options={{ headerShown: false }} />
    </HomeStack.Navigator>
  );
}

// NAVBAR
const Tabs = () => {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconComponent;

        if (route.name === 'Home') {
          iconComponent = focused ? <HomeIcon size={size} color={color} /> : <HomeIcon size={size} color="gray" />;
        } else if (route.name === 'Ontdek') {
          iconComponent = focused ? <MagnifyingGlassIcon size={size} color={color} /> : <MagnifyingGlassIcon size={size} color="gray" />;
        } else if (route.name === 'Vrienden') {
          iconComponent = focused ? <InboxIcon size={size} color={color} /> : <InboxIcon size={size} color="gray" />;
        } else if (route.name === 'Account') {
          iconComponent = focused ? <UserIcon size={size} color={color} /> : <UserIcon size={size} color="gray" />;
        }

        return iconComponent;
      },
      tabBarStyle: {
        backgroundColor: '#051326',
        borderTopWidth: 0,
        height: 90
      },
      tabBarLabelStyle: {
        fontSize: 12,
        marginBottom: 5,
        color: 'white'
      },
      headerShown: false,
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
    })}
  >
    <Tab.Screen name="Home" component={HomeStackScreen} />
    <Tab.Screen name="Ontdek" component={Discover} />
    <Tab.Screen name="Vrienden" component={Friends} />
    <Tab.Screen name="Account" component={Account} />
  </Tab.Navigator>
  );
};

const NavigationStack = () => {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user ? (
          <>
            <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
            <Stack.Screen name="UpdateProfile" component={UpdateProfile} options={{ headerShown: false }} />
            <Stack.Screen name="UpdatePassword" component={UpdatePassword} options={{ headerShown: false }} />
          </>
        ) : (
          <>
            <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
            <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationStack;

