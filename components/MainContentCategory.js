import React from "react";
import { StyleSheet, Text, Dimensions, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export default function MainContentCategory({
  title = "당나귀",
  emoji = "heart-circle",
}) {
  return (
    <TouchableOpacity
      style={styles.categoryBox}
      onPress={() => console.log({ title })}>
      <Ionicons name={emoji} size={30} color="#5de2a2" />
      <Text style={styles.smallText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  smallText: {
    fontSize: 14,
    fontWeight: "400",
    padding: 10,
    paddingHorizontal: 10,
  },

  categoryBox: {
    width: windowWidth / 2,
    height: windowWidth / 4,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#e8e8e8",
    borderWidth: 1,
  },
});
