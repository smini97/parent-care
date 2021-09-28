import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Alert,
  Image,
} from "react-native";
import { Row, Col, Grid } from "react-native-easy-grid";
import { Container, Content, Text, Thumbnail } from "native-base";
// import { StatusBar } from "expo-status-bar";
// import { Ionicons } from "@expo/vector-icons";
// import { TouchableHighlight } from "react-native-gesture-handler";
// import AsyncStorage from "@react-native-async-storage/async-storage";
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
  // const userLogout = async () => {
  //   try {
  //     await AsyncStorage.removeItem("token").then(
  //       navigation.navigate("SignInPage")
  //     );
  //     Alert.alert("Logout Success!");
  //   } catch (error) {
  //     console.log("AsyncStorage error: " + error.message);
  //   }
  // };
  const [nickName, setNickName] = useState("");
  const [email, setEmail] = useState("");

  const getUserData = async () => {
    const currentUser = firebase.auth().currentUser;
    const db = firebase.firestore();
    let userRef = await db.collection("users").doc(currentUser.uid);
    let data = await userRef.get().then((doc) => {
      return doc.data();
    });

    setNickName(data.nickName);
    setEmail(data.email);
  };

  const logoutFunc = () => {
    logout(navigation);
  };

  const goSomeWhere = () => {
    navigation.navigate("BookmarkContents");
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <Container>
      <Content>
        <Grid style={{ alignItems: "center", marginTop: "30%" }}>
          <Thumbnail large source={my} style={styles.thumbnail} />
          <Col>
            <Text style={styles.myTitle}>{nickName}</Text>
            <Text style={{ fontSize: 15, color: "#7c7c7c" }}>{email}</Text>
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
});
