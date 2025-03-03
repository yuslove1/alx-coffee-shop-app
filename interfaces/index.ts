export interface ButtonProps {
    text: string;
    btnStyle?: string; 
    textStyle?: string;      
    onPress?: () => void;
  }
export interface IconProps {
    imgSource: any;
    imgStyle?: string; 
    iconBodyStyle?: string;   
    onPress?: () => void;
  }

  export interface CoffeeCardProps {
    image: any; // Image source
    title: string;
    subtitle: string;
    price: string;
    rating: number;
    onPress?: (coffee: Coffee) => void;
  }

 //for the coffee value padding throug the onPress
  type Coffee = {
    id: string;
    imageUrl: string;
    title: string;
    description: string;
    price: number;
    rating: number;
  };
