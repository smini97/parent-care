import React, { useState, useEffect, useLayoutEffect } from "react";
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
import AsyncStorage from "@react-native-async-storage/async-storage";
import ContentCard from "../components/ContentCard";
import * as firebase from "firebase";
import "firebase/firestore";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function BookmarkContents({ navigation, route }) {
  const [loading, setLoading] = useState(true);
  const [contents, setContents] = useState([]);
  const currentUser = firebase.auth().currentUser;
  const db = firebase.firestore();

  const getBookmark = async () => {
    let userRef = db.collection("users").doc(currentUser.uid);
    const data = await userRef.get().then((doc) => {
      return doc.data();
    });
    return data.contentBookmark;
  };

  const getProtectedQuote = async (id, contents) => {
    var TOKEN = await AsyncStorage.getItem("token");
    await fetch(`https://api.dangnagwi.lomy.info/contents/${id}`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + TOKEN,
      },
    })
      .then((response) => response.json())
      .then(async (quote) => {
        await contents.push(quote);
        return contents;
      })
      .then((list) => {
        setContents(list);
      });
  };

  const getContentList = async (bookmark) => {
    await Promise.all(
      bookmark.map(async (id) => await getProtectedQuote(id, contents))
    );
    setLoading(false);
  };

  useEffect(() => {
    getBookmark().then((id) => getContentList(id));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Header
        transparent
        style={{
          shadowColor: "black",
          shadowOffset: {
            width: 0,
            height: 10,
          },
          shadowOpacity: 0.25,
          elevation: 2,
        }}>
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
            즐겨찾는 콘텐츠
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
        <ScrollView style={{ width: windowWidth }}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              flexWrap: "wrap",
            }}>
            {contents.map((content, i) => {
              if (content.metadata) {
                let { files, thumbnail } = JSON.parse(content.metadata);
                return (
                  <View key={i}>
                    <ContentCard
                      content={content}
                      files={files}
                      navigation={navigation}
                      thumbnail={thumbnail}
                    />
                    <Text style={styles.smallText}>{content.title}</Text>
                  </View>
                );
              }
            })}
          </View>
        </ScrollView>
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
    width: windowWidth / 2.15,
    fontSize: 15,
    fontWeight: "bold",
    padding: 10,
  },
  imageBox: {
    width: windowWidth,
    height: windowWidth,
    marginBottom: 10,
  },
});
