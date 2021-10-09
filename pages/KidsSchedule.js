import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import {
  Container,
  Content,
  Header,
  Left,
  Right,
  Body,
  Form,
  Item,
  Picker,
  Input,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import * as firebase from "firebase";
import "firebase/firestore";

import DateTimePicker from "@react-native-community/datetimepicker";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function KidsSchedule({ navigation, route }) {
  const currentUser = firebase.auth().currentUser;
  const db = firebase.firestore();

  const [show, setShow] = useState(false);

  const [date, setDate] = useState(new Date());
  const [name, setName] = useState("");
  const [event, setEvent] = useState("");
  const [alarm, setAlarm] = useState("");
  const [mykids, setMykids] = useState([]);

  const [nameError, setNameError] = useState("");
  const [dateError, setDateError] = useState("");
  const [eventError, setEventError] = useState("");
  const [alarmError, setAlarmError] = useState("");

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
  };

  const showDatepicker = () => {
    setShow(true);
  };

  const getKidsInfo = async () => {
    const q = await db
      .collection("kids")
      .where("userId", "==", currentUser.uid)
      .get();
    const kidsArray = q.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    const selectArray = kidsArray.map((data) => ({
      label: data.name,
      value: data.name,
    }));
    setMykids(selectArray);
  };

  const pushSchedule = async (name, event, dateValue, alarm, navigation) => {
    await db.collection("schedule").add({
      userId: currentUser.uid,
      name: name,
      eventName: event,
      date: dateValue,
      noticeBefore: alarm,
    });

    navigation.navigate("KidsAlarmPage");
  };

  let month = date.getMonth() + 1;
  let dateValue =
    date.getFullYear() + "년" + month + "월" + date.getDate() + "일";

  const doKidsSchedule = async () => {
    //Email 로그인 버튼을 누를 때 실행되는 함수
    //관리하는 상태 값을 확인

    if (name == "") {
      setNameError("아름을 입력해주세요");
      return false;
    } else {
      setNameError("");
    }

    if (event == "") {
      setEventError("이벤트를 입력해주세요");
      return false;
    } else {
      setEventError("");
    }

    if (date == "") {
      setDateError("날짜를 입력해주세요");
      return false;
    } else {
      setDateError("");
    }

    if (alarm == "") {
      setAlarmError("알람을 설정해주세요");
      return false;
    } else {
      setAlarmError("");
    }

    await pushSchedule(name, event, dateValue, alarm, navigation);
  };

  useEffect(() => {
    getKidsInfo();
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
        <Left style={{ flex: 1.5 }}>
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
            설정
          </Text>
        </Body>
        <Right />
      </Header>
      <Container>
        <Content>
          <Form style={styles.form}>
            <Text style={styles.inputTitle}>아이선택</Text>
            <Item picker>
              <Picker
                mode="dropdown"
                style={{
                  width: 50,
                  height: 60,
                  marginVertical: 20,
                  marginBottom: -10,
                }}
                placeholder="Select your kids"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={name}
                onValueChange={(value) => setName(value)}>
                {mykids.map((kid, i) => {
                  return (
                    <Picker.Item key={i} label={kid.label} value={kid.value} />
                  );
                })}
              </Picker>
            </Item>
            <Item style={{ borderColor: "transparent", marginBottom: "-10%" }}>
              <Text style={{ color: "deeppink" }}>{nameError}</Text>
            </Item>
            <Text style={styles.inputTitle}>이벤트</Text>
            <Item last>
              <Input
                style={{
                  fontSize: 15,
                  marginBottom: -10,
                  marginVertical: 30,
                }}
                onChangeText={(text) => {
                  setEvent(text);
                }}
                placeholder="이벤트를 입력해주세요"
              />
            </Item>
            <Item style={{ borderColor: "transparent", marginBottom: "-10%" }}>
              <Text style={{ color: "deeppink" }}>{eventError}</Text>
            </Item>

            <Text style={styles.inputTitle2}>날짜</Text>
            <TouchableOpacity
              style={{ marginTop: 40 }}
              onPress={showDatepicker}>
              <Text style={styles.dateInput}>{dateValue}</Text>
            </TouchableOpacity>
            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode="date"
                is24Hour={true}
                display="spinner"
                onChange={onChange}
              />
            )}
            <Item style={{ borderColor: "transparent", marginBottom: "-10%" }}>
              <Text style={{ color: "deeppink" }}>{dateError}</Text>
            </Item>

            <Text style={styles.inputTitle2}>알람</Text>
            <Item picker>
              <Picker
                mode="dropdown"
                style={{
                  width: 50,
                  height: 60,
                  marginVertical: 10,
                  marginBottom: -10,
                }}
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={alarm}
                onValueChange={(value) => setAlarm(value)}>
                <Picker.Item label="5일 전부터" value="5" />
                <Picker.Item label="4일 전부터" value="4" />
                <Picker.Item label="3일 전부터" value="3" />
                <Picker.Item label="2일 전부터" value="2" />
                <Picker.Item label="1일 전부터" value="1" />
              </Picker>
            </Item>
            <Item style={{ borderColor: "transparent", marginBottom: "-10%" }}>
              <Text style={{ color: "deeppink" }}>{alarmError}</Text>
            </Item>
          </Form>

          <TouchableOpacity
            style={{ marginTop: "50%" }}
            onPress={doKidsSchedule}>
            <Text style={styles.addButton}>추가하기</Text>
          </TouchableOpacity>
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
  inputTitle: {
    color: "#5de2a2",
    marginTop: "10%",
    marginBottom: "-5%",
  },

  inputTitle2: {
    color: "#5de2a2",
    marginTop: "20%",
  },

  dateInput: {
    color: "#4A4A4A",
  },

  form: {
    paddingHorizontal: "10%",
  },

  addButton: {
    alignSelf: "center",
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#5de2a2",
    color: "white",
  },
  sexInput: {
    color: "black",
    alignSelf: "center",
    padding: 5,
    paddingHorizontal: 26,
    borderRadius: 5,
    borderColor: "gray",
    borderWidth: 1,
  },
});
