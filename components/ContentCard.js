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

export default function ContentCard({ navigation, content, thumbnail }) {
  return (
    <TouchableOpacity
      style={styles.cardBox}
      onPress={() =>
        navigation.navigate("ContentView", {
          navigation: navigation,
          content: content,
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
    flex: 1,
    width: 150,
    marginRight: 10,
  },
  imgBox: {
    width: 150,
    height: 150,
    marginBottom: 5,
  },
  largeText: {
    fontSize: 13,
    fontWeight: "500",
  },
});
