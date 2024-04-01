import { Image, TouchableOpacity } from "react-native";

export function SavedButton() {
    return (
        <TouchableOpacity>
            <Image className="w-6 h-6" style={{ tintColor: "white"}}
                    source={require('./../../assets/icons/icon_bookmark_01.png')} />
        </TouchableOpacity>
    );
}