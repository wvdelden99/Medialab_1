import { Image, TouchableOpacity, Text, View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from './../../assets/styles/Styles';

export function PostCardCarousel({uri}) {
    return (
        <TouchableOpacity className="relative mr-5">
            <Image className="rounded-lg w-[150px] h-[200px]"
                    source={{uri}}/>
            
            <LinearGradient className="absolute rounded-b-lg w-full h-full"
                            colors={['rgba(0,0,0,0)', colors.primaryLightColor]} />
            <View className="absolute p-2 bottom-0 left-0 right-0">
                <Text className="text-xs text-center font-semibold text-white">Dit is de titel van een nieuwsartikel voor NOS</Text>
            </View>
        </TouchableOpacity>
    );
}