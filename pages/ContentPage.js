import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Header, Left, Right, Body } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import ContentLine from "../components/ContentLine";
import ContentTagSelect from "../components/ContentTagSelect";
import ContentCard from "../components/ContentCard";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function ContentPage({ navigation, route }) {
  const { category } = route.params;
  const contents = [
    {
      title: "교우관계가 힘든 이유: 소속 욕구",
      situation: "자녀가 시무룩해 보여요",
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
      situation: "자녀가 시무룩해 보여요",
      url: [
        "https://firebasestorage.googleapis.com/v0/b/d-care-app.appspot.com/o/contents%2FCA5%2F1.png?alt=media&token=ee30d0e0-9c93-49b6-b382-f85f9310ac0f",
        "https://firebasestorage.googleapis.com/v0/b/d-care-app.appspot.com/o/contents%2FCA5%2F2.png?alt=media&token=167c7f76-9afc-416d-84f3-93beb2d722ac",
        "https://firebasestorage.googleapis.com/v0/b/d-care-app.appspot.com/o/contents%2FCA5%2F3.png?alt=media&token=68b50a9f-50a2-4e01-8849-38275cfd6d20",
        "https://firebasestorage.googleapis.com/v0/b/d-care-app.appspot.com/o/contents%2FCA5%2F4.png?alt=media&token=a6da425e-9993-4060-9d2a-516ada2e0d6d",
      ],
    },
    {
      title: "자존감이 낮으면 왜 힘들까요?",
      situation: "자녀가 시무룩해 보여요",
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
      situation: "자녀가 시무룩해 보여요",
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
    {
      title: "교우관계로 힘든 아이를 위한 명언 모음",
      situation: "자녀가 시무룩해 보여요",
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
      situation: "자녀가 시무룩해 보여요",
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
  ];
  const [data, setData] = useState(contents);
  const tagList = ["오디오북", "명상", "명언", "심리학지식"];
  const [selectedTag, setSelectedTag] = useState(category);
  const setTagFunc = (d) => {
    setSelectedTag(d);
  };
  return (
    <View style={styles.container}>
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
          <TouchableOpacity style={{ marginRight: 10 }}>
            <Ionicons name="search-outline" size={24} color="black" />
          </TouchableOpacity>
        </Right>
      </Header>

      <ScrollView>
        <View style={styles.tagTab}>
          {tagList.map((data, i) => {
            const isFocused = data === selectedTag;
            return (
              <ContentTagSelect
                key={i}
                text={data}
                isFocused={isFocused}
                setTagFunc={setTagFunc}
              />
            );
          })}
        </View>

        <Text style={styles.topicText}>추천 {selectedTag}</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.cardScroll}>
          {data.map((data, i) => {
            if (i > 1) {
              return (
                <ContentCard
                  key={i}
                  content={data}
                  navigation={navigation}
                  thumbnail={data.url[0]}
                />
              );
            }
          })}
        </ScrollView>

        <Text style={styles.topicText}>지금 인기있는 {selectedTag}</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.cardScroll}>
          {data.map((data, i) => {
            if (i < 4) {
              return (
                <ContentCard
                  key={i}
                  content={data}
                  navigation={navigation}
                  thumbnail={data.url[0]}
                />
              );
            }
          })}
        </ScrollView>
        <Text style={styles.topicText}>{selectedTag} 전체 보기</Text>
        {data.map((data, i) => {
          return (
            <ContentLine
              key={i}
              content={data}
              navigation={navigation}
              thumbnail={data.url[0]}
            />
          );
        })}
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
  cardScroll: {
    paddingHorizontal: 15,
    paddingBottom: 30,
  },
  topicText: {
    fontWeight: "700",
    fontSize: 17,
    paddingHorizontal: 15,
    paddingBottom: 10,
  },
  tagTab: { flex: 1, flexDirection: "row", marginBottom: 20 },
});
