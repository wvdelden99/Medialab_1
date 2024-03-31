import React, { useState } from 'react';
import { Text, TouchableOpacity } from "react-native";

export function FollowButton() {
    const [follow, setFollow] = useState(false);

    const toggleFollow = () => {
        setFollow(!follow);
    };

    return (
        <TouchableOpacity className={`border-2 rounded-lg py-1 px-3 ${ follow ? 'border-primary-light bg-transparent' : 'border-secondary bg-secondary' }`} onPress={toggleFollow}>
            <Text className={`font-semibold ${ follow ? 'text-primary-light' : 'text-white' }`}>{follow ? 'Volgend' : 'Volgen'}</Text>
        </TouchableOpacity>
    );
}