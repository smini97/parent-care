import React from "react";
import { StyleSheet, Text, Dimensions, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function CurriculumToContentLine({
  navigation,
  content,
  files,
}) {
  return (
    <TouchableOpacity
      style={styles.lineBox}
      onPress={() =>
        navigation.push("ContentView", {
          navigation: navigation,
          content: content,
          files: files,
        })
      }>
      <Text style={styles.smallText}>{content.title}</Text>
      <Ionicons name="chevron-forward-outline" size={28} color="black" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  lineBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: "#e8e8e8",
    borderBottomWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  imgBox: {
    width: 60,
    height: 60,
    marginRight: 15,
  },
  textBox: {
    justifyContent: "center",
  },
  largeText: {
    fontSize: 14,
    marginBottom: 5,
    fontWeight: "500",
  },
  smallText: {
    fontSize: 15,
    fontWeight: "300",
    paddingVertical: 10,
    paddingLeft: 20,
  },
});
