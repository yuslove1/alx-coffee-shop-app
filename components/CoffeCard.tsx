import { CoffeeCardProps } from "@/interfaces";
import { View, Image, Text, ImageBackground, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { PLUS } from "@/constant/index";
import Icon from "./common/Icon";

const CoffeeCard: React.FC<CoffeeCardProps> = ({
  image,
  title,
  subtitle,
  price,
  rating,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.cardContainer}>
      {/* card image */}
      <View style={styles.imageContainer}>
        <ImageBackground
          source={image}
          style={{ height: 140, width: "100%", alignItems: "flex-end" }}
          resizeMode="cover"
        >
          <View style={styles.ratingCard}>
            <AntDesign
              name="star"
              size={15}
              color="#FFA500"
              style={{ paddingRight: 5 }}
            />
            <Text className="text-[#D8D8D8] text-sm font-semibold">
              {rating}
            </Text>
          </View>
        </ImageBackground>
      </View>

      <View style={styles.cardDetail}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{subtitle}</Text>

        <View style={styles.priceSection}>
          <Text style={styles.prices}>$ {price}</Text>
          <Icon
            imgSource={PLUS} // Replace with your setting icon path
            imgStyle="width: 24, height: 24"
            iconBodyStyle="bg-coffebrown w-[48] h-[48] flex items-center justify-center rounded-xl"
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CoffeeCard;

const styles = StyleSheet.create({
  cardContainer: {
    width: "48%",
    overflow: "hidden",
    borderRadius: 10,
    padding: 8,
    backgroundColor: "#FFFFFF",
    zIndex: 10,

    // shadowColor: 'black',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.15,
    // shadowRadius: 0.84,
    // elevation: 2,
  },
  imageContainer: {
    overflow: "hidden",
    borderRadius: 10,
  },
  ratingCard: {
    flexDirection: "row",
    justifyContent: "center",
    width: 51,
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.4)",
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderBottomLeftRadius: 10,
  },
  cardDetail: {
    fontFamily: "Sora",
    padding: 8,
  },
  title: {
    fontFamily: "Sora",
    fontWeight: "bold",
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 8,
  },
  description: {
    fontFamily: "Sora",
    fontWeight: 400,
    fontSize: 12,
    lineHeight: 14.4,
    color: "#A2A2A2",
  },

  priceSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  prices: {
    fontFamily: "Sora",
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: 27,
  },
});

// className="bg-slate-500 w-[48%] rounded-xl overflow-hidden
