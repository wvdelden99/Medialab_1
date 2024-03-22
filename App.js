import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
// Components
import { Navbar } from './components/nav/Navbar';

export default function App() {
    return (
        <View className="flex-1 items-center justify-center bg-white">
            <Text className="">Test!</Text>
            <StatusBar style="auto" />

            <Navbar />
        </View>
    );
}
