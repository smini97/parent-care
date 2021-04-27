import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const SituationLine = ({ navigation, contents }) => {
  return (
    <TouchableOpacity
      style={styles.lineBox}
      onPress={() =>
        navigation.push("SituationView", { navigation: navigation })
      }>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.tagText}>{contents.tag} | </Text>
        <Text style={styles.lineText}>{contents.title}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default SituationLine;

const styles = StyleSheet.create({
  lineBox: {
    flex: 1,
    width: windowWidth,
    padding: 10,
    paddingVertical: 20,
    justifyContent: "center",
    borderBottomWidth: 1,
    borderColor: "#e2e2e2",
  },
  lineText: {
    fontSize: 15,
    flex: 7,
  },
  tagText: {
    flex: 1,
    fontSize: 13,
    color: "#5de2a2",
    fontWeight: "700",
    marginHorizontal: 5,
  },
});
