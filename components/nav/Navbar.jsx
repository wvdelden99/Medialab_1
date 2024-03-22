import { Image, Text, TouchableOpacity, View } from "react-native";

export function Navbar() {
    return (
        <View className="absolute flex-row justify-evenly pt-5 pb-10 bottom-0 left-0 right-0 bg-primary-dark">
            <TouchableOpacity className="items-center">
                <Image className="mb-2 w-5 h-5" style={{ tintColor: "white"}}
                        source={require('./../../assets/icons/icon_home_01.png')} />
                <Text className="text-xs font-medium text-white">Start</Text>
            </TouchableOpacity>
            <TouchableOpacity className="items-center">
                <Image className="mb-2 w-5 h-5" style={{ tintColor: "white"}}
                        source={require('./../../assets/icons/icon_search_01.png')} />
                <Text className="text-xs font-medium text-white">Ontdek</Text>
            </TouchableOpacity>
            <TouchableOpacity className="items-center">
                <Image className="mb-2 w-5 h-5" style={{ tintColor: "white"}}
                        source={require('./../../assets/icons/icon_users_01.png')} />
                <Text className="text-xs font-medium text-white">Vrienden</Text>
            </TouchableOpacity>
            <TouchableOpacity className="items-center">
                <Image className="mb-2 w-5 h-5" style={{ tintColor: "white"}}
                        source={require('./../../assets/icons/icon_user_01.png')} />
                <Text className="text-xs font-medium text-white">Account</Text>
            </TouchableOpacity>
        </View>
    );
}