import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Header, Left, Right, Body } from "native-base";
import { Ionicons } from "@expo/vector-icons";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function CommunityPostView({ route, navigation }) {
  const { post } = route.params;
  const reply =
    "고민이 많으시겠어요.. 저같은 경우엔 그냥 애 하고 싶은 대로 내버려둬요. 어차피 고등학교 가면 알아서들 하더라고요. ;;; 괜히 스트레스 받지 마시고.. 화이팅입니다 ㅜ";
  const rereply =
    "조언 감사합니다 ㅠ 안그래도 요즘 속이 갑갑했는데.. 조금 낫네요 ㅎ";
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
        <Right />
      </Header>

      <ScrollView style={{ paddingHorizontal: 10, marginBottom: 40 }}>
        <Text
          style={{ ...styles.lightText, textAlign: "right", paddingRight: 10 }}>
          2021-05-02 12:16 | 조회 63
        </Text>
        <View
          style={{
            borderBottomColor: "#e8e8e8",
            borderBottomWidth: 1,
            paddingBottom: 15,
          }}>
          <Text style={styles.largeText}>{post.title}</Text>
          <Text style={{ ...styles.smallText }}>{post.post}</Text>
        </View>

        <View style={{ borderBottomColor: "#e8e8e8", borderBottomWidth: 1 }}>
          <Text
            style={{
              ...styles.smallText,
              fontWeight: "700",
              paddingBottom: 0,
              fontSize: 14,
            }}>
            익명의 페어런트 1
          </Text>
          <Text style={styles.smallText}>{reply}</Text>
        </View>

        <View
          style={{
            borderBottomColor: "#e8e8e8",
            borderBottomWidth: 1,
            paddingLeft: 20,
          }}>
          <Text
            style={{
              ...styles.smallText,
              fontWeight: "700",
              paddingBottom: 0,
              fontSize: 14,
            }}>
            글쓴이 페어런트
          </Text>
          <Text style={styles.smallText}>{rereply}</Text>
        </View>

        <View style={{ borderBottomColor: "#e8e8e8", borderBottomWidth: 1 }}>
          <Text
            style={{
              ...styles.smallText,
              fontWeight: "700",
              paddingBottom: 0,
              fontSize: 14,
            }}>
            익명의 페어런트 1
          </Text>
          <Text style={styles.smallText}>{reply}</Text>
        </View>
        <View style={{ borderBottomColor: "#e8e8e8", borderBottomWidth: 1 }}>
          <Text
            style={{
              ...styles.smallText,
              fontWeight: "700",
              paddingBottom: 0,
              fontSize: 14,
            }}>
            익명의 페어런트 1
          </Text>
          <Text style={styles.smallText}>{reply}</Text>
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
    fontSize: 20,
    fontWeight: "600",
    marginTop: 15,
    padding: 10,
  },
  smallText: {
    fontSize: 15,
    fontWeight: "300",
    padding: 10,
  },
  lightText: {
    fontSize: 12,
    color: "grey",
    marginTop: 5,
  },
});
