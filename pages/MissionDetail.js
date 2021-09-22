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

export default function MissionDetail({ navigation, route }) {
  const { data } = route.params;
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Header transparent>
        <Left>
          <GoBackButton navigation={navigation} />
        </Left>
        <Body />
        <Right />
      </Header>

      <ScrollView>
        <View
          style={{
            justifyContent: "center",

            padding: 10,
          }}>
          <Text style={{ color: "#000", fontSize: 20, textAlign: "center" }}>
            {data.Title}
          </Text>
          <View
            style={{
              backgroundColor: "lightgrey",
              width: 100,
              height: 100,
              borderRadius: 100,
              alignSelf: "center",
              margin: 30,
            }}></View>
          <View style={styles.largeTextBox}>
            <Text style={styles.largeText}>미션 설명</Text>
          </View>
          <Text style={styles.smallText}>{data.DescIntro}</Text>
          <View style={styles.largeTextBox}>
            <Text style={styles.largeText}>미션 가이드</Text>
          </View>
          <Text style={styles.smallText}>{data.DescGuide}</Text>
        </View>
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
    color: "#fff",
    fontSize: 17,
    fontWeight: "700",
    padding: 10,
  },
  smallText: {
    fontSize: 15,
    fontWeight: "400",
    padding: 10,
  },
  largeTextBox: {
    backgroundColor: "#5de2a2",
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
