import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Alert,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { TouchableHighlight } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { logout } from "../config/firebaseFunctions";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function Mypage({ navigation }) {
  // const userLogout = async () => {
  //   try {
  //     await AsyncStorage.removeItem("token").then(
  //       navigation.navigate("SignInPage")
  //     );
  //     Alert.alert("Logout Success!");
  //   } catch (error) {
  //     console.log("AsyncStorage error: " + error.message);
  //   }
  // };

  const logoutFunc = () => {
    logout(navigation);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{
          marginBottom: 10,
        }}
        onPress={logoutFunc}>
        <Text style={styles.smallText}>!로그아웃! {">"}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
