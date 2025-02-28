import React from "react";
import { Text, TouchableOpacity } from "react-native"
import { ButtonProps } from "@/interfaces/index";

const ToButton: React.FC<ButtonProps> = ({text, textStyle, btnStyle, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} className={btnStyle}>
        <Text className={textStyle}>{text}</Text>
    </TouchableOpacity>
    )
};

export default ToButton;