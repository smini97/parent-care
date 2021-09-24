import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native";
import {
  Container,
  Content,
  Header,
  Left,
  Right,
  Body,
  Title,
} from "native-base";
import { Row, Grid } from "react-native-easy-grid";
import { Ionicons } from "@expo/vector-icons";
import * as firebase from "firebase";
import "firebase/firestore";

const tabsIcon = require("../assets/circle.png");
const kidsIcon = require("../assets/trash.png");

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function KidsAlarmPage({ navigation, route }) {
  const [mykids, setMykids] = useState([]);
  const [schedule, setSchedule] = useState([]);

  const currentUser = firebase.auth().currentUser;
  const db = firebase.firestore();

  const getKidsInfo = async () => {
    const q = await db
      .collection("kids")
      .where("userId", "==", currentUser.uid)
      .get();
    const kidsArray = q.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setMykids(kidsArray);
  };

  const removeKids = (id) => {
    db.collection("kids").doc(id).delete();
  };

  const getSchedule = async () => {
    const s = await db
      .collection("schedule")
      .where("userId", "==", currentUser.uid)
      .get();
    const scheduleArray = s.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setSchedule(scheduleArray);
  };

  const removeSchedule = (id) => {
    db.collection("schedule").doc(id).delete();
  };

  useEffect(() => {
    getKidsInfo();
    db.collection("kids").onSnapshot((snapshot) => {
      const kidsArray2 = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMykids(kidsArray2);
    });
    getSchedule();
    db.collection("schedule").onSnapshot((snapshot) => {
      const scheduleArray2 = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setSchedule(scheduleArray2);
    });
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
        <Left style={{ flex: 1 }}>
          <TouchableOpacity
            style={{ marginLeft: 10 }}
            onPress={() => {
              navigation.goBack();
            }}>
            <Ionicons name="arrow-back" size={28} color="black" />
          </TouchableOpacity>
        </Left>
        <Body style={{ flex: 1 }}>
          <Text
            style={{
              width: windowWidth / 1.3,
              fontSize: 15,
              fontWeight: "bold",
            }}>
            자녀 일정 알리미
          </Text>
        </Body>
        <Right />
      </Header>

      <Container>
        <Content>
          <Grid style={{ alignItems: "center", paddingTop: "5%" }}>
            <Row style={styles.tabsRow}>
              <Text>자녀정보</Text>
              <TouchableOpacity
                style={{ width: "100%", paddingBottom: "3%" }}
                onPress={() => {
                  navigation.navigate("KidsInfoPage");
                }}>
                <Image style={styles.tabsArrow} source={tabsIcon} />
              </TouchableOpacity>
            </Row>
            {mykids.map((doc, i) => {
              return (
                <Row style={styles.kidsRow} key={i}>
                  <Text>{doc.name}</Text>
                  <Text style={{ marginLeft: "5%", color: "#707070" }}>
                    {doc.birthday.slice(5, 11) + " 출생"}
                  </Text>
                  <TouchableOpacity
                    style={{ width: "100%", paddingBottom: "3%" }}
                    onPress={() => {
                      removeKids(doc.id);
                    }}>
                    <Image style={styles.kidstrash} source={kidsIcon} />
                  </TouchableOpacity>
                </Row>
              );
            })}
            <Row style={styles.tabsRow2}>
              <Text>자녀일정</Text>
              <TouchableOpacity
                style={{ width: "100%", paddingBottom: "3%" }}
                onPress={() => {
                  navigation.navigate("KidsSchedule");
                }}>
                <Image style={styles.tabsArrow} source={tabsIcon} />
              </TouchableOpacity>
            </Row>
            {schedule.map((doc, i) => {
              return (
                <Row style={styles.kidsRow} key={i}>
                  <Text>{doc.eventName}</Text>
                  <Text style={{ marginLeft: "5%", color: "#707070" }}>
                    {doc.date}
                  </Text>
                  <TouchableOpacity
                    style={{ width: "100%", paddingBottom: "3%" }}
                    onPress={() => {
                      removeSchedule(doc.id);
                    }}>
                    <Image style={styles.scheduletrash} source={kidsIcon} />
                  </TouchableOpacity>
                </Row>
              );
            })}
          </Grid>
        </Content>
      </Container>
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

  tabsRow: {
    alignItems: "center",
    marginVertical: "8%",
    padding: "2%",
    paddingLeft: "5%",
    width: "90%",
    borderBottomWidth: 1.5,
    borderBottomColor: "#dbdbdb",
  },
  tabsRow2: {
    alignItems: "center",
    marginTop: "30%",
    marginBottom: "8%",
    padding: "2%",
    paddingLeft: "5%",
    width: "90%",
    borderBottomWidth: 1.5,
    borderBottomColor: "#dbdbdb",
  },
  tabsArrow: {
    position: "absolute",
    right: 50,
  },
  kidstrash: {
    position: "absolute",
    right: "50%",
  },
  scheduletrash: {
    position: "absolute",
    right: "65%",
  },
  kidsRow: {
    alignItems: "center",
    padding: "2%",
    paddingLeft: "5%",
    width: "90%",
    marginBottom: "3%",
  },
});
