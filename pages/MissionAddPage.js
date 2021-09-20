import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Header, Left, Right, Body } from "native-base";
import { StatusBar } from "expo-status-bar";
import GoBackButton from "../components/GoBackButton";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function MissionAddPage({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Header transparent>
        <Left>
          <GoBackButton navigation={navigation} />
        </Left>
        <Body>
          <Text style={{ fontSize: 18 }}>미션 탐색</Text>
        </Body>
        <Right />
      </Header>

      <ScrollView></ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: windowWidth,
    height: windowHeight,
  },
  largeText: {
    color: "#000",
    fontSize: 17,
    fontWeight: "700",
    padding: 10,
  },
  smallText: {
    fontSize: 15,
    fontWeight: "400",
    padding: 10,
  },
});
