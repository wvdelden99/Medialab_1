import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, StatusBar, ScrollView, useState} from 'react-native';
import Swiper from 'react-native-swiper';
import {colors} from "../assets/styles/Styles";
import {MoreButton} from "../components/buttons/MoreButton";
import {FollowButton} from "../components/buttons/FollowButton";
import { Header } from './../components/layout/Header';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native'

import { useRoute } from '@react-navigation/native';

export function Article(){

    const navigation = useNavigation();
    const route = useRoute();
    const { post } = route.params;

    return (
        <>

    <SafeAreaView className="flex-[1] bg-primary-dark">
            <StatusBar barStyle="light-content" />
            <Header />

            <View className="flex-row justify-start absolute mt-16">
              <TouchableOpacity 
                  onPress={() => navigation.goBack()}
                  className="bg-primary p-2 rounded-tr-2xl rounded-bl-2xl ml-4">
                  <ArrowLeftIcon size="20" color="white"></ArrowLeftIcon>
              </TouchableOpacity>
            </View>

            <ScrollView className="flex-[1] bg-primary">
            <Swiper className="h-[480px]" 
                    showsButtons={false}  
                    paginationStyle={{ alignItems: "start", paddingVertical: 6, backgroundColor: colors.primaryLightColor, marginBottom: -25, }}
                    dotStyle={{ borderRadius: 100, width: 10, height: 10, backgroundColor: colors.primaryDarkColor }}
                    activeDotStyle={{ borderRadius: 100, width: 10, height: 10, backgroundColor: colors.secondaryColor }}>
                    {post.imageURLs.map((imageUrl, index) => (
                        <View key={index}>
                            <Image className="rounded-md w-full h-full" style={{ resizeMode: "cover"}}
                                source={{ uri: imageUrl }} />
                        </View>
                    ))}
            </Swiper>
            <View className="flex-row justify-between mx-4 items-center mt-5">
                <View >
                    <TouchableOpacity className="flex-row  items-center gap-3">
                        <View className="rotate-45 rounded w-6 h-6 bg-white" style={{ overflow: "hidden"}}>
                            {/* <View className="-rotate-45 -mt-2 -ml-3">*/}
                            {/*    <Image className=" w-full h-full" style={{ resizeMode: 'cover'}}*/}
                            {/*            source={require('./../assets/icons/icon_nos_01.png')}/>*/}
                            {/*</View> */}
                        </View>
                        <Text className="font-semibold text-white">{post.author}</Text>
                    </TouchableOpacity>
                </View>

                <View className="flex-row gap-4 ml-5  ">
                    <View>
                        <FollowButton />
                    </View>
                    <View>
                        <MoreButton />
                    </View>
                </View>
            </View>

            <View className="flex-row justify-between pt-4 pb-3 mx-4 mt-2">
                        <View className="flex-row gap-2">
                            {post.tags.map((tag, index) => (
                                <TouchableOpacity key={index} className="rounded-xl py-2 px-4 bg-primary-light">
                                    <Text className="font-semibold text-white">{tag}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
            </View>

            <View className="mt-3 ml-4 bg-primary">
                <Text className="text-lg font-bold color-white">{post.title}</Text>

                <Text className="text-base color-white mt-3 mb-20">
                   {post.description}
                </Text>
            </View>

            </ScrollView>
        </SafeAreaView>


        </>

);
}

