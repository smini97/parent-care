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

export default function MissionHomeCard({}) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.largeText}>
            아이의 자존감을 높이는 말 한 마디
          </Text>
          <Text style={styles.largeText}>D+2</Text>
        </View>
        <Text style={{ marginVertical: 20, ...styles.smallText }}>
          건강한 자존감은 행복한 삶으로 이어져요. ‘완벽하지 않아도 괜찮아! 오늘
          이 점을 칭찬해!’ 쪽지, 문자도 좋으니 하루에 한 번 아이의 장점을
          구체적으로 언급해보는 미션이에요.
        </Text>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <MissionHomeCardCheck />
          <MissionHomeCardCheck />
          <MissionHomeCardCheck />
          <MissionHomeCardCheck />
          <MissionHomeCardCheck />
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
  card: {
    backgroundColor: "#e2e2e2",
    justifyContent: "center",
    padding: 20,
    borderRadius: 10,
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
