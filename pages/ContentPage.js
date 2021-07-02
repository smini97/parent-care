import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Header, Left, Right, Body } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import ContentLine from "../components/ContentLine";
import ContentTagSelect from "../components/ContentTagSelect";
import ContentCard from "../components/ContentCard";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function ContentPage({ navigation, route }) {
  const { contents } = route.params;
  const [data, setData] = useState(contents);
  const tagList = ["심리학지식", "오디오북", "명상", "명언"];
  const [selectedTag, setSelectedTag] = useState("심리학지식");
  const setTagFunc = (d) => {
    setSelectedTag(d);
    setData(
      contents.filter((v) => {
        return v.category === d;
      })
    );
  };

  return (
    <View style={styles.container}>
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
        <Body />
        <Right>
          <TouchableOpacity style={{ marginRight: 10 }}>
            <Ionicons name="search-outline" size={24} color="black" />
          </TouchableOpacity>
        </Right>
      </Header>

      <ScrollView>
        <View style={styles.tagTab}>
          {tagList.map((data, i) => {
            const isFocused = data === selectedTag;
            return (
              <ContentTagSelect
                key={i}
                text={data}
                isFocused={isFocused}
                setTagFunc={setTagFunc}
              />
            );
          })}
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: "row",
            flexWrap: "wrap",
          }}>
          {data.map((data, i) => {
            return (
              <ContentCard
                key={i}
                content={data}
                navigation={navigation}
                thumbnail={data.url[0]}
              />
            );
          })}
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
    height: windowHeight,
  },
  cardScroll: {
    paddingHorizontal: 15,
    paddingBottom: 30,
  },
  topicText: {
    fontWeight: "700",
    fontSize: 17,
    paddingHorizontal: 15,
    paddingBottom: 10,
  },
  tagTab: { flex: 1, flexDirection: "row", marginBottom: 20 },
});
