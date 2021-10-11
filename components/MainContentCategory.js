import React from "react";
import { StyleSheet, Text, Dimensions, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export default function MainContentCategory({
  title = "당나귀",
  emoji = "heart-circle",
}) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.categoryBox}
      onPress={() => navigation.push("ContentPage", { category: title })}>
      <Ionicons name={emoji} size={36} color="#5de2a2" />
      <Text style={styles.smallText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  smallText: {
    fontSize: 15,
    fontWeight: "400",
    padding: 10,
  },

  categoryBox: {
    width: windowWidth / 2,
    height: windowWidth / 3.5,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#e8e8e8",
    borderWidth: 1,
  },
});