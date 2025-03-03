import React from "react";
import { View, Text, StyleSheet, SafeAreaView, Image } from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import { coffeeData } from "@/constant/data";
import { windowWidth, windowHeight } from "@/constant";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { BIKE, BEAN, MILK } from "@/constant";
import Icon from "@/components/common/Icon";
import ToButton from "@/components/common/ToButton";

const coffeDetail = () => {
  const { id } = useLocalSearchParams();
  const SelectedCoffee = coffeeData.find(
    (coffee) => coffee.id === parseInt(id)
  );

  return (
    <SafeAreaView
      style={{ width: windowWidth, height: windowHeight, padding: 23, flex:1, }}
      className="justify-between"
    >
      <View className="flex-row w-full justify-between items-center px-2 h-11">
        <AntDesign
          name="left"
          size={24}
          color="black"
          onPress={() => router.back()}
        />

        <Text style={styles.soraFont} className="font-semibold text-lg">
          Detail
        </Text>

        <FontAwesome6 name="heart" size={24} color="black" />
      </View>

      <View className="pt-6">
        <View className="overflow-hidden w-full my-2">
          <Image
            source={SelectedCoffee?.imageUrl}
            style={{ width: "100%", borderRadius: 20 }}
            resizeMode="cover"
          />
        </View>

        <View className="py-4">
          <Text style={styles.soraFont} className="font-semibold text-xl">
            {SelectedCoffee?.title}
          </Text>

          <View className="flex-row items-center justify-between">
            <Text
              style={styles.soraFont}
              className="font-light text-xs text-textColor"
            >
              Ice/Hot
            </Text>
            <View className="flex-row justify-between w-[156]">
              <Icon
                imgSource={BIKE}
                iconBodyStyle="w-[44] h-[44] rounded-xl justify-center items-center bg-[#EDEDED59]"
              />
              <Icon
                imgSource={BEAN}
                iconBodyStyle="w-[44] h-[44] rounded-xl justify-center items-center bg-[#EDEDED59]"
              />
              <Icon
                imgSource={MILK}
                iconBodyStyle="w-[44] h-[44] rounded-xl justify-center items-center bg-[#EDEDED59]"
              />
            </View>
          </View>
          <View className="flex-row items-center pb-4 border-b border-textColor">
            <AntDesign
              name="star"
              size={15}
              color="#FFA500"
              style={{ paddingRight: 5 }}
            />
            <Text style={styles.soraFont} className="font-semibold text-sm">
              {SelectedCoffee?.rating}
            </Text>
            <Text
              style={styles.soraFont}
              className="font-medium text-sm text-textColor"
            >
              (230)
            </Text>
          </View>
        </View>

        <View className="">
          <Text style={styles.soraFont} className="font-semibold text-lg mb-2 ">
            Description
          </Text>
          <Text
            style={styles.soraFont}
            className="font-light text-sm text-textColor"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quia
            consequatur nulla dignissimos non. Ducimus exercitationem officiis
            eius atque facere nihil quisquam adipisci, cum voluptatem, porro
            eveniet ratione nesciunt distinctio.
          </Text>
        </View>

        <View>
          <Text
            style={styles.soraFont}
            className="font-light text-sm text-textColor mb-4"
          >
            Size
          </Text>

          <View className="flex-row justify-between my-6">
            <Text
              style={styles.soraFont}
              className="font-normal text-sm py-2.5 px-11 max-w-24 border border-textColor rounded-md "
            >
              S
            </Text>
            <Text
              style={styles.soraFont}
              className="font-normal text-sm py-2.5 px-11 border text-coffebrown bg-lightCoffee max-w-24 border-coffebrown rounded-md"
            >
              M
            </Text>
            <Text
              style={styles.soraFont}
              className="font-normal text-sm py-2.5 px-11 border max-w-24 bg-white rounded-md "
            >
              L
            </Text>
          </View>
        </View>

        <View>
          <View className="flex-row justify-between items-center py-4">
            <View className="w-[76]">
              <Text
                style={styles.soraFont}
                className="font-normal text-sm mb-1 text-textColor"
              >
                Price
              </Text>
              <Text
                style={styles.soraFont}
                className="font-semibold text-xl text-coffebrown"
              >
                $ {SelectedCoffee?.price}
              </Text>
            </View>
            <ToButton
              text="Buy Now"
              textStyle="text-white text-center text-lg py-5 font-bold"
              btnStyle="bg-coffebrown w-[65%] rounded-xl my-10"
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default coffeDetail;

const styles = StyleSheet.create({
  soraFont: {
    fontFamily: "Sora",
  },
});
