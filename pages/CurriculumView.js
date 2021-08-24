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
  Alert,
} from "react-native";
import { Header, Left, Right, Body, Title } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import CurriculumToContentLine from "../components/CurriculumToContentLine";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function CurriculumView({ navigation }) {
  const [bookmark, setBookmark] = useState(false);

  const mission = [
    "하루 한 번 격려의 말 하기",
    "등교할 때마다 '사랑해'라고 말하기",
    "매일 한 번 포옹하기",
  ];

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
            {title}
          </Text>
        </Body>
        <Right />
      </Header>
      <ScrollView
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Text
          style={{
            ...styles.smallText,
            fontSize: 14,
            textAlign: "center",
            padding: 40,
          }}>
          "{story}"
        </Text>

        {content.map((data, i) => {
          let title = data.title;
          let contents = data.contents;
          return (
            <>
              <View
                key={i}
                style={{ width: windowWidth, justifyContent: "flex-start" }}>
                <View
                  style={{
                    backgroundColor: "rgb(247,247,247)",
                    paddingVertical: 5,
                  }}>
                  <Text style={styles.largeText}>{title}</Text>
                </View>

                {contents.map((content, j) => {
                  return (
                    <SituationViewLine
                      key={j}
                      navigation={navigation}
                      content={content}
                    />
                  );
                })}
              </View>
            </>
          );
        })}

        <View
          style={{
            width: windowWidth,

            justifyContent: "flex-start",
          }}>
          <View
            style={{
              backgroundColor: "rgb(247,247,247)",
              paddingVertical: 5,
            }}>
            <Text style={styles.largeText}>
              아직도 답답하세요?{"\n"}이런 미션을 추천할게요
            </Text>
          </View>

          <View style={{ marginBottom: 50 }}>
            {mission.map((data, i) => {
              const [isChecked, setIsChecked] = useState(false);
              const onCheck = () => {
                setIsChecked(!isChecked);
                if (isChecked == false) {
                  Alert.alert(
                    "미션으로 등록되었습니다!",
                    "매일 실천하시길 응원합니다.",
                    [{ text: "OK", onPress: () => console.log("OK Pressed") }],
                    { cancelable: false }
                  );
                }
              };
              return (
                <>
                  <View
                    key={i}
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      borderBottomColor: "#e8e8e8",
                      borderBottomWidth: 1,
                      paddingHorizontal: 20,
                      paddingVertical: 5,
                    }}>
                    <Text style={styles.smallText}>{data}</Text>
                    <TouchableOpacity onPress={onCheck}>
                      {isChecked ? (
                        <Ionicons name="checkmark" size={32} color="#5de2a2" />
                      ) : (
                        <Ionicons name="add" size={32} color="black" />
                      )}
                    </TouchableOpacity>
                  </View>
                </>
              );
            })}
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
    fontSize: 17,
    fontWeight: "600",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  smallText: {
    fontSize: 15,
    fontWeight: "300",
    paddingVertical: 10,
    paddingLeft: 20,
  },
  imageBox: {
    width: windowWidth,
    height: windowWidth,
    marginBottom: 10,
  },
});
