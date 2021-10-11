import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Header, Left, Right, Body } from "native-base";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import MissionHomeCard from "../components/Mission/MissionHomeCard";
import MovePageButton from "../components/MovePageButton";
import MissionHistoryCard from "../components/Mission/MissionHistoryCard";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function MissionHome({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Header transparent>
        <Left></Left>
        <Body>
          <Text style={{ fontSize: 18 }}>노력의 발자취</Text>
        </Body>
        <Right>
          <TouchableOpacity
            style={{ marginRight: 10 }}
            onPress={() => {
              navigation.push("MissionAddPage");
            }}>
            <Ionicons name="add" size={24} color="black" />
          </TouchableOpacity>
        </Right>
      </Header>

      <ScrollView>
        <Text style={styles.largeText}>진행중인 미션</Text>
        <ScrollView horizontal pagingEnabled>
          <MissionHomeCard />
          <MissionHomeCard />
          <MissionHomeCard />
        </ScrollView>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.largeText}>미션 히스토리</Text>
          <MovePageButton navigation={navigation} pageName={"MissionHistory"} />
        </View>

        <View>
          <MissionHistoryCard />
          <MissionHistoryCard />
          <MissionHistoryCard />
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 50,
          }}>
          <Text style={styles.largeText}>스탬프 모아보기</Text>
          <MovePageButton
            navigation={navigation}
            pageName={"MissionStampList"}
          />
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
});
