import { SafeAreaView, ScrollView, StatusBar, Text, View } from "react-native";
import { Header } from "../components/layout/Header";

export function Friends() {
    return (
        <SafeAreaView className="flex-[1] bg-primary-dark">
            <StatusBar barStyle="light-content" />
            <Header />

            <ScrollView className="flex-[1] bg-primary">

            </ScrollView>
        </SafeAreaView>
    );
}