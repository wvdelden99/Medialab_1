import { Image, TouchableOpacity } from "react-native";

export function MoreButton() {
    return (
        <TouchableOpacity>
            <Image className="w-6 h-6" style={{ tintColor: "white"}}
                    source={require('./../../assets/icons/icon_dots_01.png')} />
        </TouchableOpacity>
    );
}