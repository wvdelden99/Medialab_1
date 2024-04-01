import { Image, TouchableOpacity, Text, View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from './../../assets/styles/Styles';

export function PostCardCarousel({ imageURLs, title }) {
    // Haal de URI van de eerste afbeelding op, of een standaardafbeelding als er geen afbeeldingen zijn
    const firstImageUri = imageURLs && imageURLs.length > 0 ? imageURLs[0] : 'plaats_hier_de_standaard_uri_voor_als_er_geen_afbeeldingen_zijn';

    return (
        <TouchableOpacity className="relative mr-5">
            <Image className="rounded-lg w-[150px] h-[200px]" source={{ uri: firstImageUri }} />
            
            <LinearGradient className="absolute rounded-b-lg w-full h-full" colors={['rgba(0,0,0,0)', colors.primaryLightColor]} />
            <View className="absolute p-2 bottom-0 left-0 right-0">
                <Text className="text-xs text-center font-semibold text-white">{title}</Text>
            </View>
        </TouchableOpacity>
    );
}
