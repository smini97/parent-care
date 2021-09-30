import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function MissionCard({ navigation }) {
  const missionExample = {
    MissionId: 0,
    Title: "아이의 자존감을 높이는 말 한 마디",
    DescSummary:
      "건강한 자존감은 행복한 삶으로 이어져요. 완벽하지 않아도 괜찮아! 오늘 이 점을 칭찬해! 쪽지, 문자도 좋으니 하루에 한 번 아이의 장점을 구체적으로 언급해보는 미션이에요.",
    DescIntro:
      "이 미션은 아이에게 자존감을 높여주는 말을 건네는 미션입니다.  아이가 스스로를 사랑하고 아끼도록 돕습니다. 건강한 자존감은 행복한 삶으로 이어집니다. 하루에 한 마디씩 애정과 지지를 표현한다면 아이는 자신의 가치를 알고 스스로를 긍정적으로 바라볼 수 있을 거예요.",
    DescGuide:
      "7일 동안 하루에 한 번, 아이의 자존감을 높일 수 있는 따듯한 말을 건네주세요. 같이 식사를 할 때, 과일을 먹을 때, 아침, 자기 전 언제든 좋습니다. 아이가 아무것도 하지 않아도, 뛰어나지 않아도 그 자체로 소중하고 귀한 존재임을 알려주세요. 꿀팁! 행위의 결과보다는 ‘과정’에 집중해 칭찬하는 것이 좋습니다. 또 평소 아이의 장점이라고 느꼈던 부분들을 ‘구체적’으로 말해보세요. 쑥스럽다면, 쪽지를 남기거나 문자로 남기는 것도 효과적입니다.",
  };
  const onPressCard = () => {
    navigation.push("MissionDetail", { data: missionExample });
  };
  return (
    <TouchableOpacity style={styles.container} onPress={onPressCard}>
      <View style={styles.card}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}>
          <Text style={styles.largeText}>{missionExample.Title}</Text>
          <Text style={styles.largeText}>7days</Text>
        </View>
        <Text style={{ marginVertical: 20, ...styles.smallText }}>
          {missionExample.DescSummary}
        </Text>
      </View>
    </TouchableOpacity>
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
