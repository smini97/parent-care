import React from "react";
import { StyleSheet, View, Image, Dimensions } from "react-native";
import LoadingImg from "../assets/LoadingImg.png";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export default function Loading() {
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Image
        style={styles.img}
        source={LoadingImg}
        resizeMode={"contain"}></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    width: windowWidth / 1.2,
    height: windowHeight / 1.4,
  },
});
