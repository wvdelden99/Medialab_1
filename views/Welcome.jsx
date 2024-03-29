import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function Welcome() {
    const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1 bg-primary">
        <View className="flex-1 flex justify-around my-4">

            <View className="flex-row justify-center -mt-36 -mb-36">
                <Image source={require("../assets/images/welcome.png")}
                    style={{width:430, height: 520}} />
            </View>

            {/* Titel */}
            <Text className="text-white font-bold text-4xl text-center -mt-24 drop-shadow-md -mb-2">
                NPO Stories
            </Text>

            {/* Beschrijving */}
            <Text className="text-white font-light text-base text-center mx-12 -mt-36 drop-shadow-md	">
                Bekijk je nieuws in vorm van korte illustraties, snel en overal bereikbaar.
            </Text>

            <View className="flex-row justify-center -mt-32 -mb-32">
                <Image source={require("../assets/images/icon_logo.png")}
                    style={{width:70, height: 52}} />
            </View>

            {/* Buttons */}
            <View className="space-y-4">
                {/* Aanmelden button */}
                <TouchableOpacity onPress={() => navigation.navigate('Register')}
                    className="py-3 bg-secondary mx-16 rounded-xl">
                        <Text 
                            className="text-xl font-bold text-center text-gray-700 text-white"
                        >
                            Gratis aanmelden
                        </Text>
                </TouchableOpacity>

                {/* Inloggen button */}
                <TouchableOpacity onPress={() => navigation.navigate('Login')}
                    className="py-3 bg-primary border border-lightgray mx-16 rounded-xl">
                        <Text 
                            className="text-xl font-bold text-center text-gray-700 text-white"
                        >
                            Inloggen
                        </Text>
                </TouchableOpacity>
            </View>
        </View>
    </SafeAreaView>
  )
}