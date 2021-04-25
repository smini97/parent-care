import React from "react";
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
import { TouchableHighlight } from "react-native-gesture-handler";
import CommunityPostLine from "../components/CommunityPostLine";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function Community({ navigation }) {
  const postList = [
    {
      title: "중간고사가 얼마 안남았는데 어쩌죠",
      post:
        "딸 아이는 중3이에요. 특목고를 따로 준비하는 건 아니지만, 혹시 몰라서 내신은 챙기고 있어요. 그런데 중간고사가 다가오는데.. 요즘 애랑 싸우기만 하네요 ㅠ. 애는 공부하기 싫다고, 고등학교 때부터 하겠다고 난리에요. 저는 너무 불안하죠… 어르고 달래긴 하는데 저도 욱해서 결국 고성이 오가게 되네요. 첫째는 알아서 잘 해서 내버려뒀는데, 둘째가 문제네요… 현명한 조언 부탁드립니다 ㅠㅠ.",
    },
    {
      title: "시험 직전이라 그런지 자꾸 싸우네요....",
      post:
        "애가 중2라서 이번 중간고사가 중학교 들어 처음 보는 시험이에요. 중1은 시험을 안봤으니.. 시험이 1년만인 셈이죠. 그래서 제가 더 조급한듯 해요. 자꾸 잔소리만 하게 되는데 어떡할까요..",
    },
    {
      title: "아이가 남자친구를 사귄 것 같아요",
      post:
        "물어봐도 솔직하게 대답을 안하니까 답답해서 글 써 봅니다. 딸 아이가 고등학교 2학년생인데 남자친구를 사귀는 것 같아요. 어느날부터 학원가기전에 집에 들러서 화장을 하던데 요즘은 학원 시간 한참 지나고 집에 돌아오네요. 지난 번에는 밤 11시에 집에 왔어요. 학원 마치고 독서실 들렀다 왔다는데 글쎄요.. 밤마다 전화하는 소리도 들리고 진짜 답답해 죽겠네요.",
    },
    {
      title: "6월 모의고사 준비는 다들 잘 되고 계신가요?",
      post:
        "곧 있으면 6월 모의고사인데요. 날씨가 따뜻해서인지 고3 아이 체력이 바닥이어서 그런지 요즘들어 특히 자네요. 집에서 공부할 때가 많은데 거의 맨날 자는 것 같아요. 학교에서도 졸 것 같은데 이대로 내버려둬도 괜찮을까요. 비타민이라도 챙겨 먹여야 할까요?",
    },
    {
      title: "중간고사가 얼마 안남았는데 어쩌죠",
      post:
        "딸 아이는 중3이에요. 특목고를 따로 준비하는 건 아니지만, 혹시 몰라서 내신은 챙기고 있어요. 그런데 중간고사가 다가오는데.. 요즘 애랑 싸우기만 하네요 ㅠ. 애는 공부하기 싫다고, 고등학교 때부터 하겠다고 난리에요. 저는 너무 불안하죠… 어르고 달래긴 하는데 저도 욱해서 결국 고성이 오가게 되네요. 첫째는 알아서 잘 해서 내버려뒀는데, 둘째가 문제네요… 현명한 조언 부탁드립니다 ㅠㅠ.",
    },
    {
      title: "시험 직전이라 그런지 자꾸 싸우네요....",
      post:
        "애가 중2라서 이번 중간고사가 중학교 들어 처음 보는 시험이에요. 중1은 시험을 안봤으니.. 시험이 1년만인 셈이죠. 그래서 제가 더 조급한듯 해요. 자꾸 잔소리만 하게 되는데 어떡할까요..",
    },
    {
      title: "아이가 남자친구를 사귄 것 같아요",
      post:
        "물어봐도 솔직하게 대답을 안하니까 답답해서 글 써 봅니다. 딸 아이가 고등학교 2학년생인데 남자친구를 사귀는 것 같아요. 어느날부터 학원가기전에 집에 들러서 화장을 하던데 요즘은 학원 시간 한참 지나고 집에 돌아오네요. 지난 번에는 밤 11시에 집에 왔어요. 학원 마치고 독서실 들렀다 왔다는데 글쎄요.. 밤마다 전화하는 소리도 들리고 진짜 답답해 죽겠네요.",
    },
    {
      title: "6월 모의고사 준비는 다들 잘 되고 계신가요?",
      post:
        "곧 있으면 6월 모의고사인데요. 날씨가 따뜻해서인지 고3 아이 체력이 바닥이어서 그런지 요즘들어 특히 자네요. 집에서 공부할 때가 많은데 거의 맨날 자는 것 같아요. 학교에서도 졸 것 같은데 이대로 내버려둬도 괜찮을까요. 비타민이라도 챙겨 먹여야 할까요?",
    },
  ];
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Header transparent>
        <Left></Left>
        <Body>
          <Text style={{ fontSize: 18 }}>커뮤니티</Text>
        </Body>
        <Right>
          <TouchableOpacity
            style={{ marginRight: 10 }}
            onPress={() => {
              navigation.goBack();
            }}>
            <Ionicons name="search-outline" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginRight: 10 }}>
            <Ionicons name="pencil" size={24} color="black" />
          </TouchableOpacity>
        </Right>
      </Header>

      <ScrollView>
        {postList.map((data, i) => {
          return (
            <CommunityPostLine key={i} post={data} navigation={navigation} />
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

  header: {
    height: 40,
    marginTop: 40,
    justifyContent: "center",
    alignContent: "center",
    borderBottomColor: "#e2e2e2",
    borderBottomWidth: 1,
  },
  headerTitle: {
    fontSize: 18,
    textAlign: "center",
    color: "#000",
    paddingHorizontal: 30,
  },
});
