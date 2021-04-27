import React from "react";
import {
  StyleSheet,
  Text,
  Image,
  View,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const CommunityPostLine = ({ post, navigation }) => {
  const onSendData = () => {
    navigation.navigate("CommunityPostView", {
      post: post,
      navigation: navigation,
    });
  };

  return (
    <TouchableOpacity
      style={styles.lineBox}
      onPress={() => {
        navigation.push("CommunityPostView", {
          post,
          navigation: navigation,
        });
      }}>
      <Text style={styles.lineText} ellipsizeMode={"tail"} numberOfLines={1}>
        {post.title}
      </Text>
      <Text style={styles.tagText} ellipsizeMode={"tail"} numberOfLines={1}>
        {post.post}
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}>
        <Text style={styles.tagText}>3분전 | 조회 8</Text>
        <Text style={styles.tagText}>좋아요 3 | 댓글 1</Text>
      </View>
    </TouchableOpacity>
  );
};
export default CommunityPostLine;

const styles = StyleSheet.create({
  lineBox: {
    height: 80,
    padding: 10,
    paddingHorizontal: 20,
    justifyContent: "center",
    borderBottomWidth: 1,
    borderColor: "#e2e2e2",
  },
  lineText: {
    fontSize: 15,
  },
  tagText: {
    fontSize: 13,
    color: "grey",
    marginTop: 5,
  },
});
