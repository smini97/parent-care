import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Header, Left, Right, Body, Title } from "native-base";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import SituationLine from "../components/SituationLine";
import SituationTagSelect from "../components/SituationTagSelect";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function Situation({ navigation, route }) {
  const { curriculum } = route.params;
  const [data, setData] = useState(curriculum);
  const tagList = ["전체", "공부", "자녀", "부모", "갈등"];
  const [selectedTag, setSelectedTag] = useState("전체");
  const setTagFunc = (d) => {
    setSelectedTag(d);
    if (d === "전체") {
      setData(curriculum);
    } else {
      setData(
        curriculum.filter((v) => {
          return v.tag === d;
        })
      );
    }
  };
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      <Header transparent>
        <Left>
          <TouchableOpacity
            style={{ marginLeft: 10 }}
            onPress={() => {
              navigation.goBack();
            }}>
            <Ionicons name="arrow-back" size={28} color="black" />
          </TouchableOpacity>
        </Left>
        <Body>
          <Text style={{ width: windowWidth / 1.3, fontSize: 17 }}>
            당나귀 커리큘럼
          </Text>
        </Body>
        <Right>
          <TouchableOpacity style={{ marginRight: 10 }}>
            <Ionicons name="search-outline" size={24} color="black" />
          </TouchableOpacity>
        </Right>
      </Header>

      <ScrollView>
        <TouchableOpacity style={styles.recommendation}>
          <Text style={{ fontWeight: "700", fontSize: 15, marginBottom: 5 }}>
            오늘의 추천 고민
          </Text>
          <Text style={{ fontWeight: "700", fontSize: 24, color: "#5de2a2" }}>
            아이가 간섭하지 말라고{"\n"}선을 그어요
          </Text>
        </TouchableOpacity>
        <View style={styles.tagTab}>
          {tagList.map((data, i) => {
            const isFocused = data === selectedTag;
            return (
              <SituationTagSelect
                key={i}
                text={data}
                isFocused={isFocused}
                setTagFunc={setTagFunc}
              />
            );
          })}
        </View>
        {data.map((data, i) => {
          return (
            <SituationLine key={i} curriculum={data} navigation={navigation} />
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: windowWidth,
    height: windowHeight,
  },
  recommendation: {
    width: windowWidth / 1.05,
    height: windowWidth / 2,
    backgroundColor: "rgb(247,247,247)",
    alignSelf: "center",
    padding: 20,
    borderRadius: 15,
  },
  tagTab: { flex: 1, flexDirection: "row" },
});
