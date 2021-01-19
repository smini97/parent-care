import React,{useEffect} from "react";

import {Platform} from "react-native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Main from '../page/Main';
import Search from '../page/Search';
import Story from '../page/Story';
import Mentoring from '../page/Mentoring';

import {Ionicons} from "@expo/vector-icons";

const Tabs = createBottomTabNavigator();

const TabNavigator = ({navigation,route}) =>{
  
    useEffect(()=>{
        navigation.setOptions({
            title:""
        })
    },[])


    return (
    <Tabs.Navigator
        screenOptions={({route}) => ({
            tabBarIcon:({focused}) =>{

              //현재 이 앱을 구동하고 있는 디바이스가 뭔지 Platform.OS 을 통해 확인 할 수 있음
                let iconName = Platform.OS === "ios" ? "ios-" : "md-"
              
                  if (route.name === "Main") {
                    iconName += "home";
                  } else if (route.name === "Search") {
                    iconName += "search";
                  } else if (route.name === "Story") {
                    iconName += "radio";
                  } else if (route.name === "Mentoring") {
                    iconName += "people";
                  }

                  return (
                    <Ionicons
                      name={iconName}
                      color={focused ? "#86A8E7" : "grey"}
                      size={25}
                    />
                  );
            }
        })}
        tabBarOptions={{
            showLabel: false,
            style: {
              backgroundColor: "#fff",
              borderTopColor: "#e2e2e2",
              height:60,
            }
        }}
    >
        
        <Tabs.Screen name="Main" component={Main}/>
        <Tabs.Screen name="Search" component={Search}/>
        <Tabs.Screen name="Story" component={Story}/>
        <Tabs.Screen name="Mentoring" component={Mentoring}/>
        
        

        
        
    </Tabs.Navigator>)
}

export default TabNavigator

