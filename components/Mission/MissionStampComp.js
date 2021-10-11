import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} from "react-native";

export default function MissionStampComp({}) {
  return (
    <View style={{ marginBottom: 30 }}>
      <TouchableOpacity>
        <View style={styles.card}></View>
      </TouchableOpacity>
      <Text style={styles.smallText}>예쁜말 장인</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 90,
    height: 90,
    backgroundColor: "#d2d2d2",
    justifyContent: "center",
    borderRadius: 70,
    margin: 10,
  },
  largeText: {
    color: "#000",
    fontSize: 17,
    fontWeight: "700",
  },
  smallText: {
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
  },
});
