import { Image, Text, TouchableOpacity, View } from "react-native";

export function Post() {
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
                    <TouchableOpacity className="border-2 border-primary-light rounded-lg py-1 px-3">
                        <Text className="font-semibold text-primary-light">Volgend</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image className="w-6 h-6" style={{ tintColor: "white"}}
                                source={require('./../assets/icons/icon_dots_01.png')} />
                    </TouchableOpacity>
                </View>
            </View>

            <View className="relative h-[380px]">
                <Image className="rounded-md w-full h-full" style={{ resizeMode: "cover"}}
                        source={require('./../assets/images/image_ai_01.png')} />

                <View className="absolute justify-end items-center w-full h-full">
                    <View className="flex-row mb-2 rounded-full py-2 px-3 bg-primary-light">
                        <View className="mx-1 rounded-full w-3 h-3 bg-secondary"></View>
                        <View className="mx-1 rounded-full w-3 h-3 bg-primary-dark"></View>
                        <View className="mx-1 rounded-full w-3 h-3 bg-primary-dark"></View>
                        <View className="mx-1 rounded-full w-3 h-3 bg-primary-dark"></View>
                    </View>
                </View>
            </View>

            <View className="py-4">
                <View className="flex-row justify-between">
                    <View className="flex-row gap-4">
                        <TouchableOpacity>
                            <Image className="w-6 h-6" style={{ tintColor: "white"}}
                                    source={require('./../assets/icons/icon_heart_01.png')} />
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Image className="w-6 h-6" style={{ tintColor: "white"}}
                                    source={require('./../assets/icons/icon_comment_01.png')} />
                        </TouchableOpacity>

                        <TouchableOpacity>
                        <Image className="w-6 h-6" style={{ tintColor: "white"}}
                                    source={require('./../assets/icons/icon_paper_plane_01.png')} />
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity>
                        <Image className="w-6 h-6" style={{ tintColor: "white"}}
                                source={require('./../assets/icons/icon_bookmark_01.png')} />
                    </TouchableOpacity>
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