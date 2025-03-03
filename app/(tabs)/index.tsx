import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  ImageBackground,
} from "react-native";
import {
  windowHeight,
  windowWidth,
  SETTINGICON,
  BANNER,
  COFFEEFILTER,
} from "@/constant";
import { coffeeData } from "@/constant/data";
import CoffeeCard from "@/components/CoffeCard";
import ToButton from "@/components/common/ToButton";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Feather } from "@expo/vector-icons";

import Icon from "@/components/common/Icon";
import { Link, router } from "expo-router";

const Home = () => {
  return (
    <SafeAreaView style={{ width: windowWidth, height: windowHeight, flex: 1 }}>
      <ScrollView>

      
      <View className="w-full h-[280px] bg-black p-mypadding">
        <View className="gap-1 pb-mypadding">
          <Text className="text-[#A2A2A2] text-xm">Location</Text>

          <View className="flex-row items-center pb-mypadding">
            <Text className="text-[#D8D8D8] font-Sora-SemiBold font-bold text-lg">
              Bilzen, Tanjungbalai
            </Text>
            <MaterialIcons
              name="keyboard-arrow-down"
              size={24}
              color="#D8D8D8"
            />
          </View>
        </View>

        <View className="flex-1  w-full">
          <View className="flex-row items-center justify-between">
            <View className="flex-row items-center bg-[#2A2A2A] rounded-xl flex-1 mr-2">
              <Feather
                name="search"
                size={20}
                color="#D8D8D8"
                style={{ marginLeft: 10, marginRight: 5 }}
              />
              <TextInput
                className="text-[#D8D8D8] flex-1 px-2 py-4"
                placeholder="Search coffee"
                placeholderTextColor="#D8D8D8"
              />
            </View>
            <Icon
              imgSource={SETTINGICON}
              imgStyle="width: 24, height: 24"
              iconBodyStyle="bg-coffebrown w-[48] h-[48] flex items-center justify-center rounded-xl"
            />
          </View>

          <View className="h-[140] overflow-hidden w-full rounded-xl z-10 absolute top-[60%]">
            <ImageBackground
              source={BANNER}
              style={{ flex: 1, width: "100%" }}
              resizeMode="cover"
            >
              <Text className="bg-[#BBBBBB] w-[60] h-[24] text-center font-semibold rounded-md text-white mt-4 ml-8">
                Promo
              </Text>
            </ImageBackground>
          </View>
        </View>
      </View>

      <View className="px-mypadding">
        <ScrollView
          className="mt-24"
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ marginRight: 10 }}
        >
          {COFFEEFILTER.map((filter, index) => (
            <ToButton
              text={filter}
              textStyle="px-2 py-2 font-semibold"
              btnStyle="bg-myGray rounded-lg mx-2"
              key={index}
            />
          ))}
        </ScrollView>

        <View style={{flexDirection: "row",flexWrap:'wrap', justifyContent:'space-between', marginTop:12, gap:8}}>
          {coffeeData.map((coffee) => (
            <CoffeeCard
              key={coffee.id}
              image={coffee.imageUrl}
              title={coffee.title}
              subtitle={coffee.description}
              price={coffee.price}
              rating={coffee.rating}
              onPress={()=> router.push(`/detail/${coffee.id}`)}
            />
          
          ))}
        </View>
      </View>

      <ToButton 
  text="Show more"
  textStyle="text-white text-center text-lg py-5 font-bold"
  btnStyle="bg-coffebrown w-[85%]  mx-auto rounded-xl my-10"
  />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;