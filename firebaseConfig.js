import * as firebase from 'firebase/app';

// 사용할 파이어베이스 서비스 주석을 해제합니다
//import "firebase/auth";
//import "firebase/database";
import "firebase/firestore";
//import "firebase/functions";
import "firebase/storage";

// Initialize Firebase
//파이어베이스 사이트에서 봤던 연결정보를 여기에 가져옵니다
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyARo1Uyk74UzN3jBHHWFwolmC8xKj5_Tqk",
    authDomain: "d-care-app.firebaseapp.com",
    databaseURL: "https://d-care-app-default-rtdb.firebaseio.com",
    projectId: "d-care-app",
    storageBucket: "d-care-app.appspot.com",
    messagingSenderId: "481004587172",
    appId: "1:481004587172:web:9dafcd2dcf84414b9dbe31",
    measurementId: "G-KZM2MJ2F8V"
  };

  
//사용 방법입니다. 
//파이어베이스 연결에 혹시 오류가 있을 경우를 대비한 코드로 알아두면 됩니다.
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}


export const db = firebase.firestore()
export const storage = firebase.storage()
