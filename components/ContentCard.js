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

export default function ContentCard({ navigation, content, files, thumbnail }) {
  return (
    <TouchableOpacity
      style={styles.cardBox}
      onPress={() =>
        navigation.push("ContentView", {
          navigation: navigation,
          content: content,
          files: files,
        })
      }>
      <ImageBackground
        source={{ uri: thumbnail }}
        style={styles.imgBox}
        imageStyle={{ borderRadius: 5 }}></ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardBox: {
    width: windowWidth / 2,
    height: windowWidth / 2,
    justifyContent: "center",
    alignItems: "center",
  },
  imgBox: {
    width: windowWidth / 2.15,
    height: windowWidth / 2.15,
  },
  largeText: {
    fontSize: 15,
    fontWeight: "500",
  },
});
