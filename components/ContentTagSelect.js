import React from "react";
import { StyleSheet, Dimensions, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
const windowWidth = Dimensions.get("window").width;

export default function ContentTagSelect({ text, isFocused, setTagFunc }) {
  return isFocused ? (
    <TouchableOpacity
      onPress={() => setTagFunc(text)}
      style={styles.selectedTagBox}>
      <Text style={styles.selectedTagText}>{text}</Text>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity onPress={() => setTagFunc(text)} style={styles.tagBox}>
      <Text style={styles.tagText}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  tagBox: {
    width: windowWidth / 3,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    paddingVertical: 15,
    borderBottomColor: "#e2e2e2",
    borderBottomWidth: 1,
  },
  tagText: { color: "#000", fontWeight: "700", fontSize: 15 },
  selectedTagBox: {
    width: windowWidth / 3,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    paddingVertical: 15,
    borderBottomColor: "#e2e2e2",
    borderBottomWidth: 1,
    borderBottomColor: "#5de2a2",
    borderBottomWidth: 5,
  },
  selectedTagText: { fontWeight: "700", color: "#5de2a2", fontSize: 15 },
});
