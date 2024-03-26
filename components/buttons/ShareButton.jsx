import { Image, TouchableOpacity } from "react-native";

export function ShareButton() {
    return (
        <TouchableOpacity>
            <Image className="w-6 h-6" style={{ tintColor: "white"}}
                    source={require('./../../assets/icons/icon_paper_plane_01.png')} />
        </TouchableOpacity>
    );
}