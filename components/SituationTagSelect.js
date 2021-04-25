import React from "react";
import { StyleSheet, Dimensions, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
const windowWidth = Dimensions.get("window").width;

export default function SituationTagSelect({ text, isFocused, setTagFunc }) {
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
    width: windowWidth / 5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    paddingVertical: 15,
    borderBottomColor: "#e2e2e2",
    borderBottomWidth: 1,
  },
  tagText: { fontWeight: "700" },
  selectedTagBox: {
    width: windowWidth / 5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    paddingVertical: 15,
    borderBottomColor: "#e2e2e2",
    borderBottomWidth: 1,
    borderBottomColor: "#5de2a2",
    borderBottomWidth: 3,
  },
  selectedTagText: { fontWeight: "700", color: "#5de2a2" },
});
