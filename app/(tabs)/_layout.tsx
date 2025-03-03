import { Tabs } from "expo-router";
import "@/styles/global.css";
import Octicons from "@expo/vector-icons/Octicons";
import AntDesign from "@expo/vector-icons/AntDesign";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import Ionicons from "@expo/vector-icons/Ionicons";

const HomeRootLayout = () => {
  return (
    <Tabs 
    screenOptions={{ 
      headerShown: false, 
      // tabBarActiveTintColor: '#C67C4E', 
      tabBarInactiveTintColor: "gray",
      tabBarShowLabel:false, 
      // tabBarActiveBackgroundColor:'#c67c4e',
      tabBarStyle: {
        
      },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <Octicons name="home" size={24} color={focused ? "#C67C4E" : "gray"} />
          ),
        }}
      />,
      <Tabs.Screen
        name="favorite"
        options={{
          title: "Favorite",
          headerTitleAlign: "center",
         tabBarIconStyle: ({color: '#c67c4e'}),
          tabBarIcon: ({ color, focused }) => (
            <AntDesign name="hearto" size={24} color={focused ? "#C67C4E" : "gray"} />
          ),
        }}
      />,
      <Tabs.Screen
        name="bag"
        options={{
          title: "Bag",
          tabBarIcon: ({ color, focused }) => (
            <SimpleLineIcons name="handbag" size={24} color={focused ? "#C67C4E" : "gray"} />
          ),
        }}
      />,
      <Tabs.Screen
        name="notification"
        options={{
          title: "Notification",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name="notifications-outline" size={24} color={focused ? "#C67C4E" : "gray"} />
          ),
        }}
      />,
       {/* <Tabs.Screen name="detail/:id" /> */}
    </Tabs>
  );
};

export default HomeRootLayout;

// my tab layout
