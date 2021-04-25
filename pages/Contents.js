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
  Alert,
} from "react-native";
import { Header, Left, Right, Body } from "native-base";
import { Ionicons } from "@expo/vector-icons";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function Contents({ navigation }) {
  const [bookmark, setBookmark] = useState(false);
  const title = "자녀가 시무룩해 보여요";
  const story =
    "무슨 일이 있는건지, 요즘따라 아이가 시무룩해 보여서 걱정이에요. 몸에 좋다는 영양제를 다 챙겨줘도 무기력해보이고, 체력 문제인지 다른 고민이 있는건지 모르겠어요. 물어봐도 자기도 잘 모르겠다며 대답을 피하는 아이 때문에 답답해요. 아이가 왜 이러는 걸까요?";
  const content = [
    {
      title: "교우관계는 어떤지 물어봐주세요",
      contents: [
        {
          title: "교우관계가 힘든 이유: 소속 욕구",
          url: [
            "https://firebasestorage.googleapis.com/v0/b/d-care-app.appspot.com/o/contents%2FCK5%2F1.png?alt=media&token=01bf4b0a-3735-4c88-bef3-8994a187634d",
            "https://firebasestorage.googleapis.com/v0/b/d-care-app.appspot.com/o/contents%2FCK5%2F2.png?alt=media&token=70f077f2-4423-4fc6-af89-afd93da08386",
            "https://firebasestorage.googleapis.com/v0/b/d-care-app.appspot.com/o/contents%2FCK5%2F3.png?alt=media&token=48f1a4b1-b8cc-4b33-af44-9f57b35c4222",
            "https://firebasestorage.googleapis.com/v0/b/d-care-app.appspot.com/o/contents%2FCK5%2F4.png?alt=media&token=c6ff20f7-5707-4afa-a46a-e881825ff0cb",
            "https://firebasestorage.googleapis.com/v0/b/d-care-app.appspot.com/o/contents%2FCK5%2F5.png?alt=media&token=86dc2711-7998-4650-905d-2677305d3c62",
            "https://firebasestorage.googleapis.com/v0/b/d-care-app.appspot.com/o/contents%2FCK5%2F6.png?alt=media&token=0e565795-f72d-42ba-a01b-f5550ea2789d",
            "https://firebasestorage.googleapis.com/v0/b/d-care-app.appspot.com/o/contents%2FCK5%2F7.png?alt=media&token=0e880a4e-b157-49f8-917d-02997398fb89",
          ],
        },
        {
          title: "전문가의 도움도 권유하세요",
          url: [
            "https://firebasestorage.googleapis.com/v0/b/d-care-app.appspot.com/o/contents%2FCA5%2F1.png?alt=media&token=ee30d0e0-9c93-49b6-b382-f85f9310ac0f",
            "https://firebasestorage.googleapis.com/v0/b/d-care-app.appspot.com/o/contents%2FCA5%2F2.png?alt=media&token=167c7f76-9afc-416d-84f3-93beb2d722ac",
            "https://firebasestorage.googleapis.com/v0/b/d-care-app.appspot.com/o/contents%2FCA5%2F3.png?alt=media&token=68b50a9f-50a2-4e01-8849-38275cfd6d20",
            "https://firebasestorage.googleapis.com/v0/b/d-care-app.appspot.com/o/contents%2FCA5%2F4.png?alt=media&token=a6da425e-9993-4060-9d2a-516ada2e0d6d",
          ],
        },
      ],
    },
    {
      title: "자존감이 낮아 힘들 수도 있어요",
      contents: [
        {
          title: "자존감이 낮으면 왜 힘들까요?",
          url: [
            "https://firebasestorage.googleapis.com/v0/b/d-care-app.appspot.com/o/contents%2FCK3%2F1.png?alt=media&token=91984b18-519d-4ec6-b35b-4deb884c7abf",
            "https://firebasestorage.googleapis.com/v0/b/d-care-app.appspot.com/o/contents%2FCK3%2F2.png?alt=media&token=ef4a0dc8-9c58-4150-af9d-6bab760bd20f",
            "https://firebasestorage.googleapis.com/v0/b/d-care-app.appspot.com/o/contents%2FCK3%2F3.png?alt=media&token=b4910d8a-c823-4fb5-b4db-d737304e41ee",
            "https://firebasestorage.googleapis.com/v0/b/d-care-app.appspot.com/o/contents%2FCK3%2F4.png?alt=media&token=206bfde6-b4c3-4280-9d3e-aa0297613253",
            "https://firebasestorage.googleapis.com/v0/b/d-care-app.appspot.com/o/contents%2FCK3%2F5.png?alt=media&token=7f0d20e2-a3ed-4f20-940c-8c2737e659ca",
            "https://firebasestorage.googleapis.com/v0/b/d-care-app.appspot.com/o/contents%2FCK3%2F6.png?alt=media&token=49d40d9c-0225-47a9-acfe-890eddcbac73",
            "https://firebasestorage.googleapis.com/v0/b/d-care-app.appspot.com/o/contents%2FCK3%2F7.png?alt=media&token=96ed7e80-ac9f-4337-b0d6-c259cc8b28aa",
            "https://firebasestorage.googleapis.com/v0/b/d-care-app.appspot.com/o/contents%2FCK3%2F8.png?alt=media&token=eeb6bd7a-aaf1-41be-9afc-13a10abecf5f",
          ],
        },
        {
          title: "자존감을 측정해 보아요",
          url: [
            "https://firebasestorage.googleapis.com/v0/b/d-care-app.appspot.com/o/contents%2FCA3%2F1.png?alt=media&token=17aedf87-f98b-48b8-83ab-f2ba2b7b5fc1",
            "https://firebasestorage.googleapis.com/v0/b/d-care-app.appspot.com/o/contents%2FCA3%2F2.png?alt=media&token=61e893ed-275f-4101-ab2b-0bdcbdc046f6",
            "https://firebasestorage.googleapis.com/v0/b/d-care-app.appspot.com/o/contents%2FCA3%2F3.png?alt=media&token=7846c9b8-21e3-4d24-aefd-4ab0e5ba4b50",
            "https://firebasestorage.googleapis.com/v0/b/d-care-app.appspot.com/o/contents%2FCA3%2F4.png?alt=media&token=0edab6b0-1b10-48fc-b0dd-553be3c58ed6",
            "https://firebasestorage.googleapis.com/v0/b/d-care-app.appspot.com/o/contents%2FCA3%2F5.png?alt=media&token=a0382ef8-4a83-44bb-8141-7505c44e0790",
            "https://firebasestorage.googleapis.com/v0/b/d-care-app.appspot.com/o/contents%2FCA3%2F6.png?alt=media&token=8af45019-2820-4172-af8e-aba9feaefc85",
            "https://firebasestorage.googleapis.com/v0/b/d-care-app.appspot.com/o/contents%2FCA3%2F7.png?alt=media&token=852cda3a-8889-4bec-92bd-f11106a166ba",
          ],
        },
      ],
    },
    {
      title: "불안, 조급, 실망 등의 감정을 다스려요",
      contents: [
        {
          title: "교우관계로 힘든 아이를 위한 명언 모음",
          url: [
            "https://firebasestorage.googleapis.com/v0/b/d-care-app.appspot.com/o/contents%2FH3%2F%ED%9E%90%EB%A7%81%20%EC%8D%B8%EB%84%A4%EC%9D%BC%20%EB%AA%A8%EC%9D%8C.png?alt=media&token=f3599e5c-eb33-4aa0-98d2-9f7d05ab2863",
            "https://firebasestorage.googleapis.com/v0/b/d-care-app.appspot.com/o/contents%2FH3%2FH10.png?alt=media&token=7ed0414e-5cd5-45f5-b1a5-de505e5aea8e",
            "https://firebasestorage.googleapis.com/v0/b/d-care-app.appspot.com/o/contents%2FH3%2FH4.png?alt=media&token=f6b1661f-3a71-4ec2-8fc9-26d5672bc135",
            "https://firebasestorage.googleapis.com/v0/b/d-care-app.appspot.com/o/contents%2FH3%2FH5.png?alt=media&token=9e600a8e-7c9a-465d-a34d-48451babebd8",
            "https://firebasestorage.googleapis.com/v0/b/d-care-app.appspot.com/o/contents%2FH3%2FH6.png?alt=media&token=fa6179cb-a3d1-4981-95f7-0ab8dda383c2",
            "https://firebasestorage.googleapis.com/v0/b/d-care-app.appspot.com/o/contents%2FH3%2FH9.png?alt=media&token=3cab9686-c6ca-4c11-b96f-a340cbe7fad7",
          ],
        },
        {
          title: "칼럼 <좋은 삶, 침해받지 않을 권리>",
          url: [
            "https://firebasestorage.googleapis.com/v0/b/d-care-app.appspot.com/o/contents%2FCH4%2F1.png?alt=media&token=cca64dfc-7ce1-4b3e-a8da-f51c845039b3",
            "https://firebasestorage.googleapis.com/v0/b/d-care-app.appspot.com/o/contents%2FCH4%2F2.png?alt=media&token=4307a4e9-3101-4402-b950-5c9f338357b3",
            "https://firebasestorage.googleapis.com/v0/b/d-care-app.appspot.com/o/contents%2FCH4%2F3.png?alt=media&token=113df1a6-1f57-4fd9-b8b2-1c94b6927be9",
            "https://firebasestorage.googleapis.com/v0/b/d-care-app.appspot.com/o/contents%2FCH4%2F4.png?alt=media&token=2a8f7ee1-b931-402c-9a02-7d99acb43821",
            "https://firebasestorage.googleapis.com/v0/b/d-care-app.appspot.com/o/contents%2FCH4%2F5.png?alt=media&token=83b91bbf-d994-4901-9cbf-c8c01bd208b0",
            "https://firebasestorage.googleapis.com/v0/b/d-care-app.appspot.com/o/contents%2FCH4%2F6.png?alt=media&token=bed18c00-5e47-41be-a33c-5f0642fe182d",
            "https://firebasestorage.googleapis.com/v0/b/d-care-app.appspot.com/o/contents%2FCH4%2F7.png?alt=media&token=1133dfd3-03d9-40f0-be99-2e506254f694",
            "https://firebasestorage.googleapis.com/v0/b/d-care-app.appspot.com/o/contents%2FCH4%2F8.png?alt=media&token=7ba9005a-521e-4c9e-9974-f1150e9297be",
            "https://firebasestorage.googleapis.com/v0/b/d-care-app.appspot.com/o/contents%2FCH4%2F9.png?alt=media&token=4eb33f3c-159e-4190-8396-8bcbded7ddf6",
            "https://firebasestorage.googleapis.com/v0/b/d-care-app.appspot.com/o/contents%2FCH4%2F10.png?alt=media&token=1e51633c-fffe-40c6-b23c-c21a113e4c944",
          ],
        },
      ],
    },
  ];

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
        <Body />
        <Right>
          <TouchableOpacity
            style={{ marginRight: 10 }}
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
      <ScrollView
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Text style={styles.largeText}>{title}</Text>
        <Text
          style={{
            ...styles.smallText,
            fontSize: 13,
            textAlign: "center",
            paddingHorizontal: 20,
            paddingBottom: 30,
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

                {contents.map((data, j) => {
                  const [isVisible, setIsVisible] = useState(false);
                  const onToggle = () => {
                    setIsVisible(!isVisible);
                  };
                  const urlList = data.url;
                  return (
                    <>
                      <View
                        key={j}
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                          alignItems: "center",
                          borderBottomColor: "#e8e8e8",
                          borderBottomWidth: 1,
                          paddingHorizontal: 20,
                          paddingVertical: 10,
                        }}>
                        <Text style={styles.smallText}>{data.title}</Text>
                        <TouchableOpacity onPress={onToggle}>
                          {isVisible ? (
                            <Ionicons name="caret-up" size={28} color="black" />
                          ) : (
                            <Ionicons
                              name="chevron-forward-outline"
                              size={28}
                              color="black"
                            />
                          )}
                        </TouchableOpacity>
                      </View>
                      {isVisible ? (
                        <>
                          <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={true}
                            scrollEventThrottle={1}
                            pagingEnabled={true}
                            indicatorStyle={"black"}
                            style={{ paddingBottom: 10, marginBottom: 30 }}>
                            {urlList.map((data, i) => {
                              return (
                                <ImageBackground
                                  key={i}
                                  source={{ url: data }}
                                  resizeMode="cover"
                                  style={styles.imageBox}></ImageBackground>
                              );
                            })}
                          </ScrollView>
                        </>
                      ) : (
                        <></>
                      )}
                    </>
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
    borderBottomColor: "grey",
    borderBottomWidth: 1,
  },
  smallText: {
    fontSize: 15,
    fontWeight: "300",
    paddingVertical: 10,
    paddingLeft: 20,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
  },
  imageBox: {
    width: windowWidth,
    height: windowWidth,
    marginBottom: 10,
  },
});
