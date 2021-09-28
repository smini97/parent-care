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
import { Ionicons } from "@expo/vector-icons";
import GoBackButton from "../components/GoBackButton";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function MissionStampList({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Header transparent>
        <Left>
          <GoBackButton navigation={navigation} />
        </Left>
        <Body>
          <Text style={{ fontSize: 18 }}>스탬프 기록</Text>
        </Body>
        <Right />
      </Header>

      <ScrollView>
        <View></View>
      </ScrollView>
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
