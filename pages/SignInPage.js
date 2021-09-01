import React, { useState, useEffect } from "react";
import { StyleSheet, Linking, Alert, Image } from "react-native";
import { Container, Content, Text, Form, Button } from "native-base";
const bImage = require("../assets/LoadingImg.png");
import ItemInput from "../components/ItemInput";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { signIn } from "../config/firebaseFunctions";

export default function SignInPage({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  useEffect(() => {
    navigation.addListener("beforeRemove", (e) => {
      e.preventDefault();
    });
  }, []);

  const onValueChange = async (item, selectedValue) => {
    try {
      await AsyncStorage.setItem(item, selectedValue);
    } catch (error) {
      console.log("AsyncStorage error: " + error.message);
    }
  };

  const userSignin = (email, password) => {
    if (email && password) {
      // if validation fails, value will be null
      fetch("https://api.dangnagwi.lomy.info/auths/signin", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      })
        .then((response) => response.json())
        .then(async (responseData) => {
          await onValueChange("token", responseData.token);
          Alert.alert("Signin Success!");
          navigation.navigate("TabNavigator");
        });
    }
  };
  const goSignUP = () => {
    navigation.navigate("SignupPage");
  };
  const doSignIn = () => {
    //Email 로그인 버튼을 누를 때 실행되는 함수
    //관리하는 상태 값을 확인
    if (email == "") {
      setEmailError("이메일을 입력해주세요");
      return false;
    } else {
      setEmailError("");
    }
    if (password == "") {
      setPasswordError("비밀번호를 입력해주세요");
      return false;
    } else {
      setPasswordError("");
    }
    signIn(email, password, navigation);
  };
  const setEmailFunc = (itemInputEmail) => {
    //이메일 상태값을 관리하는 함수
    setEmail(itemInputEmail);
  };
  const setPasswordFunc = (itemInputPassword) => {
    //패스워드 상태값을 관리하는 함수
    setPassword(itemInputPassword);
  };

  return (
    <Container style={styles.container}>
      <Image source={bImage} style={styles.backgroundImage} />
      <Content contentContainerStyle={styles.content} scrollEnabled={false}>
        <Form style={styles.form}>
          <ItemInput
            title={"이메일"}
            type={"email"}
            error={emailError}
            setFunc={setEmailFunc}
          />
          <ItemInput
            title={"비밀번호"}
            type={"password"}
            error={passwordError}
            setFunc={setPasswordFunc}
          />
        </Form>

        <Text
          style={{
            color: "blue",
            textDecorationLine: "underline",
            marginLeft: "17%",
            marginTop: "-4%",
          }}
          onPress={() => navigation.navigate("비번찾기")}>
          비밀번호를 잊어버리셨나요?
        </Text>

        <Button full style={styles.emailSignIn} onPress={doSignIn}>
          <Text style={{ fontSize: 18 }}>로그인</Text>
        </Button>

        <Text
          style={{ textDecorationLine: "underline", marginTop: "5%" }}
          onPress={goSignUP}>
          아직 당나귀 계정이 없으신가요?
        </Text>

        <Text style={{ marginTop: "13%" }}>아이디가 기억나지 않으세요?</Text>
        <Text
          style={{ textDecorationLine: "underline" }}
          onPress={() => navigation.navigate("고객센터")}>
          고객센터에 문의하기
        </Text>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {},
  backgroundImage: {
    alignSelf: "center",
    flex: 0.5,
    width: "50%",
    marginTop: "20%",
  },
  content: {
    flex: 1,
    alignItems: "center",
    marginTop: 0,
    marginVertical: 90,
    borderRadius: 20,
  },

  form: {
    width: 300,
    borderRadius: 10,
    paddingBottom: 20,
    paddingRight: 20,
    paddingLeft: 20,
    marginTop: 10,
  },

  label: {
    color: "#fff",
  },
  input: {
    color: "#fff",
  },
  emailSignIn: {
    alignSelf: "center",
    width: 250,
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: "#56c1ff",
  },
});
