import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function Article(){
    const images = [
        'https://example.com/image1.jpg',
        'https://example.com/image2.jpg',
        'https://example.com/image3.jpg',
    ];
    return (
        <Swiper className="h-[380px]"
                showsButtons={false}
                paginationStyle={{ alignItems: "start", paddingVertical: 6, backgroundColor: colors.primaryLightColor }}
                dotStyle={{ borderRadius: 100, width: 10, height: 10, backgroundColor: colors.primaryDarkColor }}
                activeDotStyle={{ borderRadius: 100, width: 10, height: 10, backgroundColor: colors.secondaryColor }}>
            {images.map((imageUrl, index) => (
                <View  key={index}>
                    <Image className="rounded-md w-full h-full" style={{ resizeMode: "cover"}} source={{ uri: imageUrl }} />
                </View>
            ))}
        </Swiper>
    );
};

