import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import MentorDescCard from "../components/MentorDescCard"
import CheckBoxLine from "../components/CheckBoxLine"

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export default function Mentoring() {
  const fiveSenList = ["공부하라고 잔소리하지 않는다.","친구와 비교하지 않는다.","다양하게 잘 먹인다.","아이를 깨울 때 화내지 않는다.","부모도 집에서 조용히 공부한다."]


  
  useEffect(()=>{
    
  },[])
  

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
        <View style={styles.header}>
          <Text style={styles.headerTitle}>
              MY 멘토
            </Text>
        </View>

        <ScrollView style={styles.mainContainer}>
          <View style={styles.boxContainer}>
            <MentorDescCard/>
          </View>

          <View style={styles.boxContainer}>
            <Text style={styles.titleText}>1월 21일, 5계명 얼만큼 지켰나요?</Text>
            {fiveSenList.map((data,i)=>{
              return <CheckBoxLine key={i} text={data}/>
            })}
            
          </View>

          <View style={styles.boxContainer}>
            <Text style={styles.titleText}>수능 D-day별 추천 행동</Text>
            <View style={styles.tagBox}><Text style={styles.tagText}>100일 전</Text></View>
            <Text style={styles.normalText}>전반적인 건강관리를 해줍니다. 여드름이 심해졌으면 피부과, 눈이 뻑뻑하다 하면 안과, 팔이 저리거나 어깨가 결리면 한의원 등. 피곤하면 비타민, 건강보조식품을 챙겨주기 위해 불편한 게 있는지 체크합니다.</Text>
            <View style={styles.tagBox}><Text style={styles.tagText}>30일 전</Text></View>
            <Text style={styles.normalText}>수능 전까지 컨디션 조절할 수 있게 이제까지 좋아하던 음식 위주로 해주었습니다. 좋아하는 음식 외에 부담스럽거나 새로운 음식, 혹은 인스턴트 음식 등은 먹이지 않았습니다. 수능 당일 도시락을 싸주기 위해 식사량, 식사 종류 등을 조절하기도 했습니다. 학교에서 권장한 대로 점심 도시락을 싸주기 시작했습니다.</Text>
            <View style={styles.tagBox}><Text style={styles.tagText}>10일 전</Text></View>
            <Text style={styles.normalText}>최대한 말을 줄이고, 아이에게 거슬릴 행동을 하지 않습니다. 말을 안하는 게 최고입니다. 뭘 먹어라, 이거 해라, 이런 요구도 하지 않고, 수능 전에 선물받은 찹쌀떡, 엿, 초콜릿을  강요하지도 않고 본인이 먹고 싶을 때 먹을 수 있게 잘 보이는 곳에 둡니다.</Text>
          </View>

          <View style={styles.boxContainer}>
            <Text style={styles.titleText}>내신 D-day별 추천 행동</Text>
            <View style={[styles.tagBox, styles.tagBox2]}><Text style={styles.tagText}>1주 전</Text></View>
            <Text style={styles.normalText}>중간, 기말고사는 자주 있기 때문에 경조사, 가족 모임 등과 겹칠 때가 많은데, 굳이 데려가지 않고 아이가 시간을 충분히 자율적으로 쓸 수 있게 돕습니다. 그리고 집안에 손님 안들이는 등 환경을 조성했고, 아이가 많이 피곤해하면 마사지를 해주곤 했습니다.</Text>
            <View style={[styles.tagBox, styles.tagBox2]}><Text style={styles.tagText}>1일 전</Text></View>
            <Text style={styles.normalText}>아이가 깨워달라는 시간에 잘 깨워주고, 밥 달라고 하면 잘 챙겨주고, 집에서 조용히 있습니다.</Text>
            
          </View>

          <View style={styles.boxContainer}>
            <Text style={styles.titleText}>스트레스 푸는 법</Text>
            <View style={[styles.tagBox, styles.tagBox3]}><Text style={styles.tagText}>첫째</Text></View>
            <Text style={styles.normalText}>사우나에 가서 땀 빼고 냉탕 온탕 왔다갔다한다.</Text>
            <View style={[styles.tagBox, styles.tagBox3]}><Text style={styles.tagText}>둘째</Text></View>
            <Text style={styles.normalText}>남편과 맥주 한잔을 하되, 떠들면 아이 공부에 방해가 되니까 아무말 없이 마신다.</Text>
            <View style={[styles.tagBox, styles.tagBox3]}><Text style={styles.tagText}>셋째</Text></View>
            <Text style={styles.normalText}>원래 불교는 아니었지만, 마인드 컨트롤을 위해 주말마다 근처 아무 절이나 가서 108배를 한다.</Text>
          </View>

          <View style={styles.boxContainer}>
            <Text style={styles.titleText}>후회하는 일이 있다면?</Text>
            <Text style={styles.normalText}>밤에 자녀가 스트레스를 풀려고 늘 야식을 먹었는데, 그때 조금은 자제할 걸 후회했어요. 일년 동안 애가 15KG 가 쪄서 마지막엔 입을 수 있는 옷이 츄리닝 밖에 없어졌어요. 너무 많이 해서 먹이긴 했어요.</Text>
          </View>

          
        </ScrollView>
        <View style={styles.footer}></View>
    
    
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: windowWidth,
    height: windowHeight,
    backgroundColor: "#fff",
  },
  header: {
    height: 50,
    marginTop:20,
    justifyContent: "center",
    alignContent: "center",
    marginBottom: 10,
    borderBottomColor: "#e2e2e2",
    borderBottomWidth: 1
  },
  headerTitle:{
    fontSize: 20,
    textAlign: "center",
    color: "#000"
  },
  footer: {
    height: 10,
    backgroundColor: "#e2e2e2"
  },

  mainContainer:{
    flex:1,
  },
  boxContainer:{
    marginBottom: 10
  },
  titleText:{
    fontWeight: "700",
    fontSize: 17,
    padding:10
  },
  tagBox:{
    backgroundColor:"#86A8E7",
    width: 80,
    justifyContent:"center",
    alignItems:"center",
    padding:5,
    borderRadius: 20,
    marginHorizontal: 10
  },
  tagBox1:{
    backgroundColor:"#86A8E7",
  },
  tagBox2:{
    backgroundColor:'#7F7FD5',
    width: 70,
  },
  tagBox3:{
    backgroundColor:"#4d4d4d",
    width: 60,
  },
  tagText:{
    color:"#fff"
  },
  normalText:{
    fontSize:13,
    padding:10,
    paddingHorizontal: 15
  }


});