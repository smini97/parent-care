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
import AsyncStorage from "@react-native-async-storage/async-storage";
import ContentCard from "../components/ContentCard";
import * as firebase from "firebase";
import "firebase/firestore";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function BookmarkContents({ navigation, route }) {
  const [bookmark, setBookmark] = useState([]);
  const [contents, setContents] = useState({});

  const getBookmark = async () => {
    const currentUser = firebase.auth().currentUser;
    const db = firebase.firestore();
    let userRef = db.collection("users").doc(currentUser.uid);
    let data = await userRef.get().then((doc) => {
      return doc.data();
    });
    setBookmark(data.contentBookmark);
  };

  // const getProtectedQuote = async (id) => {
  //   var TOKEN = await AsyncStorage.getItem("token");
  //   fetch(`https://api.dangnagwi.lomy.info/contents/${id}`, {
  //     method: "GET",
  //     headers: {
  //       Authorization: "Bearer " + TOKEN,
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((quote) => {
  //       setContents(quote);
  //     })
  //     .done();
  // };

  // useEffect(() => {
  //   getBookmark();
  // }, []);

  const getProtectedQuote = async (id) => {
    var TOKEN = await AsyncStorage.getItem("token");
    const json = await fetch(`https://api.dangnagwi.lomy.info/contents/${id}`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + TOKEN,
      },
    }).then((response) => response.json());
    console.log("꾸");
    return json;
  };

  const getContentList = () => {
    const contentList = bookmark.map(async (id) => await getProtectedQuote(id));
    console.log("까");
    setContents(contentList);
  };

  useEffect(() => {
    async function BookmarkTime() {
      await getBookmark();
      getContentList();
    }
    BookmarkTime();
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
        <ScrollView style={{ flexDirection: "row", paddingHorizontal: 10 }}>
          {/* {bookmark.map((id, i) => {
            getProtectedQuote(id);
            if (contents.metadata) {
              let { files, thumbnail } = JSON.parse(contents.metadata);
              return (
                <View key={i}>
                  <ContentCard
                    content={contents}
                    files={files}
                    navigation={navigation}
                    thumbnail={thumbnail}
                  />
                  <Text style={styles.smallText}>{contents.title}</Text>
                </View>
              );
            }
          })} */}
          {console.log(contents)}
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
