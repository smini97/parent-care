import React, { useState } from "react";
import { StyleSheet, Linking, Alert, Image } from "react-native";
import { Container, Content, Text, Form, Button } from "native-base";
const bImage = require("../assets/icon.png");
import ItemInput from "../components/ItemInput";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { registration } from "../config/firebaseFunctions";

export default function SignInPage({ navigation }) {
  const [nickName, setNickName] = useState("");
  const [nickNameError, setNickNameError] = useState("");

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [passwordConfirmError, setPasswordConfirmError] = useState("");

  const [birth, setBirth] = useState("");
  const [birthError, setBirthError] = useState("");

  const [sex, setSex] = useState("");
  const [sexError, setSexError] = useState("");

  const [number, setNumber] = useState("");
  const [numberError, setNumberError] = useState("");

  // const onValueChange = async (item, selectedValue) => {
  //   try {
  //     await AsyncStorage.setItem(item, selectedValue);
  //   } catch (error) {
  //     console.log("AsyncStorage error: " + error.message);
  //   }
  // };

  // const userSignin = (email, password) => {
  //   if (email && password) {
  //     // if validation fails, value will be null
  //     fetch("https://api.dangnagwi.lomy.info/auths/signin", {
  //       method: "POST",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         email: email,
  //         password: password,
  //       }),
  //     })
  //       .then((response) => response.json())
  //       .then((responseData) => {
  //         const currentUser = firebase.auth().currentUser;
  //         const db = firebase.firestore();
  //         db.collection("users").doc(currentUser.uid).update({
  //           token: responseData.token,
  //         });
  //       });
  //   }
  // };

  // const userSignUp = (email, password) => {
  //   if (email && password) {
  //     // if validation fails, value will be null
  //     fetch("https://api.dangnagwi.lomy.info/auths/signup", {
  //       method: "POST",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         email: email,
  //         password: password,
  //       }),
  //     });
  //   }
  // };

  const goPolicy = () => {
    navigation.navigate("SignupPolicy");
  };

  const doSignUp = async () => {
    //Email 로그인 버튼을 누를 때 실행되는 함수
    //관리하는 상태 값을 확인

    if (nickName == "") {
      setNickNameError("닉네임을 입력해주세요");
      return false;
    } else {
      setNickNameError("");
    }
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
    if (passwordConfirm == "") {
      setPasswordConfirmError("비밀번호 확인을 입력해주세요");
      return false;
    } else {
      setPasswordConfirmError("");
    }
    if (password !== passwordConfirm) {
      setPasswordConfirmError("비밀번호가 서로 일치 하지 않습니다.");
      return false;
    } else {
      setPasswordConfirmError("");
    }

    if (birth == "") {
      setBirthError("생년월일을 입력해주세요");
      return false;
    } else {
      setBirthError("");
    }

    if (sex == "") {
      setSexError("성별을 입력해주세요");
      return false;
    } else {
      setSexError("");
    }

    if (number == "") {
      setNumberError("쿠폰번호를 입력해주세요");
      return false;
    } else {
      setNumberError("");
    }

    await registration(nickName, birth, sex, number, email, password);
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
            title={"닉네임"}
            type={"email"}
            error={nickNameError}
            setFunc={setNickName}
          />
          <ItemInput
            title={"이메일 주소"}
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
          <ItemInput
            title={"비밀번호 확인"}
            type={"password"}
            error={passwordConfirmError}
            setFunc={setPasswordConfirm}
          />
          <ItemInput
            title={"생년월일(1990-01-01)"}
            type={"email"}
            error={birthError}
            setFunc={setBirth}
          />
          <ItemInput
            title={"성별"}
            type={"email"}
            error={sexError}
            setFunc={setSex}
          />
          <ItemInput
            title={"초대쿠폰 시리얼 넘버"}
            type={"email"}
            error={numberError}
            setFunc={setNumber}
          />
        </Form>

        <Button full style={styles.emailSignIn} onPress={doSignUp}>
          <Text style={{ fontSize: 18 }}>가입하기</Text>
        </Button>

        <Text>회원 가입 후,</Text>
        <Text style={{ textDecorationLine: "underline" }} onPress={goPolicy}>
          이용약관 & 개인정보정책
        </Text>
        <Text>동의하는 것으로 간주합니다.</Text>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {},
  backgroundImage: {
    alignSelf: "center",
    flex: 0.15,
    width: "35%",
    marginTop: "15%",
    paddingVertical: "5%",
    borderRadius: 50,
  },
  content: {
    alignItems: "center",
    marginTop: -15,
    marginVertical: 90,
    borderRadius: 20,
  },

  form: {
    width: 300,
    borderRadius: 10,
    paddingBottom: 20,
    paddingRight: 20,
    paddingLeft: 20,
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
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: "#56c1ff",
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
