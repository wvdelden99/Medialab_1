import React, { useState } from 'react';
import { SafeAreaView, ScrollView} from 'react-native';
// Components
import { Header } from '../layout/Header';
import { Navbar } from './Navbar';
// Views
import { Home } from './../../views/Home';
import { Discover } from './../../views/Discover';
import { Friends } from './../../views/Friends';
import { Account } from './../../views/Account';

import { StatusBar } from 'expo-status-bar';


export default function Navigation() {
    const [currentScreen, setCurrentScreen] = useState('Home');

    const navigateTo = (screenName) => {
        setCurrentScreen(screenName);
    };
  
    const renderScreen = () => {
        switch (currentScreen) {
            case 'Home':
                return <Home />;
            case 'Discover':
                return <Discover />;
            case 'Friends':
                return <Friends />;
            case 'Account':
                return <Account />;
            default:
                return <Home />;
        }
    };

    return (
        <SafeAreaView className="flex-[1] bg-primary-dark">
            <StatusBar barStyle="light-content" />
            <Header />

            <ScrollView className="flex-[1] bg-primary">
                {renderScreen()}
            </ScrollView>

            <Navbar currentScreen={currentScreen} navigateTo={navigateTo} />
        </SafeAreaView>
    );
}
