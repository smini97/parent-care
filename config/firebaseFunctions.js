import * as firebase from "firebase";
import "firebase/firestore";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

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

    db.collection("users").doc(currentUser.uid).set({
      email: currentUser.email,
      nickName: nickName,
      birth: birth,
      sex: sex,
      number: number,
    });

    Alert.alert("회원가입 성공!");
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
    userSignin(email, password, navigation);
  } catch (err) {
    Alert.alert("로그인에 문제가 있습니다! ", err.message);
  }
}

const onValueChange = async (item, selectedValue) => {
  try {
    await AsyncStorage.setItem(item, selectedValue);
  } catch (error) {
    console.log("AsyncStorage error: " + error.message);
  }
};

const userSignin = (email, password, navigation) => {
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
        navigation.push("TabNavigator");
      });
  }
};

export async function logout(navigation) {
  try {
    await firebase.auth().signOut();
    await userLogout();
    navigation.push("SignInPage");
  } catch (err) {
    Alert.alert("로그 아웃에 문제가 있습니다! ", err.message);
  }
}

const userLogout = async () => {
  try {
    await AsyncStorage.removeItem("token").then();
    Alert.alert("로그아웃 성공!");
  } catch (error) {
    console.log("AsyncStorage error: " + error.message);
  }
};
