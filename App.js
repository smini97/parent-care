{/* 
import React,{useState} from 'react';

//메인에 세팅할 네비게이션 도구들을 가져옵니다.
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './navigation/StackNavigator'
import { AppLoading } from 'expo-app-loading';

//expo install expo-font 로 설치
import * as Font from "expo-font";
//expo install @expo/vector-icons 로 설치
import { Ionicons, FontAwesome } from "@expo/vector-icons";

import { StatusBar } from 'expo-status-bar';

export default function App() {

  //로딩중에 대한 상태 관리 === 처음엔 당연히 로딩중이니 값이 true 겠죠?
  const [isLoading,setIsLoading] = useState(true)

  //배열에 담긴 폰트들을 차례대로 하나씩 앱에 적재 시키는 함수
  const cacheFonts = fonts => fonts.map(font => Font.loadAsync(font));

  const funcStart = () => {
    console.log("시작")
    //아이온 아이콘 폰트와 폰트 어썸 폰트 모두 폰트 캐시에 등록
    cacheFonts([Ionicons.font, FontAwesome.font]);
  }

  const funcError = () => {
    console.log("에러")
  }

  const funcFinish = () => {
    console.log("완료")
    //앱 로딩이 완료되면 로딩 상태를 false로 변경하여, 
    //더이상 로딩 상태가 아니게 바꿉니다
    setIsLoading(false)
  }


  return isLoading ? <AppLoading startAsync={funcStart} onError={funcError} onFinish={funcFinish} /> : (
   
    <NavigationContainer>
      <StatusBar style="black" translucent={true}/>
      <StackNavigator/>
   </NavigationContainer>
  )
}




import React from 'react';
import Main from "./page/Main"
import Contents from "./page/Mentoring"
export default function App() {

  return (
    <Contents/>
    
  );
}
*/}

import React,{useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './navigation/StackNavigator'
import AppLoading from 'expo-app-loading';
import * as Font from "expo-font";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { StatusBar } from 'expo-status-bar';


export default function App() {

  
  const [isLoading,setIsLoading] = useState(true)
  const cacheFonts = fonts => fonts.map(font => Font.loadAsync(font));
  const funcStart = () => {
    console.log("시작")
    cacheFonts([Ionicons.font, FontAwesome.font]);
  }
  const funcError = () => {
    console.log("에러")
  }
  const funcFinish = () => {
    console.log("완료")
    setIsLoading(false)
  }


  return isLoading ? <AppLoading startAsync={funcStart} onError={funcError} onFinish={funcFinish} /> : (
    <NavigationContainer>
      <StatusBar style="black" translucent={true} backgroundColor="transparent"/>
      <StackNavigator/>
   </NavigationContainer>
  )
}

