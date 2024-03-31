import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, StatusBar, ScrollView, useState} from 'react-native';
import Swiper from 'react-native-swiper';
import {colors} from "../assets/styles/Styles";
import {MoreButton} from "../components/buttons/MoreButton";
import {FollowButton} from "../components/buttons/FollowButton";
import { Header } from './../components/layout/Header';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native'

export function Article(){

    const navigation = useNavigation();

    const images = [
       "https://www.zorgbelanginclusief.nl/media/vbdpcdbx/covid-19.jpg",
       "https://www.zorgbelanginclusief.nl/media/vbdpcdbx/covid-19.jpg",
       "https://www.zorgbelanginclusief.nl/media/vbdpcdbx/covid-19.jpg",


    ];
    return (
        <>

    <SafeAreaView className="flex-[1] bg-primary-dark">
            <StatusBar barStyle="light-content" />
            <Header />

            <View className="flex-row justify-start absolute mt-16">
              <TouchableOpacity 
                  onPress={() => navigation.goBack()}
                  className="bg-primary p-2 rounded-tr-2xl rounded-bl-2xl ml-4">
                  <ArrowLeftIcon size="20" color="white"></ArrowLeftIcon>
              </TouchableOpacity>
            </View>

            <ScrollView className="flex-[1] bg-primary">
            <Swiper className="h-[380px]"
                showsButtons={false}
                loop={false}
                paginationStyle={{ bottom: -10, paddingVertical: 8, backgroundColor: colors.primaryColor, }}
                dotStyle={{ borderRadius: 100, width: 10, height: 10, backgroundColor: colors.primaryLightColor }}
                activeDotStyle={{ borderRadius: 100, width: 10, height: 10, backgroundColor: colors.secondaryColor }}>
            {images.map((imageUrl, index) => (
                <View  key={index}>
                    <Image className="rounded-md w-full h-full" style={{ resizeMode: "cover"}} source={{ uri: imageUrl }} />
                </View>
            ))}
        </Swiper>
            <View className="flex-row justify-between mx-4 items-center mt-5">
                <View >
                    <TouchableOpacity className="flex-row  items-center gap-3">
                        <View className="rotate-45 rounded w-6 h-6 bg-white" style={{ overflow: "hidden"}}>
                            {/* <View className="-rotate-45 -mt-2 -ml-3">*/}
                            {/*    <Image className=" w-full h-full" style={{ resizeMode: 'cover'}}*/}
                            {/*            source={require('./../assets/icons/icon_nos_01.png')}/>*/}
                            {/*</View> */}
                        </View>
                        <Text className="font-semibold text-white">NOS</Text>
                    </TouchableOpacity>
                </View>

                <View className="flex-row gap-4 ml-5  ">
                    <View>
                        <FollowButton />
                    </View>
                    <View>
                        <MoreButton />
                    </View>
                </View>
            </View>

            <View className="mt-7 ml-4 bg-primary">
                <Text className="text-lg font-bold color-white">Corona uitbraak bereikt all time high :0</Text>

                <Text className="text-base color-white mt-3">
                    Gezien de gunstige ontwikkeling van de pandemie, zowel wat betreft de viruscirculatie als de infecties en ziekenhuisopnames, heeft de Interministeriële Conferentie Volksgezondheid (IMC) besloten de Covid-19-teststrategie aan te passen.
                    Vorige IMC werd reeds beslist om de isolatiemaatregelen aan te passen (zie nieuwsbericht van 26-04-2023). Nu worden ook de PCR RAT niet meer aanbevolen aan de algemene bevolking, de asymptomatische patiënten en de bewoners van collectieve zorginstellingen (zowel ambulante zorg als in ziekenhuizen, inclusief patiëntenvervoer en spoedeisende prehospitaal zorg), met enkele beperkte uitzonderingen.
                    Zelftests blijven beschikbaar.
                    {"\n"}
                    {"\n"}
                    Dit besluit volgt op het wetenschappelijk advies van de Risk Assessment Group (RAG), de adviserende experten van de Hoge Gezondheidsraad en het standpunt van de Risk Management Group (RMG).
                    Het nieuwe testbeleid wordt van kracht zodra de bijgewerkte aanbevelingen op de website van Sciensano zijn gepubliceerd., d.w.z. op 23 mei 2023.
                    {"\n"}
                    {"\n"}
                    De bepaling van de teststrategie voor symptomatische patiënten is complexer en hangt af van veel factoren (gezondheidstoestand van de patiënt, de leeftijd, de mate van immunodepressie/deficiëntie…). De besprekingen in de RMG zullen worden voortgezet op basis van het advies van de Hoge Gezondheidsraad en zal uiterlijk op 1 juni 2023, tijdens de volgende Interministeriële Conferentie Volksgezondheid, worden vastgesteld.
                    De ministers willen benadrukken dat de teststrategie opnieuw kan worden versterkt als de epidemiologische situatie verslechtert en een nieuwe variant met ernstigere kenmerken opduikt.
                </Text>
            </View>

            </ScrollView>
        </SafeAreaView>


        </>

);
}

