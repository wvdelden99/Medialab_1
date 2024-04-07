import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { auth } from '../config/firebase';
import { updateEmail, updatePassword, updateProfile } from 'firebase/auth';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeftIcon, ArrowRightIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native'

export default function UpdateProfile() {
  const navigation = useNavigation();

  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Haal de huidige gebruikersgegevens op bij het laden van de component
  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      setDisplayName(user.displayName || '');
      setEmail(user.email || '');
    }
  }, []); // Zorg ervoor dat deze hook slechts eenmaal wordt uitgevoerd na de eerste render

  const handleUpdateProfile = async () => {
    try {
      const user = auth.currentUser;

      // Update de weergavenaam
      if (displayName) {
        await updateProfile(user, { displayName: displayName });
        console.log('Profiel bijgewerkt!');
      }

      // Update het e-mailadres
      if (email) {
        await updateEmail(user, email);
        console.log('E-mailadres bijgewerkt!');
      }

      // Update het wachtwoord
      if (password) {
        // Implementeer hier de code voor het bijwerken van het wachtwoord
      }

       // Navigeer terug naar de homepagina
       navigation.navigate('Home');

      // Clear input fields en error state
      setDisplayName('');
      setEmail('');
      setPassword('');
      setError('');
    } catch (error) {
      setError(error.message);
    }
  };


  return (
    <View className="flex-1 bg-primary">
      <SafeAreaView className="flex">

        {/* Backbutton */}
        <View className="flex-row justify-start">
            <TouchableOpacity 
                onPress={() => navigation.goBack()}
                className="bg-primary-dark p-2 rounded-tr-2xl rounded-bl-2xl ml-4">
                <ArrowLeftIcon size="20" color="white"></ArrowLeftIcon>
            </TouchableOpacity>
        </View>

        {/* Logo */}
        {/* <View className="flex-row justify-center mt-6">
         <Image source={require("../assets/images/icon_logo.png")}
                    style={{width:100, height: 75}} />
        </View> */}
      </SafeAreaView>

      <View className="flex-1 bg-primary px-8 pt-8"> 
        <Text className="text-white font-bold text-2xl text-center mb-12">
               Profiel bewerken
        </Text>
        {error && <Text className="text-red-500 mb-4">{error}</Text>}

        <View className="form space-y-2">
            
            {/* Username */}
            <Text className="text-white font-semibold text-base">Gebruikersnaam</Text>
            <TextInput 
                className="p-4 bg-gray-200 text-gray-700 rounded-md border border-gray-300 text-l font-medium mb-6"
                placeholder=''
                value={displayName}
                onChangeText={value => setDisplayName(value)}
            >
            </TextInput>

            {/* Email input */}
            <Text className="text-white font-semibold text-base">E-mailadres</Text>
            <TextInput 
                className="p-4 bg-gray-200 text-gray-700 rounded-md border border-gray-300 text-l font-medium mb-6"
                placeholder=''
                value={email}
                onChangeText={value => setEmail(value)}
            >
            </TextInput>

            {/* Wachtwoord input */}
            <TouchableOpacity className="p-4 bg-primary-light text-gray-700 rounded-md text-l font-medium mb-10 flex-row justify-between px-5"
                            onPress={() => navigation.navigate('UpdatePassword')}
            >
                <Text className="text-white font-semibold text-base">Wachtwoord veranderen</Text>
                <ArrowRightIcon size="20" color="white"/>
            </TouchableOpacity>

            <TouchableOpacity className="py-3 bg-secondary rounded-md mb-7"
                              onPress={handleUpdateProfile}
            >
                <Text className="text-xl font-bold text-center text-white">Opslaan</Text>
            </TouchableOpacity>
        </View>

      </View>
    </View>
  );
}
