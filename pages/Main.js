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
  const categoryList = [
    { title: "오디오북", emoji: "headset" },
    { title: "명상", emoji: "cafe" },
    { title: "명언", emoji: "at-circle" },
    { title: "심리학지식", emoji: "library" },
  ];
  const prepare = async () => {
    await setContents([
      { title: "자녀가 시무룩해 보여요", tag: "자녀" },
      { title: "부모 역할이 부담스럽고 힘들어요", tag: "부모" },
      { title: "모의고사 성적이 못나왔어요", tag: "공부" },
      { title: "성적을 숨겨요", tag: "공부" },
      { title: "특정 진로를 강요하고 싶어요", tag: "공부" },
      { title: "자녀가 희망하는 과가 마음에 들지 않아요", tag: "갈등" },
      { title: "친구 자녀가 좋은 대학에 합격했대요", tag: "갈등" },
      { title: "아이가 아침에 잘 일어나지 못해요", tag: "자녀" },
      { title: "정신적 문제를 심각하게 호소해요", tag: "자녀" },
      { title: "폭식증/거식증의 증상이 있어요", tag: "자녀" },
      { title: "갱년기로 우울해지고 힘들어요", tag: "부모" },
      { title: "공부 잘하는 다른 형제자매와 비교하게 돼요", tag: "갈등" },
      { title: "일이 너무 바빠서 잘 챙겨주지 못해요", tag: "부모" },
      { title: "자녀에게 집착하게 돼요", tag: "부모" },
      { title: "욱해서 마음에도 없는 나쁜 말을 했어요", tag: "갈등" },
      { title: "N수를 해서 공부를 더 하고 싶다고 하네요", tag: "갈등" },
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
                height: windowWidth / 1.4,
                backgroundColor: "#5de2a2",
                justifyContent: "space-between",
                paddingHorizontal: 10,
                paddingTop: 15,
              }}>
              <Text
                style={{
                  ...styles.smallText,
                  color: "#fff",
                  fontWeight: "700",
                  paddingTop: 50,
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
              marginBottom: 10,
            }}
            onPress={() =>
              navigation.navigate("Situation", {
                contents: contents,
              })
            }>
            <Ionicons name="heart-circle" size={36} color="#5de2a2" />
            <Text style={styles.smallText}>당나귀 커리큘럼</Text>
          </TouchableOpacity>
          <Text style={styles.largeText}>카테고리별 고민 해결</Text>
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            {categoryList.map((data, i) => {
              return (
                <MainContentCategory
                  key={i}
                  title={data.title}
                  emoji={data.emoji}
                  navigation={navigation}
                />
              );
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
  },
  boxContainer: {
    marginBottom: 10,
  },
  largeText: {
    color: "#000",
    fontSize: 17,
    fontWeight: "700",
    padding: 10,
  },
  smallText: {
    fontSize: 15,
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
