import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { TouchableHighlight } from "react-native-gesture-handler";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function Mypage({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={{ ...styles.header, flexDirection: "row" }}>
        <Text style={{ ...styles.headerTitle, marginHorizontal: 50 }}>
          고민별 마음다스리기
        </Text>
        <TouchableHighlight>
          <Ionicons name="search-outline" size={24} color="black" />
        </TouchableHighlight>
      </View>

      <ScrollView>
        <View>
          <Text>MyPage</Text>
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

  header: {
    height: 40,
    marginTop: 40,
    justifyContent: "center",
    alignContent: "center",
    borderBottomColor: "#e2e2e2",
    borderBottomWidth: 1,
  },
  headerTitle: {
    fontSize: 18,
    textAlign: "center",
    color: "#000",
    paddingHorizontal: 30,
  },
  lineBox: {
    height: 80,
    padding: 10,
    paddingHorizontal: 20,
    justifyContent: "center",
    borderBottomWidth: 1,
    borderColor: "#e2e2e2",
  },
  lineText: {
    fontSize: 15,
  },
  tagText: {
    fontSize: 12,
    color: "grey",
    marginTop: 5,
  },
});
