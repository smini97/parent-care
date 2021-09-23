import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import FirstThumb from "../assets/LoadingImg.png";
import SituationLine from "../components/SituationLine";
import ContentCard from "../components/ContentCard";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FileSystem } from "expo";
import * as firebase from "firebase";
import "firebase/firestore";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function Main({ navigation }) {
  const currentUser = firebase.auth().currentUser;
  const db = firebase.firestore();
  const [curriculum, setCurriculum] = useState([]);
  const [contents, setContents] = useState({ result: [] });

  const getProtectedQuote = async () => {
    let userRef = await db.collection("users").doc(currentUser.uid);
    let data = await userRef.get().then((doc) => {
      return doc.data();
    });
    var TOKEN = await AsyncStorage.getItem("token");
    fetch("https://api.dangnagwi.lomy.info/contents?size=10", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + TOKEN,
      },
    })
      .then((response) => response.json())
      .then((quote) => {
        setContents(quote);
      })
      .done();
  };

  const prepare = async () => {
    await setCurriculum([
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
    getProtectedQuote();
    navigation.addListener("beforeRemove", (e) => {
      e.preventDefault();
    });
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.mainContainer}>
        <View style={styles.boxContainer}>
          <View style={styles.centeredView}>
            <View
              style={{
                width: windowWidth,
                height: windowHeight / 2,
                backgroundColor: "#5de2a2",
                justifyContent: "space-between",
                paddingHorizontal: 10,
                paddingTop: 10,
              }}>
              <Text
                style={{
                  ...styles.smallText,
                  color: "#fff",
                  fontWeight: "700",
                  marginTop: 40,
                }}>
                중간고사 13일 전인 오늘,
              </Text>
              <Text
                style={{
                  ...styles.largeText,
                  color: "#fff",
                  marginBottom: 20,
                }}>
                아이가 낮은 성적을 받을까봐{"\n"}불안한 부모를 위한 콘텐츠
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  padding: 10,
                  marginBottom: 15,
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
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Text style={styles.largeText}>당나귀 커리큘럼</Text>
            <TouchableOpacity
              style={{
                marginBottom: 10,
              }}
              onPress={() =>
                navigation.navigate("Situation", {
                  curriculum: curriculum,
                })
              }>
              <Text style={styles.smallText}>전체보기 {">"}</Text>
            </TouchableOpacity>
          </View>
          {curriculum.slice(-5).map((data, i) => {
            return (
              <SituationLine
                key={i}
                curriculum={data}
                navigation={navigation}
              />
            );
          })}

          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Text style={styles.largeText}>콘텐츠 바로가기</Text>
            <TouchableOpacity
              style={{
                marginBottom: 10,
              }}
              onPress={() =>
                navigation.navigate("ContentPage", {
                  contents: contents,
                })
              }>
              <Text style={styles.smallText}>전체보기 {">"}</Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal
            style={{ flexDirection: "row", paddingHorizontal: 10 }}>
            {contents.result.map((data, i) => {
              if (data.metadata) {
                let { files, thumbnail } = JSON.parse(data.metadata);
                return (
                  <ContentCard
                    key={i}
                    content={data}
                    files={files}
                    navigation={navigation}
                    thumbnail={thumbnail}
                  />
                );
              }
            })}
          </ScrollView>
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
    width: windowWidth / 2,
    height: windowWidth / 3.5,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#e8e8e8",
    borderWidth: 1,
  },
});
