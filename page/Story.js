import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { AntDesign } from '@expo/vector-icons';
import StoryBubbleRight from "../components/StoryBubbleRight"
import StoryBubbleLeft from "../components/StoryBubbleLeft"
import rawdata from "../situationdata.json";
import proImg from "../assets/icons/story_profile.png"

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export default function Story() {

  const question_title = "아이가 학원갈 때 잔뜩 꾸며요"
  const question_text = "아이가 학원을 갈 때 잔뜩 꾸미고 갑니다. 가뜩이나 시간은 금인데, 학원 가기전에 치장하고 있는 모습을 보면 답답합니다. 연애에 관심이 생긴 건지.. 대학 가서 연애 하라고 말하고 싶은데 어떻게 해야 할까요."
  const question_text_next = "지금까지는 공부 열심히 하고 대학에 가서 연애하라고 조언했어요. 아이가 엇나가지 않고 연애 대신 공부에 집중하기를 원합니다."
  const answer_text = "청소년기에 연애에 대한 관심이 증가하면서 나타나는 자연스러운 현상입니다. 아이의 욕망이 공부로 향할 수 있도록 도울 수 있습니다. 관심있는 상대가 있는지 등, 자녀에게 흥미로운 주제에서 시작하여, 어른이 된 후에 겪게 되는 더 넓은 세상에 대해 이야기나눠보는 것도 추천합니다."
  const answer_list = ["CK40", "CK37", "CA34", "CA32", "CK42"]
  const before_question_list = ["아이가 잠이 많아졌어요", "야식을 먹는 등 폭식이 심해졌어요", "집에 있으면 통 공부를 안해요", "살이 엄청 쪘어요", "가족 행사에 가기 싫어합니다"]
  function isAnswer(element)  {
    if(element.contents == "CK40"|| element.contents =="CK37"||element.contents =="CA34"||element.contents =="CA32"||element.contents =="CK42")  {
      return true;
    }
  }
  

  useEffect(()=>{
    console.log("*****사연라디오준비됐나요~")
  },[])
  
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
        <View style={styles.header}>
          <Text style={styles.headerTitle}>사연 라디오</Text>
        </View>

        <ScrollView style={styles.mainContainer}>
          <View style={styles.boxContainer}>
            <View><Text style={styles.titleText}>{question_title}</Text></View>

            <View style={styles.storyBox}>
              
              <View style={styles.questionBox}>
                <View style={styles.questionBubbleBox}>
                  <StoryBubbleRight text={question_text}/>
                  <StoryBubbleRight text={question_text_next}/>
                </View>
              </View>
              
              <View style={styles.answerBox}>
                <ImageBackground source={proImg} style={styles.profileImg}>
                </ImageBackground>

                <View style={styles.answerBubbleBox}>
                <StoryBubbleLeft text={answer_text}/>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.boxContainer}>
            <View><Text style={styles.titleText}>사연 더하기 +</Text></View>
            <View style={styles.addBox}>
              <View style={styles.addTextBox}><Text>{'나만, 우리아이만 이렇게 힘들까...?\n이 역경을 어떻게 헤쳐나가면 좋지?\n이런 고민이 들 때,\n대치케어의 문을 두드리세요!'}</Text></View>
              <TouchableOpacity style={styles.addPlus}><AntDesign name="pluscircle" size={60} color="#86A8E7" /></TouchableOpacity>
            </View>
            
          </View>

          <View style={styles.boxContainer}>
            <View><Text style={styles.titleText}>지난 사연을 소개합니다</Text></View>
            <View style={styles.historyBox}>
              {before_question_list.map((data,i) => {
                return(<StoryBubbleRight key={i} text={data}/>)
                })}
            </View>
          </View>
            

          <View style={styles.footer}></View>
        </ScrollView>
    
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: windowWidth,
    backgroundColor: "#fff",
  },
  header: {
    height: 50,
    marginTop: 20,
    justifyContent: "center",
    alignContent: "center",
    marginBottom: 10,
    borderBottomColor: "#e2e2e2",
    borderBottomWidth: 1
  },
  headerTitle:{
    fontSize: 20,
    textAlign: "center",
    color: "#000",
  },
  footer: {
    height: 10,
    backgroundColor: "#e2e2e2"
  },
  mainContainer:{
    flex:1,
  },
  boxContainer:{
    marginBottom:10,
  },
  titleText:{
    color:"#000",
    fontSize: 20,
    fontWeight: "700",
    margin:5,
    marginLeft: 15,
    marginTop:10,
    marginBottom: 5,
  },
  storyBox:{
    borderRadius: 20,
    margin: 10,
    padding: 10,
    backgroundColor: "#fff",
    shadowColor: 'lightgrey',
        shadowOffset: {
          width: 5,
          height: 5,
        },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 5,
    paddingBottom: 15
  },
  questionBox:{
    marginBottom: 15,
    alignItems: "flex-end"
  },
  questionBubbleBox:{
    width: windowWidth/1.2,
  },
  answerBox:{
    flex:1,
    flexDirection: "row",
    paddingRight: 10
  },
  profileImg:{
    flex:1,
    width:50,
    height:50,
    marginRight: 15,
    borderRadius: 20
  },
  answerBubbleBox:{
    flex:7,
  },
  addBox: {
    flex:1,
    flexDirection: "row",
    borderRadius: 20,
    margin: 10,
    padding:15,
    backgroundColor: "#fff",
    shadowColor: 'lightgrey',
        shadowOffset: {
          width: 5,
          height: 5,
        },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  addTextBox:{
    flex:4,
    paddingLeft: 10
  },
  addPlus:{
    flex:1,
  },
  historyBox:{
    padding:15,
    
  }
  




});