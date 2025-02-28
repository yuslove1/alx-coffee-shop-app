export interface ButtonProps {
    text: string;
    btnStyle?: string; // Tailwind className for TouchableOpacity
    textStyle?: string;      // Tailwind className for Text
    onPress?: () => void;
  }

