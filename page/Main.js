import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Modal, Dimensions, ScrollView, TouchableOpacity, Linking, ImageBackground, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import mainImg from "../assets/main.jpg"
import { Ionicons } from '@expo/vector-icons';
import MainMissionModal from "../components/MainMissionModal"


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export default function Main({navigation}) {

  
  const [contents, setContents] = useState([])
  const prepare = async () => {
    await setContents(["모의고사 성적이 기대하던 수준에 미치지 않을 때", "성적을 숨기거나 말하지 않으려고 할 때", "자녀에게 특정 진로를 강요하고 싶을 때", "자녀가 희망하는 과가 마음에 들지 않을 때", "친구 자녀가 좋은 대학에 합격한 소식을 들었을 때", "자녀가 아침에 잘 일어나지 못할 때", "정신적 문제를 심각하게 호소할 때", "지속적으로 폭식을 하거나 음식을 거의 섭취하지 않을 때", "갱년기로 우울해지고 힘들 때", "공부 잘하는 다른 형제자매와 비교하게 될 때", "일이 너무 바빠서 자녀를 잘 챙겨주지 못하는 시기일 때", "자녀에게 집착하게 되고, 자녀와 심리적으로 분리되기 어려울 때", "자녀에게 욱해서 마음에도 없는 나쁜 말을 하고 후회할 때", "재수나 N수를 해서 공부를 더 하고 싶다고 하여 혼란스러울 때"])
  }
  useEffect(()=>{
    prepare();
  }, [])


  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
    
      <ScrollView style={styles.mainContainer}>

      <View style={{flexDirection: "row", justifyContent:"space-between", alignItems: "flex-end"}}>
        <Text style={styles.smallText}>수능 D-123  기말고사 D-38</Text>
        <MainMissionModal/>
        
      </View>
        
      <View style={styles.boxContainer}>
        <Text style={styles.largeText}>오늘의 추천 콘텐츠</Text>
        <View style={styles.centeredView}>
          <ImageBackground source={mainImg} style={{width: windowWidth/1.02, height: windowWidth/1.5, resizeMode: "cover", justifyContent:"space-between"}} imageStyle={{borderRadius: 10}}>
            <Text style={{...styles.largeText, color: "#fff", paddingTop:20}}>모의고사 성적이 기대하던{"\n"}수준에 미치지 못했을 때</Text>
            <View style={{flexDirection: "row", justifyContent:"space-between", padding:20}}>
              <Text style={{...styles.smallText, color:"#fff"}}>1/10</Text>
              <TouchableOpacity>
              <Text style={{...styles.smallText, backgroundColor:"#fff", borderRadius: 10, overflow:"hidden"}}>보러가기</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
      </View>

      <View style={styles.boxContainer}>
        <Text style={styles.largeText}>카테고리별 콘텐츠</Text>
        <TouchableOpacity style={{...styles.categoryBox, width:windowWidth}} onPress={() => navigation.navigate("Situation", {
        contents:contents})}>
          <Ionicons name="heart-circle" size={30} color="#30475e" />
          <Text style={styles.smallText}>고민별 마음다스리기</Text>
        </TouchableOpacity>
        <View style={{flexDirection:"row"}}>
          <View style={styles.categoryBox}>
          <Ionicons name="headset" size={30} color="#30475e" />
            <Text style={styles.smallText}>오디오북</Text>
          </View>
          <View style={styles.categoryBox}>
          <Ionicons name="cafe" size={30} color="#30475e" />
            <Text style={styles.smallText}>명상</Text>
          </View>
          <View style={styles.categoryBox}>
          <Ionicons name="at-circle" size={30} color="#30475e" />
            <Text style={styles.smallText}>명언</Text>
          </View>
          <View style={styles.categoryBox}>
          <Ionicons name="library" size={30} color="#30475e" />
            <Text style={styles.smallText}>심리학</Text>
          </View>
        </View>
      </View>



      </ScrollView>

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: windowWidth,
    height: windowHeight,
  },
  centeredView:{
    justifyContent: "center",
    alignItems:"center"
  },
  mainContainer:{
    flex:1,
    width: windowWidth,
    height: windowHeight,
    marginTop: 30
  },
  
  boxContainer:{
    marginBottom: 30
  },
  largeText:{
    color:"#000",
    fontSize: 24,
    fontWeight: "700",
    padding: 10,
    paddingHorizontal: 20,
  },
  smallText:{
    fontSize: 15,
    fontWeight: "400",
    padding: 10,
    paddingHorizontal: 15
  },

  categoryBox:{
    width: windowWidth/4,
    height: windowWidth/4,
    justifyContent:"center",
    alignItems:"center",
    borderColor: "#e8e8e8",
    borderWidth: 1,
  }

});