import React, { useEffect } from "react";

import { Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Main from "../pages/Main";
import Community from "../pages/Community";
import Mypage from "../pages/Mypage";
import MissionHome from "../pages/MissionHome";
import { Ionicons } from "@expo/vector-icons";

const Tabs = createBottomTabNavigator();

const TabNavigator = ({ navigation, route }) => {
  useEffect(() => {
    navigation.setOptions({
      title: "",
    });
  }, []);

  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          //현재 이 앱을 구동하고 있는 디바이스가 뭔지 Platform.OS 을 통해 확인 할 수 있음
          let iconName = Platform.OS === "ios" ? "ios-" : "md-";

          if (route.name === "Main") {
            iconName += "home";
          } else if (route.name === "MissionHome") {
            iconName += "calendar-sharp";
          } else if (route.name === "Community") {
            iconName += "chatbubbles";
          } else if (route.name === "Mypage") {
            iconName += "person-circle";
          }

          return (
            <Ionicons
              name={iconName}
              color={focused ? "#5de2a2" : "lightgrey"}
              size={25}
            />
          );
        },
      })}
      tabBarOptions={{
        showLabel: false,
        style: {
          backgroundColor: "#fff",
          borderTopColor: "#e2e2e2",
          height: 60,
        },
      }}>
      <Tabs.Screen name="Main" component={Main} />
      <Tabs.Screen name="MissionHome" component={MissionHome} />
      <Tabs.Screen name="Community" component={Community} />
      <Tabs.Screen name="Mypage" component={Mypage} />
    </Tabs.Navigator>
  );
};

export default TabNavigator;
