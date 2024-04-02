import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export function ModalContent()  {
    const navigation = useNavigation();
    const [imageVisible, setImageVisible] = useState(false);

    const toggleImage = () => {
        setImageVisible(!imageVisible);
    };

    return (

        <View className="m-2">
            <TouchableOpacity onPress={toggleImage}>
                <Image className="w-10 h-10"
                       source={require('./../assets/images/dice2.png')}/>

            </TouchableOpacity>
            {imageVisible && (
               <>
                <View className="items-center" style={{ shadowColor: 'gray', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.75, shadowRadius: 20 }}>
                <Image
                    className=" bg-white"
                    source={require('./../assets/images/image_ai_01.png')}
                    style={{ width: 250, height: 250, borderRadius: 4  }}
                />
                    <TouchableOpacity onPress={() => navigation.navigate('Article')} className=" mt-2 items-center bg-secondary rounded-full py-2 px-4 w-1/2">
                        <Text style={{ color: 'white', fontSize: 16 }}>Lees artikel</Text>
                    </TouchableOpacity>
               </View>
                </>
            )}
        </View>

    );
}
