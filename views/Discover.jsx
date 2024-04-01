import { FlatList, Text, View, SafeAreaView, StatusBar, ScrollView } from "react-native";
import React, { useEffect, useState } from 'react';
// Component
import { Header } from './../components/layout/Header';
import { PostCardCarousel } from "../components/layout/PostCardCarousel";
import { sampleData } from "../data";
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase';


export function Discover() {

    const [posts, setPosts] = useState([]);

    const fetchPosts = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "posts"));
            const newData = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
            setPosts(newData);
        } catch (error) {
            console.error("Error fetching posts:", error);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    const filterPostsByCategory = (category) => {
        return posts.filter(post => post.tags.includes(category));
    };

    const maxItems = 5;

    return (
        <SafeAreaView className="flex-[1] bg-primary-dark">
            <StatusBar barStyle="light-content" />
            <Header />

            <ScrollView className="flex-[1] bg-primary">
                <View className="mx-4">
                    <View className="mt-4">
                        <Text className="text-lg font-bold text-white">Ontdek in verschillende categorieën</Text>
                    </View>

                    <View className="my-2">
                        <Text className="my-4 text-md font-semibold text-white">Politiek</Text>

                        <FlatList
                            data={filterPostsByCategory('Politiek').slice(0, maxItems)}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={item => item.id.toString()}
                            renderItem={({ item }) => <PostCardCarousel imageURLs={item.imageURLs} title={item.title} />} />
                    </View>

                    <View className="my-2">
                        <Text className="my-4 text-md font-semibold text-white">Cultuur</Text>

                        <FlatList
                            data={filterPostsByCategory('Cultuur').slice(0, maxItems)}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={item => item.id.toString()}
                            renderItem={({item}) => <PostCardCarousel uri={item.uri} />}/>
                    </View>

                    <View className="my-2">
                        <Text className="my-4 text-md font-semibold text-white">Economie</Text>

                        <FlatList
                            data={filterPostsByCategory('Economie').slice(0, maxItems)}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={item => item.id.toString()}
                            renderItem={({item}) => <PostCardCarousel uri={item.uri} />}/>
                    </View>
                </View>
            </ScrollView>
            
        </SafeAreaView>
    );
}