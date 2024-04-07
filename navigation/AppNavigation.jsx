import React, { useState } from 'react';
import { Image, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import useAuth from '../hooks/useAuth';
import { colors } from './../assets/styles/Styles';
// Views
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
import UserPreference from '../views/UserPreference';
import UserPreferenceProfile from '../views/UserPreferenceProfile';
import { Search } from '../views/Search';
import Suprise from '../views/Suprise';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = createNativeStackNavigator();
const DiscoverStack = createNativeStackNavigator();

function HomeStackScreen() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="HomeScreen" component={Home} options={{ headerShown: false }}/>
            <HomeStack.Screen name="Article" component={Article} options={{ headerShown: false }} />
            <DiscoverStack.Screen name="Search" component={Search} options={{ headerShown: false }} />
            <DiscoverStack.Screen name="Suprise" component={Suprise} options={{ headerShown: false }} />
        </HomeStack.Navigator>
    );
}

function DiscoverStackScreen() {
    return (
        <DiscoverStack.Navigator>
            <DiscoverStack.Screen name="Discover" component={Discover} options={{ headerShown: false }}/>
            <DiscoverStack.Screen name="Article" component={Article} options={{ headerShown: false }} />
            <DiscoverStack.Screen name="Search" component={Search} options={{ headerShown: false }} />
        </DiscoverStack.Navigator>
    );
}

// NAVBAR
const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) => {
                    let navText;
                    let iconComponent;

                    if (route.name === 'Home') {
                        navText = 'Home';
                        iconComponent = focused ? require('./../assets/icons/icon_home_01.png') : require('./../assets/icons/icon_home_01.png');
                    } else if (route.name === 'Ontdek') {
                        navText = 'Ontdek';
                        iconComponent = focused ? require('./../assets/icons/icon_search_01.png') : require('./../assets/icons/icon_search_01.png');
                    } else if (route.name === 'Vrienden') {
                        navText = 'Vrienden';
                        iconComponent = focused ? require('./../assets/icons/icon_users_01.png') : require('./../assets/icons/icon_users_01.png');
                    } else if (route.name === 'Account') {
                        navText = 'Account';
                        iconComponent = focused ? require('./../assets/icons/icon_user_01.png') : require('./../assets/icons/icon_user_01.png');
                    }

                    const iconColor = focused ? colors.secondaryColor : "white";
                    return <View className="items-center">
                                <Image source={iconComponent} className="mb-2 w-5 h-5" style={{ tintColor: iconColor }} /> 
                                <Text className={`text-xs ${focused ? 'font-semibold text-secondary' : 'font-medium text-white'}`}>{navText}</Text>
                            </View>;
                },
                tabBarStyle: {
                    paddingVertical: 20,
                    borderTopWidth: 0,
                    height: 90,
                    backgroundColor: colors.primaryDarkColor,
                },
                tabBarLabel: '',
                headerShown: false,
            })}>
            <Tab.Screen name="Home" component={HomeStackScreen} />
            <Tab.Screen name="Ontdek" component={DiscoverStackScreen} />
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
                    <Stack.Screen name="UserPreferenceProfile" component={UserPreferenceProfile} options={{ headerShown: false }} />
                    <Stack.Screen name="UserPreference" component={UserPreference} options={{ headerShown: false }} />
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