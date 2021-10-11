import React from "react";
import { Text, Button } from "native-base";
import { StyleSheet, View, Image, ScrollView } from "react-native";

const bImage = require("../assets/icon.png");

export default function StartPage({ navigation }) {
  const goSignIn = () => {
    navigation.navigate("SignInPage");
  };

  return (
    <ScrollView style={{ backgroundColor: "#fff" }}>
      <View style={styles.container}>
        <Image source={bImage} style={styles.backgroundImage} />
        <Text style={styles.contents}>서울대생 100명에게 물었습니다.</Text>
        <Text style={styles.contents}>
          "무엇이 공부를 열심히 하게 만들었나요?"
        </Text>
        <Text style={styles.contents}>
          끊임없는 선행? 타고난 머리? 좋은 학원?
        </Text>
        <Text style={styles.contents}>부모의 경제력? 위대한 꿈? </Text>
        <Text style={styles.contents}>전부 아니었습니다.</Text>
        <Text style={styles.contents}>정답은 '부모의 지지, 애정, 자존감, </Text>
        <Text style={styles.contents}>적당한 방임'이었습니다.</Text>
        <Text style={styles.contents}> 부모는 이 정답을 몰랐을까요?</Text>
        <Text style={styles.contents}>
          아니죠, 사실 우리는 정답을 알고 있습니다.
        </Text>
        <Text style={styles.contents}>문제는 실천이 어려운거죠.</Text>
        <Text style={styles.contents}>
          내 아이지만, 이해가 안될 때가 참 많거든요.
        </Text>
        <Text style={styles.contents}>
          답답하고 화나는 걸 마냥 참을 수도 없고요.
        </Text>
        <Text style={styles.contents}>그래서 당나귀가 함께합니다.</Text>
        <Text style={styles.contents}>일명 현명한 부모 연습 프로젝트.</Text>
        <Text style={styles.contents}>
          아이를 이해할 수 있도록 돕는 전문지식과,
        </Text>
        <Text style={styles.contents}>
          갈등 상황별 대처 방식을 알려드릴게요.
        </Text>
        <Text style={styles.contents}> 함께 시작해볼래요? </Text>
        <Button full style={styles.emailSignIn} onPress={goSignIn}>
          <Text style={{ fontSize: 18 }}>네, 시작할게요!</Text>
        </Button>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: "20%",
  },
  backgroundImage: {
    alignSelf: "center",
    flex: 0.3,
    width: 100,
    height: 90,
    borderRadius: 20,
    paddingVertical: "10%",
  },
  emailSignIn: {
    alignSelf: "center",
    width: 250,
    marginTop: 10,
    borderRadius: 30,
    backgroundColor: "#56c1ff",
  },
  contents: {
    fontWeight: "bold",
    fontSize: 17,
    marginTop: "2%",
    alignSelf: "center",
  },
});
