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
} from "react-native";
import { Header, Left, Right, Body, Title } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import Contents from "./Contents";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function ContentView({ navigation, route }) {
  const [bookmark, setBookmark] = useState(false);
  const { content, files } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <Header transparent>
        <Left>
          <TouchableOpacity
            style={{ margin: 10 }}
            onPress={() => {
              navigation.goBack();
            }}>
            <Ionicons name="arrow-back" size={28} color="black" />
          </TouchableOpacity>
        </Left>
        <Right>
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
          </TouchableOpacity>
        </Right>
      </Header>
      <ScrollView>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}>
          <ScrollView horizontal pagingEnabled>
            {files.map((data, i) => {
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
              alignSelf: "stretch",
              borderBottomColor: "lightgrey",
              borderBottomWidth: 1,
              margin: 15,
              marginBottom: 40,
            }}>
            <Text style={[styles.largeText, styles.leftText]}>
              {content.title}
            </Text>
            <Text style={[styles.smallText, styles.leftText]}>
              {content.description}
            </Text>
            <Text style={[styles.smallText, styles.leftText, styles.greyText]}>
              {content.tags}
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              marginVertical: 30,
            }}>
            <TouchableOpacity
              onPress={() => {
                navigation.replace("TabNavigator");
              }}
              style={{
                justifyContent: "center",
                alignItems: "center",
                margin: 10,
              }}>
              <View
                style={{
                  padding: 10,
                  backgroundColor: "#fff",
                  borderColor: "lightgrey",
                  borderWidth: 0.3,
                  borderRadius: 30,
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.1,
                }}>
                <Ionicons name="home" size={28} color="#5DE2A2" />
              </View>
              <Text style={styles.smallText}>메인으로</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {}}
              style={{
                justifyContent: "center",
                alignItems: "center",
                margin: 10,
              }}>
              <View
                style={{
                  padding: 10,
                  backgroundColor: "#fff",
                  borderColor: "lightgrey",
                  borderWidth: 0.3,
                  borderRadius: 30,
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.1,
                }}>
                <Ionicons name="share" size={28} color="#5DE2A2" />
              </View>
              <Text style={styles.smallText}>공유하기</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
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
    fontSize: 15,
    fontWeight: "600",
    padding: 10,
    paddingBottom: 20,
  },
  smallText: {
    fontSize: 13,
    fontWeight: "400",
    padding: 10,
  },
  leftText: {
    textAlign: "left",
  },
  greyText: {
    color: "lightgrey",
    fontSize: 13,
    fontWeight: "300",
    padding: 10,
  },
  imageBox: {
    width: windowWidth,
    height: windowWidth,
  },
});
