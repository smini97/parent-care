import React, { useState } from "react";
import { StyleSheet, ImageBackground, Alert } from "react-native";
import { Container, Content, Text, Form, Button } from "native-base";
const bImage = require("../assets/splash.png");
import ItemInput from "../components/ItemInput";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function SignInPage({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
          onValueChange("token", responseData.token);

          Alert.alert("Signin Success!");
        })
        .done(navigation.navigate("TabNavigator"));
    }
  };

  const doSignIn = () => {
    //Email 로그인 버튼을 누를 때 실행되는 함수
    //관리하는 상태 값을 확인
    userSignin(email, password);
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
      <ImageBackground source={bImage} style={styles.backgroundImage}>
        <Content contentContainerStyle={styles.content} scrollEnabled={false}>
          <Text style={styles.title}>
            <Text style={styles.highlite}>L</Text>omy
          </Text>
          <Form style={styles.form}>
            <ItemInput title={"이메일"} type={"email"} setFunc={setEmailFunc} />
            <ItemInput
              title={"비밀번호"}
              type={"password"}
              setFunc={setPasswordFunc}
            />
          </Form>

          <Button full style={styles.emailSignIn} onPress={doSignIn}>
            <Text>Email 로그인</Text>
          </Button>
        </Content>
      </ImageBackground>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {},
  backgroundImage: {
    width: "100%",
    height: "100%",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(52, 52, 52, 0.5)",
    margin: 40,
    marginVertical: 90,
    borderRadius: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "700",
    color: "#fff",
    textAlign: "center",
  },
  highlite: {
    fontSize: 40,
    fontWeight: "700",
    color: "skyblue",
    textAlign: "center",
  },
  form: {
    width: 250,
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
  snsSignUp: {
    alignSelf: "center",
    width: 250,
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: "#4667A5",
  },
  emailSignIn: {
    alignSelf: "center",
    width: 250,
    marginTop: 5,
    borderRadius: 10,
    backgroundColor: "#333",
  },
  emailSignUp: {
    alignSelf: "center",
    width: 250,
    marginTop: 5,
    borderRadius: 10,
    backgroundColor: "#eee",
    borderWidth: 1,
    borderColor: "#333",
  },
});
