import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, SafeAreaView, StatusBar, TouchableOpacity, Image } from 'react-native';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';

export function Search({ navigation }) {
    const [allPosts, setAllPosts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "posts"));
                const newData = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
                setAllPosts(newData);
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        };

        fetchPosts();
    }, []);

    const handleSearch = () => {
        // Filter de berichten op basis van de ingevoerde zoekterm
        const filteredResults = allPosts.filter(post => post.title.toLowerCase().includes(searchTerm.toLowerCase()));
        setSearchResults(filteredResults);
    };
    return (
        <View className="flex-1 bg-primary">
            <SafeAreaView className="flex">
                {/* Backbutton */}
                <View className="flex-row justify-start">
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        className="bg-primary-dark p-2 rounded-tr-2xl rounded-bl-2xl ml-4">
                        <ArrowLeftIcon size="20" color="white" />
                    </TouchableOpacity>
                </View>

                {/* Logo */}
                <View className="flex-row justify-center mt-6">
                    <Image source={require("../assets/images/icon_logo.png")} style={{ width: 100, height: 75 }} />
                </View>
            </SafeAreaView>

            <View className="flex-1 bg-primary px-8 pt-8">
                <Text className="text-white font-bold text-2xl text-center mb-12">
                    Zoeken naar artikelen
                </Text>

                <View className="form space-y-2">
                    <Text className="text-white font-semibold text-xl">Zoekterm</Text>
                    <TextInput
                        className="p-4 bg-gray-200 text-gray-700 rounded-md border border-gray-300 text-l font-medium mb-6"
                        value={searchTerm}
                        onChangeText={setSearchTerm}
                        onSubmitEditing={handleSearch}
                        placeholder='Zoekterm...'
                    />

                    <FlatList
                        data={searchResults}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                style={{ padding: 20, borderBottomWidth: 1, borderBottomColor: '#ccc', paddingTop: -20 }}
                                className="flex-row"
                                onPress={() => {
                                    // Navigeer naar artikelweergave voor dit specifieke item
                                    navigation.navigate('Article', { post: item });
                                }}
                            >
                                {/* <Image
                                    style={{ width: 50, height: 50, marginBottom: 10 }} // Stel hier de gewenste grootte in voor de afbeelding
                                    source={{ uri: item.imageURLs && item.imageURLs.length > 0 ? item.imageURLs[0] : 'standaard_uri' }}
                                /> */}
                                <Text className="text-white text-lg font-bold">{item.title}</Text>
                                {/* Toon andere relevante informatie over het artikel */}
                            </TouchableOpacity>
                        )}
                        keyExtractor={item => item.id}
                    />
                </View>
            </View>
        </View>
    );
}

