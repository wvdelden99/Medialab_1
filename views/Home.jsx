import React, { useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity, View, SafeAreaView, StatusBar, ScrollView } from "react-native";
import { useFocusEffect } from '@react-navigation/native'; // Importeer useFocusEffect uit react-navigation/native
import { collection, getDocs, where, query } from 'firebase/firestore';
import { db } from '../config/firebase';
import { Header } from "../components/layout/Header";
import { PostCard } from './../components/PostCard';
import { useNavigation } from '@react-navigation/native';
import {SurpriseButton} from "../components/buttons/SurpriseButton";

export function Home() {
    const navigation = useNavigation();
    const [posts, setPosts] = useState([]);
    const [userPreferences, setUserPreferences] = useState([]);

    useFocusEffect(
        React.useCallback(() => {
            // Plaats hier de code die je wilt uitvoeren wanneer het scherm de focus krijgt
            const fetchUserPreferences = async () => {
                try {
                    const userPreferencesSnapshot = await getDocs(collection(db, "userPreferences"));
                    const userPreferencesData = userPreferencesSnapshot.docs.map(doc => doc.data());
                    console.log("User preferences:", userPreferencesData);
                    setUserPreferences(userPreferencesData);
                    fetchAndFilterPosts(userPreferencesData); // Roep fetchAndFilterPosts direct aan na het instellen van de voorkeuren
                } catch (error) {
                    console.error("Error fetching user preferences:", error);
                }
            };
        
            const fetchAndFilterPosts = async (userPreferencesData) => {
                try {
                    const selectedTags = userPreferencesData[0]?.selectedTags || [];
        
                    if (selectedTags.length === 0) {
                        // Als er geen tags zijn geselecteerd, haal alle berichten op
                        const allPostsSnapshot = await getDocs(collection(db, "posts"));
                        const allPostsData = allPostsSnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
                        setPosts(allPostsData);
                        return;
                    }
        
                    // Voer de query alleen uit als er tags zijn geselecteerd
                    const q = query(collection(db, "posts"), where("tags", "array-contains-any", selectedTags));
                    const querySnapshot = await getDocs(q);
        
                    const filteredPosts = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
                    console.log("Filtered posts:", filteredPosts);
        
                    setPosts(filteredPosts);
                } catch (error) {
                    console.error("Error fetching and filtering posts:", error);
                }
            };
        
            fetchUserPreferences();

            return () => {
                // Optionele opruimacties
            };
        }, [])
    );

    return (
        <SafeAreaView className="flex-[1] bg-primary-dark">
            <StatusBar barStyle="light-content" />
            <Header />

            <ScrollView className="flex-[1] bg-primary">
            <View className="mx-4">
                <View className="flex-row justify-between py-4">
                    <TouchableOpacity className="flex-row items-center bg-primary-light rounded-full py-2 px-4">
                        <Text className="font-semibold text-white">Voor Jou</Text>
                        <Image className="w-4 h-4" style={{ tintColor: "white"}}
                                source={require('./../assets/icons/icon_arrow_01.png')} />
                    </TouchableOpacity>
              

                    <View className="flex-row items-center gap-2">
                        {/* <SurpriseButton/> */}
                        <TouchableOpacity className="flex-row items-center rounded-lg py-2 px-3 bg-secondary"
                                            onPress={() => navigation.navigate('Suprise')} >
                            <Image className="rotate-[45deg] mr-2 w-4 h-4" style={{ tintColor: "white"}}
                                    source={require('./../assets/icons/icon_dice_01.png')} />
                            <Text className="text-sm font-semibold text-white">Verras me</Text>
                        </TouchableOpacity>

                        <TouchableOpacity className="mr-2" onPress={() => navigation.navigate('Search')}>
                            <Image className="w-6 h-6" style={{ tintColor: "white"}}
                                    source={require('./../assets/icons/icon_search_01.png')} />
                        </TouchableOpacity>
                    </View>
                </View>

               {/* Map over de gefilterde berichten en render een PostCard component voor elk bericht */}
                    {posts.map(post => (
                        <PostCard key={post.id} post={post} />
                    ))}
            </View>
            </ScrollView>
            
        </SafeAreaView>
    );
}
