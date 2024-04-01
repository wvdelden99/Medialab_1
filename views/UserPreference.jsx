import React, { useState, useEffect } from "react";
import { TouchableOpacity, View, Text, SafeAreaView, StatusBar } from "react-native";
import { auth, db } from "../config/firebase";
import updateUserPreferences from "./updateUserPreference";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { useNavigation } from '@react-navigation/native';

const UserPreference = () => {
  const navigation = useNavigation();
  const [userId, setUserId] = useState(null);
  const [selectedTags, setSelectedTags] = useState([]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserId(user.uid);
        getUserPreferences(user.uid); // Haal de gebruikersvoorkeuren op bij het inladen van de component
      } else {
        setUserId(null);
      }
    });
    return () => unsubscribe();
  }, []);

  const getUserPreferences = async (userId) => {
    try {
      const userPrefRef = doc(db, "userPreferences", userId);
      const userPrefDoc = await getDoc(userPrefRef); // Gebruik getDoc in plaats van userPrefRef.get()
      if (userPrefDoc.exists()) {
        const userData = userPrefDoc.data();
        setSelectedTags(userData.selectedTags || []);
      }
    } catch (error) {
      console.error("Error getting user preferences:", error);
    }
  };
  
  const toggleTag = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((selectedTag) => selectedTag !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const savePreferences = () => {
    updateUserPreferences(userId, selectedTags);

    navigation.navigate('Tabs');
  };

  return (
    <SafeAreaView className="flex-[1] bg-primary">
            {/* <StatusBar barStyle="light-content" />
            <Header /> */}

        {/* Backbutton */}
          <View className="flex-row justify-start">
              <TouchableOpacity 
                  onPress={() => navigation.goBack()}
                  className="bg-primary-dark p-2 rounded-tr-2xl rounded-bl-2xl ml-4">
                  <ArrowLeftIcon size="20" color="white"></ArrowLeftIcon>
              </TouchableOpacity>
          </View>

    <View className="flex-1 bg-primary px-8 pt-8"> 
      <Text className="text-2xl text-white font-bold mb-3">Voorkeuren</Text>
      <Text className="text-lg text-white mb-12">Wat zijn je voorkeuren voor thema's?</Text>

      <View className="flex flex-row flex-wrap mb-6">
        {/* Politiek */}
        <TouchableOpacity
          className={`bg-primary-light p-3 rounded-lg mr-4 mb-4 ${selectedTags.includes(
            "Politiek"
          ) && "bg-secondary"}`}
          onPress={() => toggleTag("Politiek")}
        >
          <Text className="text-base text-center font-bold text-white">{`Politiek`}</Text>
        </TouchableOpacity>

        {/* Sport */}
        <TouchableOpacity
          className={`bg-primary-light p-3 rounded-lg mr-4 mb-4 ${selectedTags.includes(
            "Sport"
          ) && "bg-secondary"}`}
          onPress={() => toggleTag("Sport")}
        >
          <Text className="text-base text-center font-bold text-white">{`Sport`}</Text>
        </TouchableOpacity>
        
         {/* Economie */}
         <TouchableOpacity
          className={`bg-primary-light p-3 rounded-lg mr-4 mb-4 ${selectedTags.includes(
            "Economie"
          ) && "bg-secondary"}`}
          onPress={() => toggleTag("Economie")}
        >
          <Text className="text-base text-center font-bold text-white">{`Economie`}</Text>
        </TouchableOpacity>

        {/* Kunst & Cultuur */}
        <TouchableOpacity
          className={`bg-primary-light p-3 rounded-lg mr-4 mb-2 ${selectedTags.includes(
            "Kunst & Cultuur"
          ) && "bg-secondary"}`}
          onPress={() => toggleTag("Kunst & Cultuur")}
        >
          <Text className="text-base text-center font-bold text-white">{`Kunst & Cultuur`}</Text>
        </TouchableOpacity>

        {/* Tech */}
        <TouchableOpacity
          className={`bg-primary-light p-3 rounded-lg mr-4 mb-2 ${selectedTags.includes(
            "Tech"
          ) && "bg-secondary"}`}
          onPress={() => toggleTag("Tech")}
        >
          <Text className="text-base text-center font-bold text-white">{`Tech`}</Text>
        </TouchableOpacity>

        {/* Opmerkelijk */}
        <TouchableOpacity
          className={`bg-primary-light p-3 rounded-lg mr-4 mb-2 ${selectedTags.includes(
            "Opmerkelijk"
          ) && "bg-secondary"}`}
          onPress={() => toggleTag("Opmerkelijk")}
        >
          <Text className="text-base text-center font-bold text-white">{`Opmerkelijk`}</Text>
        </TouchableOpacity>

       
        {/* <TouchableOpacity
          className={`bg-primary-light p-2 rounded-lg mr-2 mb-2 ${selectedTags.includes(
            "Sport"
          ) && "bg-blue-500"}`}
          onPress={() => toggleTag("Binnenland")}
        >
          <Text className="text-base text-center font-bold text-white">{`Binnenland`}</Text>
        </TouchableOpacity>

      
         <TouchableOpacity
          className={`bg-primary-light p-2 rounded-lg mr-2 mb-2 ${selectedTags.includes(
            "Sport"
          ) && "bg-blue-500"}`}
          onPress={() => toggleTag("Buitenland")}
        >
          <Text className="text-base text-center font-bold text-white">{`Buitenland`}</Text>
        </TouchableOpacity> */}
      </View>

      <TouchableOpacity
        className="py-3 bg-secondary rounded-md mt-7 mb-7"
        onPress={savePreferences}
      >
        <Text className="text-xl font-bold text-center text-white">Voorkeuren Opslaan</Text>
      </TouchableOpacity>
    </View>
    </SafeAreaView>
  );
};

export default UserPreference;

