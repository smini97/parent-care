import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} from "react-native";

export default function MissionHomeCardCheck({}) {
  const [isCheck, setIsCheck] = useState(false);
  const onCheckFunc = () => {
    setIsCheck(!isCheck);
  };
  return (
    <TouchableOpacity onPress={onCheckFunc}>
      {isCheck ? (
        <View style={styles.card_checked}></View>
      ) : (
        <View style={styles.card}></View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 40,
    height: 40,
    backgroundColor: "#d2d2d2",
    justifyContent: "center",
    borderRadius: 70,
  },
  card_checked: {
    width: 40,
    height: 40,
    backgroundColor: "#5de2a2",
    justifyContent: "center",
    borderRadius: 70,
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
