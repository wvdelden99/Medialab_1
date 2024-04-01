import { View, Text, TouchableOpacity, Image, Dimensions, StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
import { auth } from '../config/firebase'
import { signOut } from 'firebase/auth';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native'
import { ArrowRightEndOnRectangleIcon, BookmarkIcon, HeartIcon } from 'react-native-heroicons/solid';
import { Header } from '../components/layout/Header';

export default function Account() {
  const navigation = useNavigation();
  const [displayName, setDisplayName] = useState('Saved');
  const [selectedContent, setSelectedContent] = useState('Saved');

  const images = [
    require('../assets/images/image1.png'),
    require('../assets/images/image2.png'),
    require('../assets/images/image3.png'),
    require('../assets/images/image4.png'),
  ];


  useEffect(() => {
    // Haal de displaynaam van de huidige gebruiker op en stel deze in
    if (auth.currentUser) {
      setDisplayName(auth.currentUser.displayName || 'Gebruiker');
    }
  }, [auth.currentUser.displayName]); // voeg displayName toe aan de afhankelijkheidslijst

  const handleLogout = async () => {
    await signOut(auth);
  }

  const handleButtonClick = (content) => {
    setSelectedContent(content);
  };

  //Images
  const chunkArray = (array, size) => {
    return array.reduce((chunks, element, index) => {
      if (index % size === 0) {
        chunks.push([element]);
      } else {
        chunks[chunks.length - 1].push(element);
      }
      return chunks;
    }, []);
  };

  // Chunk images into rows of three
  const imageRows = chunkArray(images, 3);

  // Get screen width
  const screenWidth = Dimensions.get('window').width;

  // Bereken de breedte van elke knop (50% van de schermbreedte voor twee knoppen)
  const buttonWidth = screenWidth * 0.5;

  return (
    <SafeAreaView className="flex-[1] bg-primary-dark">
    <View className="flex-1 bg-primary">

<StatusBar barStyle="light-content" />
            <Header />

      {/* Profiel bewerken */}
      <View className="flex-1 bg-primary">
        <View className="form space-y-2 flex-row px-12 pt-8">

          {/* DisplayName */}
          <Text className="text-white font-semibold text-xl grow pt-3">{displayName}</Text>
          {/* Loguit */}
          <TouchableOpacity onPress={handleLogout} className="flex-row">
            <Text className="text-white font-semibold text-md pt-1 text-secondary grow">Log uit</Text>
            <ArrowRightEndOnRectangleIcon size="25" color="#FD7500" />
          </TouchableOpacity>

        </View>

        {/* Knop profiel bewerken */}
        <View className="px-4">
          <TouchableOpacity className="py-3 bg-primary-light rounded-md mx-8 mt-10"
                            onPress={() => navigation.navigate('UpdateProfile')}
          >
            <Text className="text-md font-bold text-white px-5">Profiel bewerken</Text>
          </TouchableOpacity>
        </View>
        <View className="px-4">
          <TouchableOpacity className="py-3 bg-primary-light rounded-md mx-8 mb-16 mt-3"
                            onPress={() => navigation.navigate('UserPreference')}
          >
            <Text className="text-md font-bold text-white px-5">Voorkeuren wijzigen</Text>
          </TouchableOpacity>
        </View>

        {/* Opgeslagen & geliked */}
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} className="bg-primary-dark">

          {/* Knoppen */}
          <View style={{ flexDirection: 'row', marginBottom: 2, width: screenWidth }}>
            {/* KNOP opgeslagen */}
            <TouchableOpacity onPress={() => handleButtonClick('Saved')} 
                              style={{ marginRight:0, backgroundColor: selectedContent === 'Saved' ? '#FD7500' : '#334767', width: buttonWidth }}
                              className="flex-row py-3 justify-center">
                <BookmarkIcon size="17" color="white"></BookmarkIcon>
                <Text className="text-white text-md font-bold">  Opgeslagen</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => handleButtonClick('Loved')} 
                              style={{ backgroundColor: selectedContent === 'Loved' ? '#FD7500' : '#334767', width: buttonWidth }}
                              className="flex-row py-3  justify-center">
              <HeartIcon size="17" color="white"></HeartIcon>
                <Text className="text-white text-md font-bold">  Geliked</Text>
            </TouchableOpacity>
          </View>

          {/* View voor de content */}
          <View className="min-h-80">
            {selectedContent === "Saved" && (
              <View className="flex-1">
                {/* Render image rows */}
                {imageRows.map((row, rowIndex) => (
                  <View key={rowIndex} className="flex flex-row">
                    {/* Render images in the current row */}
                    {row.map((image, imageIndex) => (
                      <Image key={imageIndex} source={image} style={{ width: screenWidth / 3, height: screenWidth / 2.5, margin: 2 }} resizeMode="cover" />
                    ))}
                  </View>
                ))}
              </View>
            )}
            {selectedContent === "Loved" && (
              <View className="flex-1">
                {/* Render image rows */}
                {imageRows.map((row, rowIndex) => (
                  <View key={rowIndex} className="flex flex-row">
                    {/* Render images in the current row */}
                    {row.map((image, imageIndex) => (
                      <Image key={imageIndex} source={image} style={{ width: screenWidth / 3, height: screenWidth / 3, margin: 2 }} resizeMode="cover" />
                    ))}
                  </View>
                ))}
              </View>
            )}
          </View>
        </View>
      </View>
    </View>
    </SafeAreaView>
  )
}