import * as firebase from "firebase";
import "firebase/firestore";
import { Alert } from "react-native";

export async function registration(
  nickName,
  birth,
  sex,
  number,
  email,
  password,
  navigation
) {
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
    const currentUser = firebase.auth().currentUser;
    const db = firebase.firestore();

    userSignUp(email, password);

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
        .then((responseData) => {
          console.log(responseData.token);
          const currentUser = firebase.auth().currentUser;
          const db = firebase.firestore();
          db.collection("users").doc(currentUser.uid).set({
            email: currentUser.email,
            nickName: nickName,
            birth: birth,
            sex: sex,
            number: number,
            token: responseData.token,
          });
        });
    }

    Alert.alert("회원가입 성공!");
    navigation.push("TabNavigator");
  } catch (err) {
    Alert.alert("무슨 문제가 있는 것 같아요!", err.message);
  }
}

const userSignUp = (email, password) => {
  if (email && password) {
    // if validation fails, value will be null
    fetch("https://api.dangnagwi.lomy.info/auths/signup", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
  }
};

export async function signIn(email, password, navigation) {
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
    navigation.push("TabNavigator");
  } catch (err) {
    Alert.alert("로그인에 문제가 있습니다! ", err.message);
  }
}

export async function logout(navigation) {
  try {
    console.log("로그아웃!!");
    const currentUser = firebase.auth().currentUser;
    console.log(currentUser);
    await firebase.auth().signOut();
    navigation.push("SignInPage");
  } catch (err) {
    Alert.alert("로그 아웃에 문제가 있습니다! ", err.message);
  }
}
