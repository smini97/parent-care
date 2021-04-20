import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MainContentCategory from "../components/MainContentCategory";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function Main({ navigation }) {
  const [contents, setContents] = useState([]);
  const cateogryList = [
    { title: "당나귀 콘텐츠", emoji: "heart-circle" },
    { title: "오디오북", emoji: "headset" },
    { title: "명상", emoji: "cafe" },
    { title: "명언", emoji: "at-circle" },
    { title: "심리학 지식", emoji: "library" },
  ];
  const prepare = async () => {
    await setContents([
      "자녀가 시무룩해 보여요",
      "부모역할이 부담스럽고 힘들어요",
      "모의고사 성적이 기대하던 수준에 미치지 않을 때",
      "성적을 숨기거나 말하지 않으려고 할 때",
      "자녀에게 특정 진로를 강요하고 싶을 때",
      "자녀가 희망하는 과가 마음에 들지 않을 때",
      "친구 자녀가 좋은 대학에 합격한 소식을 들었을 때",
      "자녀가 아침에 잘 일어나지 못할 때",
      "정신적 문제를 심각하게 호소할 때",
      "지속적으로 폭식을 하거나 음식을 거의 섭취하지 않을 때",
      "갱년기로 우울해지고 힘들 때",
      "공부 잘하는 다른 형제자매와 비교하게 될 때",
      "일이 너무 바빠서 자녀를 잘 챙겨주지 못하는 시기일 때",
      "자녀에게 집착하게 되고, 자녀와 심리적으로 분리되기 어려울 때",
      "자녀에게 욱해서 마음에도 없는 나쁜 말을 하고 후회할 때",
      "재수나 N수를 해서 공부를 더 하고 싶다고 하여 혼란스러울 때",
    ]);
  };
  useEffect(() => {
    prepare();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.mainContainer}>
        <View style={styles.boxContainer}>
          <View style={styles.centeredView}>
            <View
              style={{
                width: windowWidth,
                height: windowWidth / 1.5,
                backgroundColor: "#5de2a2",
                justifyContent: "space-between",
                paddingHorizontal: 10,
              }}>
              <Text
                style={{
                  ...styles.smallText,
                  color: "#fff",
                  fontWeight: "700",
                  paddingTop: 30,
                }}>
                중간고사 13일 전인 오늘,
              </Text>
              <Text
                style={{
                  ...styles.largeText,
                  color: "#fff",
                  marginBottom: 30,
                }}>
                아이가 낮은 성적을 받을까봐{"\n"}불안한 부모를 위한 콘텐츠
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  padding: 20,
                }}>
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: "#fff",
                    borderRadius: 10,
                  }}>
                  <Text
                    style={{
                      ...styles.smallText,
                      borderColor: "#fff",
                      color: "#fff",
                    }}>
                    AD
                  </Text>
                </View>
                <TouchableOpacity>
                  <Text
                    style={{
                      ...styles.smallText,
                      backgroundColor: "#fff",
                      borderRadius: 10,
                      overflow: "hidden",
                    }}>
                    보러가기
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.boxContainer}>
          <Text style={styles.largeText}>상황별 고민 해결</Text>
          <TouchableOpacity
            style={{
              ...styles.categoryBox,
              width: windowWidth,
              marginBottom: 20,
            }}
            onPress={() =>
              navigation.navigate("Situation", {
                contents: contents,
              })
            }>
            <Ionicons name="heart-circle" size={30} color="#5de2a2" />
            <Text style={styles.smallText}>당나귀 콘텐츠</Text>
          </TouchableOpacity>
          <Text style={styles.largeText}>카테고리별 고민 해결</Text>
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            {cateogryList.map((data, i) => {
              if (i > 0) {
                return (
                  <MainContentCategory
                    key={i}
                    title={data.title}
                    emoji={data.emoji}
                  />
                );
              }
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: windowWidth,
  },
  centeredView: {
    justifyContent: "center",
    alignItems: "center",
  },
  mainContainer: {
    flex: 1,
    width: windowWidth,
    marginTop: 30,
  },
  boxContainer: {
    marginBottom: 30,
  },
  largeText: {
    color: "#000",
    fontSize: 18,
    fontWeight: "700",
    padding: 10,
    marginVertical: 10,
  },
  smallText: {
    fontSize: 14,
    fontWeight: "400",
    padding: 10,
  },
  categoryBox: {
    width: windowWidth / 4,
    height: windowWidth / 4,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#e8e8e8",
    borderWidth: 1,
  },
});
