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

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function MissionEvent({}) {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Header transparent>
        <Left></Left>
        <Body>
          <Text style={{ fontSize: 18 }}>노력의 발자취</Text>
        </Body>
        <Right>
          <TouchableOpacity style={{ marginRight: 10 }}>
            <Ionicons name="search-outline" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginRight: 10 }}>
            <Ionicons name="pencil" size={24} color="black" />
          </TouchableOpacity>
        </Right>
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
