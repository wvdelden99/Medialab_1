import { Image, Text, TouchableOpacity, View, SafeAreaView, StatusBar, ScrollView } from "react-native";
// Components
import { PostCard } from './../components/PostCard';
import { Header } from "../components/layout/Header";

export function Home() {
    return (
        <SafeAreaView className="flex-[1] bg-primary-dark">
            <StatusBar barStyle="light-content" />
            <Header />

            <ScrollView className="flex-[1] bg-primary">
            <View className="mx-4">
                <View className="flex-row justify-between py-4">
                    <TouchableOpacity className="flex-row items-center bg-primary-light rounded-full py-2 px-4">
                        <Text className="font-semibold text-white">Voor Jou</Text>
                        <Image className="w-4 h-4" style={{ tintColor: "white"}}
                                source={require('./../assets/icons/icon_arrow_01.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity className="mr-2">
                        <Image className="w-6 h-6" style={{ tintColor: "white"}}
                                source={require('./../assets/icons/icon_search_01.png')} />
                    </TouchableOpacity>
                </View>

                <PostCard />
                <PostCard />
            </View>
            </ScrollView>
            
        </SafeAreaView>
    );
}