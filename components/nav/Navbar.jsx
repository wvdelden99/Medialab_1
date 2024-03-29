import React from 'react';
import { Image, Text, TouchableOpacity, View } from "react-native";
import { colors } from '../../assets/styles/Styles';

export function Navbar({ currentScreen, navigateTo }) {
    return (
        <View className="absolute flex-row justify-evenly pt-5 pb-10 bottom-0 left-0 right-0 bg-primary-dark">
            <TouchableOpacity className="items-center" onPress={() => navigateTo('Home')}>
                <Image className="mb-2 w-5 h-5" style={{ tintColor: currentScreen === 'Home' ? colors.secondaryColor : 'white'}}
                        source={require('./../../assets/icons/icon_home_01.png')} />
                <Text className={`text-xs ${currentScreen === 'Home' ? 'font-semibold text-secondary' : 'font-medium text-white'}`}>Start</Text>
            </TouchableOpacity>
            <TouchableOpacity className="items-center" onPress={() => navigateTo('Discover')}>
                <Image className="mb-2 w-5 h-5" style={{ tintColor: currentScreen === 'Discover' ? colors.secondaryColor : 'white'}}
                        source={require('./../../assets/icons/icon_search_01.png')} />
                <Text className={`text-xs ${currentScreen === 'Discover' ? 'font-semibold text-secondary' : 'font-medium text-white'}`}>Ontdek</Text>
            </TouchableOpacity>
            <TouchableOpacity className="items-center" onPress={() => navigateTo('Friends')}>
                <Image className="mb-2 w-5 h-5"  style={{ tintColor: currentScreen === 'Friends' ? colors.secondaryColor : 'white'}}
                        source={require('./../../assets/icons/icon_users_01.png')} />
                <Text className={`text-xs ${currentScreen === 'Friends' ? 'font-semibold text-secondary' : 'font-medium text-white'}`}>Vrienden</Text>
            </TouchableOpacity>
            <TouchableOpacity className="items-center" onPress={() => navigateTo('Account')}>
                <Image className="mb-2 w-5 h-5"  style={{ tintColor: currentScreen === 'Account' ? colors.secondaryColor : 'white'}}
                        source={require('./../../assets/icons/icon_user_01.png')} />
                <Text className={`text-xs ${currentScreen === 'Account' ? 'font-semibold text-secondary' : 'font-medium text-white'}`}>Account</Text>
            </TouchableOpacity>
        </View>
    );
}