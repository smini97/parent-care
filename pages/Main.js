import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import ContentCard from "../components/ContentCard";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as firebase from "firebase";
import "firebase/firestore";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function Main({ navigation }) {
  const [curriculums, setCurriculums] = useState({ result: [] });
  const [contents, setContents] = useState({ result: [] });
  const getContents = async () => {
    //var TOKEN = await AsyncStorage.getItem("token");
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

  const getCurriculums = async () => {
    //var TOKEN = await AsyncStorage.getItem("token");
    var TOKEN = await AsyncStorage.getItem("token");

    fetch("https://api.dangnagwi.lomy.info/curriculums?size=10", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + TOKEN,
      },
    })
      .then((response) => response.json())
      .then((quote) => {
        setCurriculums(quote);
      })
      .done();
  };

  useEffect(() => {
    getContents();
    getCurriculums();
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
                navigation.navigate("Curriculums", {
                  curriculums: curriculums,
                })
              }>
              <Text style={styles.smallText}>전체보기 {">"}</Text>
            </TouchableOpacity>
          </View>
          {curriculums.result.map((data, i) => {
            if (i < 5) {
              console.log(data.title);
            }
          })}

          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Text style={styles.largeText}>콘텐츠 바로가기</Text>
            <TouchableOpacity
              style={{
                marginBottom: 10,
              }}
              onPress={() =>
                navigation.navigate("Contents", {
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
              if (i < 5) {
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
