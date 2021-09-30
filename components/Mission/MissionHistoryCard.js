import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import MissionHomeCardCheck from "./MissionHomeCardCheck";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function MissionHistoryCard({}) {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", flex: 1 }}>
        <View style={styles.dateBox}>
          <Text style={{ color: "#fff" }}>20, Sep</Text>
        </View>
        <View style={{ flex: 4, justifyContent: "center", marginLeft: 30 }}>
          <Text>장점 관찰하기 3회차</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    padding: 10,
  },
  dateBox: {
    flex: 1,
    backgroundColor: "#d2d2d2",
    padding: 5,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  largeText: {
    color: "#000",
    fontSize: 17,
    fontWeight: "700",
  },
  smallText: {
    fontSize: 14,
    fontWeight: "400",
  },
});
