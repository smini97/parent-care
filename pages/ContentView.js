import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
  Alert,
} from "react-native";
import { Header, Left, Right, Body, Title } from "native-base";
import { Ionicons } from "@expo/vector-icons";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function ContentView({ navigation, route }) {
  const [bookmark, setBookmark] = useState(false);
  const { content } = route.params;

  return (
    <SafeAreaView style={styles.container}>
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
          <Text style={{ width: windowWidth / 1.3, fontSize: 15 }}>
            {content.title}
          </Text>
        </Body>
        <Right />
      </Header>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: "10%",
        }}>
        <ScrollView horizontal pagingEnabled>
          {content.url.map((data, i) => {
            return (
              <>
                <ImageBackground
                  source={{ uri: data }}
                  style={styles.imageBox}></ImageBackground>
              </>
            );
          })}
        </ScrollView>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: 30,
          }}>
          <TouchableOpacity
            style={{
              justifyContent: "center",
              alignItems: "center",
              margin: 10,
            }}>
            <Ionicons name="share-social" size={28} color="black" />
            <Text style={styles.smallText}>공유하기</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.push("TabNavigator");
            }}
            style={{
              justifyContent: "center",
              alignItems: "center",
              margin: 10,
            }}>
            <Ionicons name="home-outline" size={28} color="black" />
            <Text style={styles.smallText}>메인으로</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              justifyContent: "center",
              alignItems: "center",
              margin: 10,
            }}
            onPress={() => {
              setBookmark(!bookmark);
            }}>
            {bookmark ? (
              <Ionicons name="bookmark" size={28} color="black" />
            ) : (
              <Ionicons name="bookmark-outline" size={28} color="black" />
            )}
            <Text style={styles.smallText}>저장하기</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
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
    fontSize: 17,
    fontWeight: "600",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
  },

  smallText: {
    fontSize: 15,
    fontWeight: "500",
    padding: 10,
  },
  imageBox: {
    width: windowWidth,
    height: windowWidth,
    marginBottom: 10,
  },
});
