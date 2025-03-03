import { Dimensions } from "react-native";

const HEROIMAGE = require('@/assets/images/hero-image.png')
const BANNER = require('@/assets/images/Banner1.png');

const SETTINGICON = require('@/assets/icons/setting-icon.png')
const PLUS = require('@/assets/icons/plus.png')
const BIKE = require('@/assets/icons/motorbike-icon.png')
const BEAN = require('@/assets/icons/bean-icon.png')
const MILK = require('@/assets/icons/milk-icon.png')


const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const COFFEEFILTER = ["All Coffee", "Machiato", "Latte", "Americano", "Flat white", "Cappuccino", "Cortado", "Iced coffe", "Affogato"];

export { windowHeight, windowWidth, HEROIMAGE, SETTINGICON, BANNER, COFFEEFILTER, PLUS, BIKE, MILK, BEAN };