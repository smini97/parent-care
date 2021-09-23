import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from "react-native";
import {
  Container,
  Content,
  Header,
  Left,
  Right,
  Body,
  Form,
} from "native-base";
import { Col, Grid } from "react-native-easy-grid";
import { Ionicons } from "@expo/vector-icons";
import * as firebase from "firebase";
import "firebase/firestore";

import ItemInput from "../components/ItemInput";
import DateTimePicker from "@react-native-community/datetimepicker";
// import RNPickerSelect from "react-native-picker-select";

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
  const [sexError, setSexError] = useState("");

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

  const doKidsInfo = async () => {
    //Email 로그인 버튼을 누를 때 실행되는 함수
    //관리하는 상태 값을 확인

    if (name == "") {
      setNameError("아름을 입력해주세요");
      Alert.alert(nameError);
      return false;
    } else {
      setNameError("");
    }

    if (event == "") {
      setNameError("아름을 입력해주세요");
      Alert.alert(eventError);
      return false;
    } else {
      setNameError("");
    }

    if (date == "") {
      setBirthError("생년월일을 입력해주세요");
      Alert.alert(birthError);
      return false;
    } else {
      setBirthError("");
    }

    if (alarm == "") {
      setSexError("성별을 선택해주세요");
      Alert.alert(sexError);
      return false;
    } else {
      setSexError("");
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

            {/* <RNPickerSelect
              onValueChange={(value) => setName(value)}
              items={mykids}
            /> */}
            <Text style={styles.inputTitle}>이벤트</Text>
            <ItemInput type={"name"} error={nameError} setFunc={setName} />

            <Text style={styles.inputTitle2}>날짜</Text>
            <TouchableOpacity
              style={{ marginTop: 50 }}
              onPress={showDatepicker}>
              <Text style={styles.dateInput}>{dateValue}</Text>
            </TouchableOpacity>
            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={birth}
                mode="date"
                is24Hour={true}
                display="spinner"
                onChange={onChange}
              />
            )}

            <Text style={styles.inputTitle2}>알람</Text>
          </Form>

          <TouchableOpacity style={{ marginTop: "50%" }} onPress={doKidsInfo}>
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
