import { Dimensions } from "react-native";

const HEROIMAGE = require('@/assets/images/hero-image.png')

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export { windowHeight, windowWidth, HEROIMAGE };