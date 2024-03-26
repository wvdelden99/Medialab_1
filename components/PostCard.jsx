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

export function PostCard() {
    return (
        <View className="mb-20 pb-2">
            <View className="flex-row items-center justify-between mb-4">
                <TouchableOpacity className="flex-row items-center gap-3">
                    <View className="rotate-45 rounded w-6 h-6 bg-white" style={{ overflow: "hidden"}}>
                        {/* <View className="-rotate-45 -mt-2 -ml-3">
                            <Image className=" w-full h-full" style={{ resizeMode: 'cover'}}
                                    source={require('./../assets/icons/icon_nos_01.png')}/>
                        </View> */}
                    </View>

                    <Text className="font-semibold text-white">NOS</Text>
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

            <Swiper className="h-[380px]" 
                    showsButtons={false}  
                    paginationStyle={{ alignItems: "start", paddingVertical: 6, backgroundColor: colors.primaryLightColor }}
                    dotStyle={{ borderRadius: 100, width: 10, height: 10, backgroundColor: colors.primaryDarkColor }}
                    activeDotStyle={{ borderRadius: 100, width: 10, height: 10, backgroundColor: colors.secondaryColor }}>
                <View>
                    <Image className="rounded-md w-full h-full" style={{ resizeMode: "cover"}}
                            source={require('./../assets/images/image_ai_01.png')}/>
                </View>
                <View>
                    <Image className="rounded-md w-full h-full" style={{ resizeMode: "cover"}}
                            source={require('./../assets/images/image_ai_02.png')}/>
                </View>
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

                <View className="flex-row justify-between pt-4 pb-3">
                    <View className="flex-row gap-2">
                        <TouchableOpacity className="rounded-xl py-2 px-4 bg-primary-light">
                            <Text className="font-semibold text-white">Nieuws</Text>
                        </TouchableOpacity>

                        <TouchableOpacity className="rounded-xl py-2 px-4 bg-primary-light">
                            <Text className="font-semibold text-white">Cultuur</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity className="flex-row items-center rounded-lg py-2 px-4 bg-secondary">
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