import { View, Text } from "react-native";
import { windowHeight, windowWidth } from "@/constant";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
const Bag = () => {
  return (
      <View style={{width:windowWidth, height: windowHeight}}>
        <View className="flex-1 justify-center items-center">
        <MaterialCommunityIcons name="progress-clock" size={50} color="black" />
        <Text>Screen in progress....</Text>
        </View>
        
      </View>
  )
}

export default Bag;