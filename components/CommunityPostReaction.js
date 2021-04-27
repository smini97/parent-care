import React, { useState } from "react";
import { StyleSheet, Text, Dimensions, View } from "react-native";

import { TouchableOpacity } from "react-native-gesture-handler";

const windowWidth = Dimensions.get("window").width;

export default function CommunityPostReaction({
  title = "좋아요",
  emoji = "🖤",
  count = 100,
}) {
  const [isCount, setIsCount] = useState(false);
  const [num, setNum] = useState(count);
  const addCount = () => {
    if (isCount) {
      setNum(num - 1);
      setIsCount(!isCount);
    } else {
      setNum(num + 1);
      setIsCount(!isCount);
    }
  };
  return (
    <TouchableOpacity style={styles.categoryBox} onPress={addCount}>
      <Text style={{ fontSize: 24 }}>{emoji}</Text>
      {isCount ? (
        <>
          <Text style={{ ...styles.smallText, color: "#5de2a2" }}>{title}</Text>
          <Text style={{ ...styles.smallText, color: "#5de2a2", fontSize: 11 }}>
            {num}
          </Text>
        </>
      ) : (
        <>
          <Text style={styles.smallText}>{title}</Text>
          <Text style={{ ...styles.smallText, color: "grey", fontSize: 11 }}>
            {num}
          </Text>
        </>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  smallText: {
    fontSize: 12,
    fontWeight: "400",
    paddingHorizontal: 10,
  },
  categoryBox: {
    justifyContent: "center",
    alignItems: "center",
  },
});
