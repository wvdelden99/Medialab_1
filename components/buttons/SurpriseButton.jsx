import React, { useState } from 'react';
import {View, Text, TouchableOpacity, Modal, Image} from 'react-native';
import {colors} from "../../assets/styles/Styles";
import {ModalContent} from "../ModalContent";
import {Header} from "../layout/Header";

export function SurpriseButton(){
    const [modalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!modalVisible);
    };

    return (
        <View className="flex-row items-center rounded-lg py-2 px-4 bg-secondary">
            <TouchableOpacity onPress={toggleModal} className="flex-row">
                <Image className="w-4 h-4" style={{ tintColor: "white"}}
                       source={require('./../../assets/images/dice2.png')} />
                <Text className="font-semibold text-white px-3">Verras me</Text>
            </TouchableOpacity>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={toggleModal}
            >
                <View className="flex-1 justify-center w-fit bg-primary" >

                    <View className="justify-center items-center bg-primary p-2 border-0 h-1/2" >
                        <Text className="text-2xl text-white">Klik op de dobbelsteen voor
                            een verrassings artikel</Text>
                        <ModalContent/>
                        <TouchableOpacity onPress={toggleModal} className="flex-row items-center bg-primary-light rounded-full py-2 px-4">
                            <Text style={{ color: 'white', fontSize: 16 }}>Nevermind go back</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

