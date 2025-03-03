import { IconProps } from '@/interfaces/index'
import { Image, Pressable, TouchableOpacity } from 'react-native';
import { View, StyleSheet } from 'react-native';
const Icon: React.FC<IconProps> =({iconBodyStyle, imgSource, imgStyle, onPress}) =>  {
  return (
    <TouchableOpacity className={iconBodyStyle} onPress={onPress}>
      <Image source={imgSource} style={{imgStyle}} />
    </TouchableOpacity>
  );
}

export default Icon;