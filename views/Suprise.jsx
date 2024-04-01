import { useState } from 'react';
import { TouchableOpacity, Image, Text, View, SafeAreaView, StatusBar } from 'react-native';
import { collection, getDocs, query, limit } from 'firebase/firestore';
import { db } from './../config/firebase';
import { Header } from '../components/layout/Header';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from './../assets/styles/Styles';

// Functie om een willekeurige post uit de database op te halen
const getRandomPost = async () => {
    try {
        // Vraag eerst alle posts op
        const postQuery = query(collection(db, 'posts'), limit(10)); // Haal bijvoorbeeld de eerste 10 posts op
        const postSnapshot = await getDocs(postQuery);
        const postDocs = postSnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));

        // Genereer een willekeurig getal tussen 0 en het aantal opgehaalde posts
        const randomIndex = Math.floor(Math.random() * postDocs.length);

        const randomPost = postDocs[randomIndex]; // Selecteer de willekeurige post
        console.log('Random post:', randomPost); // Console.log om de willekeurige post te controleren
        return randomPost; // Return de willekeurige post
    } catch (error) {
        console.error('Error fetching random post:', error);
        return null;
    }
};

export default function Surprise() {
    const [randomPost, setRandomPost] = useState(null); // Houd de willekeurige post bij in de state
    const navigation = useNavigation();

    // Functie om de willekeurige post te tonen wanneer de gebruiker op de dobbelsteen klikt
    const handleDiceClick = async () => {
        console.log('Dice clicked'); // Voeg console.log toe om te controleren of de functie wordt aangeroepen
        const post = await getRandomPost(); // Haal een willekeurige post op
        setRandomPost(post); // Stel de willekeurige post in
    };

    return (
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

            <View className=" flex-[1] items-center pt-8 bg-primary">
                <View className="max-w-[240px]">
                    <Text className="text-lg text-center text-white font-bold ">
                        Draai aan de dobbelsteen voor een verassingsartikel!
                    </Text>
                </View>

                {/* Dobbelsteen afbeelding */}
                <TouchableOpacity className="my-6" onPress={handleDiceClick}>
                    <Image className="w-14 h-14" style={{ tintColor: "white"}} source={require('./../assets/icons/icon_dice_01.png')} />
                </TouchableOpacity>

            {/* Toon de willekeurige post als deze beschikbaar is */}
            {randomPost && (
                <View className="items-center" style={{ shadowColor: colors.secondaryColor, shadowOffset: { width: 0, height: -2 }, shadowOpacity: 0.35, shadowRadius: 20 }}>
                    <TouchableOpacity className="relative" onPress={() => navigation.navigate('Article', { post: randomPost })}>
                        {randomPost.imageURLs && randomPost.imageURLs.length > 0 && (
                            <Image className="rounded-xl w-[240px] h-[320px]"
                                    source={{ uri: randomPost.imageURLs[0] }} />
                        )}
                        <LinearGradient className="absolute rounded-xl w-[240px] h-full" colors={['rgba(0,0,0,0)', colors.primaryLightColor]} />
                        <View className="absolute p-4 bottom-0 left-0 right-0">
                            <Text className="text-sm text-center font-semibold text-white">{randomPost.title}</Text>
                        </View>
                    </TouchableOpacity>
                    
                    {/* Voeg hier andere informatie van de post toe */}
                    <TouchableOpacity className="flex-row items-center rounded-lg py-2 px-4 bg-secondary mt-8"
                        onPress={() => navigation.navigate('Article', { post: randomPost })}>
                        <Image className="mr-2 w-4 h-4" style={{ tintColor: "white"}}
                                source={require('./../assets/icons/icon_book_01.png')} />
                        <Text className="font-semibold text-white px-1">Lees het artikel</Text>
                    </TouchableOpacity>
                </View>
            )}
            </View>
        </SafeAreaView>
    );
}


