import React from "react";
//설치한 스택 네비게이션 라이브러리를 가져옵니다
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./TabNavigator";

//페이지로 만든 컴포넌트들을 불러옵니다
import SignInPage from "../pages/SignInPage";
import Curriculums from "../pages/Curriculums";
import CurriculumView from "../pages/CurriculumView";
import CommunityPostView from "../pages/CommunityPostView";
import Contents from "../pages/Contents";
import ContentView from "../pages/ContentView";
import MissionHome from "../pages/MissionHome";
import MissionAddPage from "../pages/MissionAddPage";
import MissionDetail from "../pages/MissionDetail";
import MissionEvent from "../pages/MissionEvent";
import MissionHistory from "../pages/MissionHistory";
import MissionStampList from "../pages/MissionStampList";

//스택 네비게이션 라이브러리가 제공해주는 여러 기능이 담겨있는 객체를 사용합니다
//그래서 이렇게 항상 상단에 선언하고 시작하는게 규칙입니다!
const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    //책갈피 기능을 하는 네비게이터 엘리먼트를 선언합니다.
    //이는 위에 선물 객체에서 꺼내 사용하는 겁니다
    //내부엔 화면 상단 헤더 부분의 스타일을 변경할 수 있는 옵션들이 담겨 있습니다.
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {/* 컴포넌트를 페이지로 만들어주는 엘리먼트에 끼워 넣습니다. 이 자체로 이제 페이지 기능을 합니다*/}
      <Stack.Screen name="MissionHome" component={MissionHome} />
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
      <Stack.Screen name="SignInPage" component={SignInPage} />
      <Stack.Screen name="Curriculums" component={Curriculums} />
      <Stack.Screen name="CurriculumView" component={CurriculumView} />
      <Stack.Screen name="Contents" component={Contents} />
      <Stack.Screen name="ContentView" component={ContentView} />
      <Stack.Screen name="MissionAddPage" component={MissionAddPage} />
      <Stack.Screen name="MissionDetail" component={MissionDetail} />
      <Stack.Screen name="MissionEvent" component={MissionEvent} />
      <Stack.Screen name="MissionHistory" component={MissionHistory} />
      <Stack.Screen name="MissionStampList" component={MissionStampList} />
      <Stack.Screen name="CommunityPostView" component={CommunityPostView} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
