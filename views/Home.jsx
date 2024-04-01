import React, { useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity, View, SafeAreaView, StatusBar, ScrollView } from "react-native";
// Components
import { PostCard } from './../components/PostCard';
import { Header } from "../components/layout/Header";

import { collection, getDocs } from 'firebase/firestore';

import { db } from '../config/firebase';

export function Home() {

    const [posts, setPosts] = useState([]);
 
    const fetchPost = async () => {
       
        await getDocs(collection(db, "posts"))
            .then((querySnapshot)=>{               
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id:doc.id }));
                setPosts(newData);                
                console.log(posts, newData);
            })
    }
   
    useEffect(()=>{
        fetchPost();
    }, [])

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

                    <TouchableOpacity className="mr-2">
                        <Image className="w-6 h-6" style={{ tintColor: "white"}}
                                source={require('./../assets/icons/icon_search_01.png')} />
                    </TouchableOpacity>
                </View>

               {/* Map over de posts en render een PostCard component voor elk post */}
                    {posts.map(post => (
                        <PostCard key={post.id} post={post} />
                    ))}
            </View>
            </ScrollView>
            
        </SafeAreaView>
    );
}