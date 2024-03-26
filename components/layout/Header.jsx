import { Image, Text, View } from "react-native";

export function Header() {
    return (
        <View className="items-center pb-4 bg-primary-dark">
            <Image className="w-16 h-12" 
                    source={require('./../../assets/icons/icon_logo_01.png')} />
        </View>
    );
}