import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { auth } from '../config/firebase';
import { reauthenticateWithCredential, updatePassword, EmailAuthProvider } from 'firebase/auth';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native'

export default function UpdatePassword() {
    const navigation = useNavigation();

    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
  
    // Functie om het wachtwoord van de gebruiker bij te werken
    const handleUpdatePassword = async () => {
      try {
        if (newPassword.length < 6) {
          setError('Het wachtwoord moet minimaal 6 tekens lang zijn');
          return;
        }

        if (newPassword !== confirmPassword) {
          setError('De nieuwe wachtwoorden komen niet overeen');
          return;
        }
        
        const user = auth.currentUser;

        // Verifieer eerst het huidige wachtwoord
        const credential = EmailAuthProvider.credential(user.email, currentPassword);
        await reauthenticateWithCredential(user, credential);

        // Update het wachtwoord
        await updatePassword(user, newPassword);
        console.log('Wachtwoord succesvol bijgewerkt');
        setSuccessMessage('Wachtwoord succesvol bijgewerkt');

      } catch (error) {
        console.error('Fout bij het bijwerken van het wachtwoord:', error.message);
        setError('Er is een fout opgetreden bij het bijwerken van het wachtwoord');
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

        </SafeAreaView>

        <View className="flex-1 bg-primary px-8 pt-8"> 
            <Text className="text-white font-bold text-2xl text-center mb-12">
                Wachtwoord bewerken
            </Text>
            {error && <Text className="text-red-500 mb-4">{error}</Text>}
            {successMessage && <Text className="text-green-500 mb-4">{successMessage}</Text>}

            <View className="form space-y-2">
                
                {/* Huidige wachtwoord */}
                <Text className="text-white font-semibold text-base">Huidig wachtwoord</Text>
                <TextInput 
                    className="p-4 bg-gray-200 text-gray-700 rounded-md border border-gray-300 text-l font-medium mb-6"
                    value={currentPassword}
                    onChangeText={setCurrentPassword}
                    secureTextEntry
                />

                {/* Nieuw wachtwoord */}
                <Text className="text-white font-semibold text-base">Nieuw wachtwoord</Text>
                <TextInput 
                    className="p-4 bg-gray-200 text-gray-700 rounded-md border border-gray-300 text-l font-medium mb-6"
                    value={newPassword}
                    onChangeText={setNewPassword}
                    secureTextEntry
                />

                {/* Herhaal nieuw wachtwoord */}
                <Text className="text-white font-semibold text-base">Herhaal nieuw wachtwoord</Text>
                <TextInput 
                    className="p-4 bg-gray-200 text-gray-700 rounded-md border border-gray-300 text-l font-medium mb-6"
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    secureTextEntry
                />
            </View>

            <TouchableOpacity className="py-3 bg-secondary rounded-md mb-7"
                              onPress={handleUpdatePassword}
            >
                <Text className="text-xl font-bold text-center text-white">Opslaan</Text>
            </TouchableOpacity>
        </View>

    </View>
    );
}

