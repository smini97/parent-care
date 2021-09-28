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
import GoBackButton from "../components/GoBackButton";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import { useEffect } from "react/cjs/react.development";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function MissionHistory({ navigation }) {
  const [today, setToday] = useState("");
  const [selectedDate, setSelectedDate] = useState(today);
  const [markedDatesObj, setMarkedDatesObj] = useState({});
  const dateArr = [
    "2021-09-01",
    "2021-09-02",
    "2021-09-03",
    "2021-09-05",
    "2021-09-06",
    "2021-09-07",
    "2021-09-08",
    "2021-09-12",
    "2021-09-14",
    "2021-09-16",
    "2021-09-19",
    "2021-09-21",
    "2021-09-22",
  ];

  const getToday = () => {
    var date = new Date();
    var year = date.getFullYear();
    var month = ("0" + (1 + date.getMonth())).slice(-2);
    var day = ("0" + date.getDate()).slice(-2);

    setToday(year + "-" + month + "-" + day);
  };

  const getMarkedDates = async () => {
    const dateObj = {};
    dateObj[today] = { selected: true, selectedColor: "#5de2a2" };
    await dateArr.map((d, i) => {
      dateObj[d] = { marked: true, dotColor: "#5de2a2", activeOpacity: 0 };
    });
    setMarkedDatesObj(dateObj);
  };

  const onSelectDate = async (day) => {
    const newSelectedDate = day.dateString;
    const dateObj = markedDatesObj;
    await delete dateObj[selectedDate]["selected"];
    dateObj[newSelectedDate] = { selected: true, selectedColor: "#5de2a2" };
    await setMarkedDatesObj(dateObj);
    await setSelectedDate(newSelectedDate);
  };

  useEffect(() => {
    getToday();
    getMarkedDates();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Header transparent>
        <Left>
          <GoBackButton navigation={navigation} />
        </Left>
        <Body>
          <Text style={{ fontSize: 18 }}>히스토리</Text>
        </Body>
        <Right />
      </Header>

      <ScrollView>
        <Calendar
          current={today}
          onDayPress={(day) => {
            onSelectDate(day);
            console.log("selected day", day.dateString);
          }}
          markedDates={markedDatesObj}
        />
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
