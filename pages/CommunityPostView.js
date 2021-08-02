import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from "react-native";
import {
  Header,
  Left,
  Right,
  Body,
  Container,
  KeyboardAvoidingView,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import CommunityPostReaction from "../components/CommunityPostReaction";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function CommunityPostView({ route, navigation }) {
  const { post } = route.params;
  const [value, onChangeText] = useState("");
  const reply =
    "고민이 많으시겠어요.. 저같은 경우엔 그냥 애 하고 싶은 대로 내버려둬요. 어차피 고등학교 가면 알아서들 하더라고요. ;;; 괜히 스트레스 받지 마시고.. 화이팅입니다 ㅜ";
  const rereply =
    "조언 감사합니다 ㅠ 안그래도 요즘 속이 갑갑했는데.. 조금 낫네요 ㅎ";
  return (
    <Container>
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
            <Ionicons name="ellipsis-horizontal" size={24} color="black" />
          </TouchableOpacity>
        </Right>
      </Header>

      <ScrollView style={{ flex: 1, paddingHorizontal: 10 }}>
        <Text
          style={{
            ...styles.lightText,
            textAlign: "right",
            paddingRight: 10,
          }}>
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
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <CommunityPostReaction title={"힘내요"} emoji={"😭"} count={97} />
            <CommunityPostReaction title={"공감해요"} emoji={"🙂"} count={63} />
            <CommunityPostReaction title={"재밌어요"} emoji={"😆"} count={10} />
          </View>
        </View>
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 10,
            }}>
            <Text>댓글 4</Text>
            <Ionicons
              name="ellipsis-horizontal-outline"
              size={24}
              color="black"
            />
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
        </View>
      </ScrollView>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          padding: 10,
        }}>
        <TextInput
          rowSpan={5}
          bordered
          placeholder="댓글은 고민이 많은 당나귀에게 힘이 됩니다."
          style={styles.inputBox}
          value={value}
          onChangeText={(text) => onChangeText(text)}
        />
        <Ionicons name="send" size={28} color="#5de2a2" />
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: windowWidth,
  },

  largeText: {
    fontSize: 17,
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
  inputBox: {
    height: 40,
    borderRadius: 10,
    borderColor: "#e8e8e8",
    borderWidth: 1,
    padding: 10,
    alignItems: "center",
  },
});
