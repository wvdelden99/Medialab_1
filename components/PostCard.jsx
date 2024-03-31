import React from 'react';
import { Image, Text, TouchableOpacity, StyleSheet, View, Share } from "react-native";
import { colors } from '../assets/styles/Styles';
import Swiper from 'react-native-swiper';
// Components
import { LikeButton } from './buttons/LikeButton';
import { CommentButton } from './buttons/CommentButton';
import { ShareButton } from './buttons/ShareButton';
import { SavedButton } from './buttons/SavedButton';
import { MoreButton } from './buttons/MoreButton';
import { FollowButton } from './buttons/FollowButton';

import { useNavigation } from '@react-navigation/native'

export function PostCard({ post }) {

    const navigation = useNavigation();

    return (
        <View className="mb-4 pb-2">
            <View className="flex-row items-center justify-between mb-4">
                <TouchableOpacity className="flex-row items-center gap-3">
                    <View className="rotate-45 rounded w-6 h-6 bg-white" style={{ overflow: "hidden"}}>
                        {/* <View className="-rotate-45 -mt-2 -ml-3">*/}
                        {/*    <Image className=" w-full h-full" style={{ resizeMode: 'cover'}}*/}
                        {/*            source={require('./../assets/icons/icon_nos_01.png')}/>*/}
                        {/*</View> */}
                    </View>

                    <Text className="font-semibold text-white">{post.author}</Text>
                </TouchableOpacity>

                <View className="flex-row items-center gap-3">
                    <View>
                        <FollowButton />
                    </View>

                    <View>
                        <MoreButton />
                    </View>
                </View>
            </View>

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

            <View className="py-4">
                <View className="flex-row justify-between">
                    <View className="flex-row gap-4">
                        <View>
                            <LikeButton />
                        </View>
                        
                        <View>
                            <CommentButton />
                        </View>
                        
                        <View>
                            <ShareButton />
                        </View>
                    </View>

                    <SavedButton />
                </View>

                <View className="mt-4">
                    <Text className="text-white text-xl font-bold">{post.title}</Text>
                </View>

                <View className="flex-row justify-between pt-4 pb-3">
                        <View className="flex-row gap-2">
                            {post.tags.map((tag, index) => (
                                <TouchableOpacity key={index} className="rounded-xl py-2 px-4 bg-primary-light">
                                    <Text className="font-semibold text-white">{tag}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>

                        <TouchableOpacity  className="flex-row items-center rounded-lg py-2 px-4 bg-secondary"
                        onPress={() => navigation.navigate('Article', { post: post, postId: post.id })}>
                        <Image className="mr-2 w-4 h-4" style={{ tintColor: "white"}}
                                source={require('./../assets/icons/icon_book_01.png')} />
                        <Text className="font-semibold text-white">Lezen</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <Text className="text-xs font-semibold text-primary-light">25 Maart 2024</Text>
                </View>
            </View>
        </View>
    );
}