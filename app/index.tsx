import { Text, View, StyleSheet, SafeAreaView, ImageBackground, TouchableOpacity} from "react-native";
import {BlurView} from "expo-blur"
import { windowHeight, windowWidth, HEROIMAGE } from "@/constant";
import ToButton from "@/components/common/ToButton"
import { router } from "expo-router";


export default function Index() {
  return (
    <SafeAreaView className="flex-1 bg-black" style={{width:windowWidth, height:windowHeight}}>
      <View className="h-[65%] md:mx-auto w-full" >
      <ImageBackground source={HEROIMAGE} style={{flex:1, width:'100%'}} resizeMode="cover">
      </ImageBackground>
      </View>
      <View className="items-center max-w-[85%] px-8 mx-auto">
        <View>
        <Text className="font-Sora-SemiBold text-4xl text-center text-white font-semibold mb-3">Fall in Love with </Text>
        <Text className="font-Sora-SemiBold text-4xl text-center text-white font-semibold mb-3">Coffee in Blissful</Text>
        <Text className="font-Sora-SemiBold text-4xl text-center text-white font-semibold mb-3">Delight!</Text>
        </View>
        <Text className="text-center text-gray-400">Welcome to our cozy coffee corner, where every cup is a delightful for you.</Text>
      </View>

  <ToButton 
  text="Get Stated"
  textStyle="text-white text-center text-lg py-5 font-bold"
  btnStyle="bg-coffebrown w-[85%]  mx-auto rounded-xl my-10"
  onPress={() => router.push("/(tabs)")}
  />
    </SafeAreaView>
  );
}

