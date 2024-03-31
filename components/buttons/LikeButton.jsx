import React, { useState } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { colors } from '../../assets/styles/Styles';

export function LikeButton() {
    const [liked, setLiked] = useState(false);

    const toggleLike = () => {
        setLiked(!liked);
    };

    return (
        <TouchableOpacity onPress={toggleLike}>
            <Image className="w-6 h-6" style={{ tintColor: liked ? colors.secondaryColor : 'white' }}
                    source={require('./../../assets/icons/icon_heart_01.png')}/>
        </TouchableOpacity>
    );
}
