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

export default function ContentLine({ navigation, content, thumbnail }) {
  return (
    <TouchableOpacity
      style={styles.lineBox}
      onPress={() =>
        navigation.navigate("ContentView", {
          navigation: navigation,
          content: content,
        })
      }>
      <View style={{ flexDirection: "row" }}>
        <ImageBackground
          source={{ uri: thumbnail }}
          style={styles.imgBox}
          imageStyle={{ borderRadius: 5 }}></ImageBackground>
        <View style={styles.textBox}>
          <Text style={styles.largeText}>{content.title}</Text>
          <Text style={styles.smallText}>{content.situation}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  lineBox: {
    flex: 1,
    width: windowWidth,
    padding: 15,
    paddingVertical: 10,
    justifyContent: "center",
    borderBottomWidth: 1,
    borderColor: "#e2e2e2",
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
    fontSize: 13,
    fontWeight: "200",
  },
});
