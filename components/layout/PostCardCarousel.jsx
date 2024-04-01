import React from 'react';
import { Image, TouchableOpacity, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { colors } from './../../assets/styles/Styles';

export function PostCardCarousel({ post }) {
    const navigation = useNavigation();
    const imageURLs = post.imageURLs;
    const title = post.title;

    // Haal de URI van de eerste afbeelding op, of een standaardafbeelding als er geen afbeeldingen zijn
    const firstImageUri = imageURLs && imageURLs.length > 0 ? imageURLs[0] : 'plaats_hier_de_standaard_uri_voor_als_er_geen_afbeeldingen_zijn';

    const handlePress = () => {
        navigation.navigate('Article', { post });
    };

    return (
        <TouchableOpacity style={{ position: 'relative', marginRight: 5 }} onPress={handlePress}>
            <Image style={{ borderRadius: 10, width: 150, height: 200 }} source={{ uri: firstImageUri }} />
            <LinearGradient style={{ position: 'absolute', borderRadius: 10, width: '100%', height: '100%' }} colors={['rgba(0,0,0,0)', colors.primaryLightColor]} />
            <View style={{ position: 'absolute', padding: 8, bottom: 0, left: 0, right: 0 }}>
                <Text style={{ fontSize: 12, textAlign: 'center', fontWeight: 'bold', color: 'white' }}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
}

