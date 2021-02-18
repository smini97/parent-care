import React from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, TouchableOpacity, Linking, ImageBackground, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import CategoryButton from "../components/CategoryButton"
import CategorySmallButton from "../components/CategorySmallButton"




const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export default function Main({navigation}) {
  const d_day = '125';

  const todaySentence = "삶은 너무나 빠르기 때문에, 잠시 멈춰 돌아볼 시간을 가지지 않는다면 소중한 순간들을 놓치고 말 것이다."
  const todaySentenceWriter = "Ferris Bueller"
  
  const categoryList = ["parent", "kid", "conflict", "test"];
  const cateOptions ={
    parent: {
      category: "부모",
      emoji: "rest",
      titleMain: "부모라서\n 힘들어요",
      title: "부모라서 힘들어요",
      desc: "부모는 슈퍼맨이어야만 할까요?\n부모도 당연히 힘들 수 있어요.\n지칠 수도 있어요.\n공부하는 수험생만 힘든 게 아니라,\n케어하는 부모 역할도 아주 어려운 거예요.\n따분하고, 불안하고, 조급한 일상 속에서\n마음의 위안을 얻고 가세요."
    },
    kid: {
      category: "자녀",
      emoji: "frowno",
      titleMain: "내 아이가\n 힘들어요",
      title: "내 아이가 힘들어요",
      desc: "우리 아이를 오래동안 봐온 만큼\n내가 가장 잘 안다고 생각했는데,\n수험생이 된 후로 아이 대하기 참 어렵죠.\n중요한 시기이니 잘 해주고 싶은데, 어려워요.\n공부 잘했으면 하는 욕심이 들면서도,\n스트레스 받는 모습이 걱정되기도 하죠."
    },
    conflict: {
      category: "갈등",
      emoji: "rocket1",
      titleMain: "갈등이\n생겼어요",
      title: "갈등이 생겼어요",
      desc: "수험생활로 예민해진 아이,\n덩달아 조급하고 불안해진 부모,\n싸우고 싶지 않아도 자꾸 다투게 되나요?\n자연스러운 현상이니까 걱정말아요.\n그러나 갈등이 오래, 반복적으로 지속되어선 안되겠죠.\n어떻게 갈등을 해결하고 계신가요?"
    },
    test: {
      category: "진로성적",
      emoji: "Trophy",
      titleMain: "시험·성적\n 진로 관련",
      title: "시험·성적·진로 관련",
      desc: "아이가 성적을 잘 받았으면 하는 욕심이 들어요.\n멋진 진로를 목표로 삼았으면,\n하고 바라기도 해요.\n'건강하기만 해다오' 하던 게 엊그제같은데..\n사람 마음이 참 아이러니하죠.\n시험, 성적, 진로 관련한 상황들에 대비하는 마음비법을 소개합니다."
    },
    
  };

  const emotionList = ["불안","우울","실망","분노","집착","그외"];
  
  return (
    <View style={styles.container}>
      
      <StatusBar style="light" />
    
    <ScrollView style={styles.mainContainer}>
      <LinearGradient
          // Background Linear Gradient
          colors={['#7F7FD5', '#86A8E7', '#fff']}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            height: windowHeight,
          }}
        />
        <View style={styles.introBox}> 
          <Text style={{textAlign: "center", color:"#fff", marginBottom: 30, fontSize: 14, fontWeight: "500", fontStyle: "italic"}}>안녕하세요, 수민맘님!</Text>
          <Text style={{textAlign: "center", color:"#fff", marginBottom: 70, fontSize: 21, fontWeight: "700"}}>오늘은 수능 {d_day}일 전{"\n"}1학기 중간고사 12일 전{"\n"}입니다</Text>
          <Text style={{textAlign: "center", color: "#fff", marginBottom: 5, fontSize: 13, fontWeight: "500"}}>{todaySentence}</Text>
          <Text style={{textAlign:"center", color:"#fff"}}>- {todaySentenceWriter}</Text>
        </View>

        <View style={styles.whiteContainer}>

          <View style={styles.boxContainer}>
            <View><Text style={styles.titleText}>무엇이 고민이신가요?</Text></View>
            <View style={styles.categoryBox}>
              {categoryList.map((data,i)=>{
                const category = cateOptions[data].category;
                const cateTitleMain = cateOptions[data].titleMain;
                const cateTitle = cateOptions[data].title;
                const cateEmoji = cateOptions[data].emoji;
                const cateDesc = cateOptions[data].desc
                      return <CategoryButton key={i} category={category} titleMain={cateTitleMain} title={cateTitle} emoji={cateEmoji} desc={cateDesc} navigation={navigation}/>

                    })}
            </View>
          </View>

          <View style={styles.boxContainer}>
            <View><Text style={styles.titleText}>감정별 마음명상</Text></View>
            <View style= {styles.emotionBox}>
              {emotionList.map((data,i) =>{
                return <CategorySmallButton key={i} topic={data} num={i}/>
              })}
            </View>
          </View>

          <View style={styles.boxContainer}>
            <View><Text style={styles.titleText}>오늘의 수험 뉴스</Text></View>
            <View style={styles.newsBox}>
              <TouchableOpacity onPress={ ()=>{ Linking.openURL('https://www.donga.com/news/article/all/20201105/103824898/1')}}>
                <Text style={styles.newsText} numberOfLines={1} ellipsizeMode="tail">▶  올해 수능 부정행위 유형 추가 사항 살펴보니…‘이것 조심’</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={ ()=>{ Linking.openURL('http://news.kbs.co.kr/news/view.do?ncd=5063791&ref=A')}}>
                <Text style={styles.newsText} numberOfLines={1} ellipsizeMode="tail">▶  유은혜 “수능 이후 약 40만명 대학별 고사 응시…자가격리자는 별도 시험장서 응시”</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={ ()=>{ Linking.openURL('http://news.heraldcorp.com/view.php?ud=20201204000885')}}>
                <Text style={styles.newsText} numberOfLines={1} ellipsizeMode="tail">▶  수능 끝…‘정시 전략’ 어떻게 짜야 할까?</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={ ()=>{ Linking.openURL('https://www.sedaily.com/NewsView/1ZBKDJN7DJ')}}>
                <Text style={styles.newsText} numberOfLines={1} ellipsizeMode="tail">▶  "놀 곳도 쉴 틈도 없어요" 2021수능 수험생 한숨</Text>
              </TouchableOpacity>
              

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
  mainContainer:{
    flex:1,
    width: windowWidth,
    height: windowHeight,
  },
  introBox:{
    padding:5,
    margin:15,
    marginTop: 100,
    marginBottom: 30,
  },
  whiteContainer:{
    flex:1,
    backgroundColor: "#fff",
    borderTopRightRadius:40,
    borderTopLeftRadius:40, 
    paddingBottom: 20
  },
  
  categoryBox:{
    flex:1,
    padding:10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap:"wrap",
  },
  boxContainer:{
    marginBottom:10,
  },
  titleText:{
    color:"#000",
    fontSize: 16,
    fontWeight: "700",
    margin:5,
    marginLeft: 15,
    marginTop:30,
    marginBottom: 10,
  },
  emotionBox:{
    flexDirection: "row",
    flexWrap: "wrap",
    
    justifyContent: "center"
  },
  newsBox:{
    padding:10,
    marginLeft:15,
    marginRight:15,
    backgroundColor:"#fff",
    borderRadius:20,
    borderWidth:0.5,
    borderColor:"lightgrey",
    shadowColor: 'lightgrey',
        shadowOffset: {
          width: 5,
          height: 5,
        },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 5,
  },
  newsText:{
    margin: 10,
    marginBottom: 10,
    fontSize: 13
  }


});