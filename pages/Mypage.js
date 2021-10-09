import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  Platform,
} from "react-native";
import { Row, Col, Grid } from "react-native-easy-grid";
import { Container, Content, Text, Thumbnail } from "native-base";
import * as ImagePicker from "expo-image-picker";

import { logout } from "../config/firebaseFunctions";
import * as firebase from "firebase";
import "firebase/firestore";

const my = require("../assets/logo.png");
const category1 = require("../assets/37.png");
const category2 = require("../assets/document.png");
const category3 = require("../assets/volume.png");
const tabsIcon = require("../assets/16.png");

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function Mypage({ navigation }) {
  const [nickName, setNickName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState(null);
  const currentUser = firebase.auth().currentUser;
  const db = firebase.firestore();

  const getUserData = async () => {
    let userRef = await db.collection("users").doc(currentUser.uid);
    let data = await userRef.get().then((doc) => {
      return doc.data();
    });

    setNickName(data.nickName);
    setEmail(data.email);
    setImage(data.profileImg);
  };

  const logoutFunc = () => {
    logout(navigation);
  };

  const goSomeWhere = () => {
    navigation.navigate("BookmarkContents");
  };

  const pushImage = async (result) => {
    await db.collection("users").doc(currentUser.uid).update({
      profileImg: result,
    });
  };
  const removeImage = async (result) => {
    await db.collection("users").doc(currentUser.uid).update({
      profileImg: "",
    });
    setImage("");
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
      pushImage(result.uri);
    }
  };

  useEffect(() => {
    getUserData();
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  return (
    <Container>
      <Content>
        <Grid style={{ alignItems: "center", marginTop: "30%" }}>
          {image ? (
            <Thumbnail large source={{ uri: image }} style={styles.thumbnail} />
          ) : (
            <Thumbnail large source={my} style={styles.thumbnail} />
          )}
          <Col>
            <Text style={styles.myTitle}>{nickName}</Text>
            <Text style={{ fontSize: 15, color: "#7c7c7c" }}>{email}</Text>
            {image ? (
              <TouchableOpacity style={{ marginTop: 20 }} onPress={removeImage}>
                <Text style={styles.remove}>사진 지우기</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity style={{ marginTop: 20 }} onPress={pickImage}>
                <Text style={styles.remove}>사진 고르기</Text>
              </TouchableOpacity>
            )}
          </Col>
        </Grid>

        <Grid style={styles.categorycontainer}>
          <Col size={3} style={styles.categoryCol}>
            <TouchableOpacity
              style={{ alignItems: "center" }}
              onPress={goSomeWhere}>
              <Image style={styles.categoryImage} source={category1} />
              <Text style={styles.category}>즐겨찾는{"\n"}커리큘럼</Text>
            </TouchableOpacity>
          </Col>
          <Col size={3} style={styles.categoryCol}>
            <TouchableOpacity
              style={{ alignItems: "center" }}
              onPress={() => {
                navigation.navigate("BookmarkContents");
              }}>
              <Image style={styles.categoryImage} source={category2} />
              <Text style={styles.category}>
                즐겨찾는{"\n"} {""} 콘텐츠
              </Text>
            </TouchableOpacity>
          </Col>
          <Col size={3} style={(styles.categoryCol, { borderRightWidth: 0 })}>
            <TouchableOpacity
              style={{ alignItems: "center" }}
              onPress={goSomeWhere}>
              <Image style={styles.categoryImage} source={category3} />
              <Text style={styles.category}>공지</Text>
            </TouchableOpacity>
          </Col>
        </Grid>
        <Grid style={{ alignItems: "center", paddingTop: "5%" }}>
          <Row style={styles.tabsRow}>
            <TouchableOpacity
              style={{ width: "100%" }}
              onPress={() => {
                navigation.navigate("KidsAlarmPage");
              }}>
              <Text>자녀 일정 알리미</Text>
              <Image style={styles.tabsArrow} source={tabsIcon} />
            </TouchableOpacity>
          </Row>
          <Row style={styles.tabsRow}>
            <TouchableOpacity style={{ width: "100%" }} onPress={goSomeWhere}>
              <Text>자주 묻는 질문</Text>
              <Image style={styles.tabsArrow} source={tabsIcon} />
            </TouchableOpacity>
          </Row>
          <Row style={styles.tabsRow}>
            <TouchableOpacity style={{ width: "100%" }} onPress={goSomeWhere}>
              <Text>당나귀에 문의하기</Text>
              <Image style={styles.tabsArrow} source={tabsIcon} />
            </TouchableOpacity>
          </Row>
          <Row style={styles.tabsRow}>
            <TouchableOpacity style={{ width: "100%" }} onPress={goSomeWhere}>
              <Text>나의 당나귀 정보</Text>
              <Image style={styles.tabsArrow} source={tabsIcon} />
            </TouchableOpacity>
          </Row>
        </Grid>
        <TouchableOpacity style={{ marginTop: 20 }} onPress={logoutFunc}>
          <Text style={styles.logout}>로그아웃</Text>
        </TouchableOpacity>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  thumbnail: {
    alignSelf: "center",
    width: 110,
    height: 110,
    marginLeft: "15%",
    marginRight: "10%",
  },
  myTitle: {
    fontSize: 15,
    fontWeight: "700",
  },
  categorycontainer: {
    paddingVertical: "4%",
    marginTop: "15%",
    backgroundColor: "#5DE2A2",
    marginHorizontal: 14,
    borderRadius: 8,
  },
  category: {
    fontWeight: "700",
    color: "white",
    fontSize: 15,
  },
  categoryImage: { marginVertical: "10%" },
  categoryCol: {
    alignItems: "center",
    borderRightWidth: 2,
    borderRightColor: "#a6efcc",
  },
  tabsRow: {
    alignItems: "center",
    marginVertical: "3%",
    padding: "2%",
    paddingLeft: "5%",
    width: "90%",
    borderBottomWidth: 1.5,
    borderBottomColor: "#dbdbdb",
  },
  tabsArrow: {
    position: "absolute",
    right: 10,
  },
  logout: {
    alignSelf: "center",
    padding: 10,
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 10,
  },
  remove: {
    alignSelf: "flex-start",
    fontSize: 15,
    padding: 5,
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 10,
  },
});
