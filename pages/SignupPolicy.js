import React from "react";
import { Text } from "native-base";
import { StyleSheet, View } from "react-native";

export default function SignupPolicy({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>[약관 타이틀]</Text>
      <Text>
        당나귀에게 정보 제공을 할건데요, 괜찮은지 묻는 약관이랍니다. 이런이런
        정보들을 수집할거에요 블라블라블라
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: "20%",
    paddingLeft: "8%",
  },
});
