import { Image, Text, View } from "react-native";

export function Header() {
    return (
        <View className="items-center pb-4 bg-primary-dark">
            <Image className="" 
                    source={require('./../../assets/icons/icon_logo.png')} />
        </View>
    );
}