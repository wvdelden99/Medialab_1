import { FlatList, Image, Text, TouchableOpacity, View, SafeAreaView, StatusBar, ScrollView } from "react-native";
// Component
import { Header } from './../components/layout/Header';
import { PostCardCarousel } from "../components/layout/PostCardCarousel";
import { sampleData } from "../data";


export function Discover() {
    return (
        <SafeAreaView className="flex-[1] bg-primary-dark">
            <StatusBar barStyle="light-content" />
            <Header />

            <ScrollView className="flex-[1] bg-primary">
                <View className="mx-4">
                    <View className="mt-4">
                        <Text className="text-lg font-bold text-white">Ontdek in verschillende categorieën</Text>
                    </View>

                    <View className="my-2">
                        <Text className="my-4 text-md font-semibold text-white">Politiek</Text>

                        <FlatList
                            data={sampleData}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={item => item.id.toString()}
                            renderItem={({item}) => <PostCardCarousel uri={item.uri} />}/>
                    </View>

                    <View className="my-2">
                        <Text className="my-4 text-md font-semibold text-white">Cultuur</Text>

                        <FlatList
                            data={sampleData}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={item => item.id.toString()}
                            renderItem={({item}) => <PostCardCarousel uri={item.uri} />}/>
                    </View>

                    <View className="my-2">
                        <Text className="my-4 text-md font-semibold text-white">Economie</Text>

                        <FlatList
                            data={sampleData}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={item => item.id.toString()}
                            renderItem={({item}) => <PostCardCarousel uri={item.uri} />}/>
                    </View>
                </View>
            </ScrollView>
            
        </SafeAreaView>
    );
}