import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Contents() {
    const story = "오늘 아이가 시험을 보고 왔는데, 성적이 잘 안나왔나봐요. 잘봤는지 궁금해서 하루종일 전전긍긍했는데, 학교에서 돌아온 아이의 표정이 좋지가 않습니다.\n시험 잘 봤냐고 물어보고 이야기하고 싶은데, 아이에게 부담이 될 걸 알기에 망설이고 있어요. 성적 때문에 실망한 아이를 어떻게 북돋아줄 수 있을까요?"
    const content = [
        {title:"걱정마세요.\n원래 성적은 계단식으로 상승해요", contents: ["성적이 계단식으로 오른다고?", "성적 슬럼프를 마주하는법"]},
        {title:"모의고사는 모의고사일 뿐,\n지금 점수에 연연하지 않아도 돼요", contents: ["점수에 연연해 하지 않아도 되는 이유", "모의고사 점수를 잘 활용하는 법"]},
        {title:"인지적 오류를 주의하세요", contents: ["인지적 오류란?", "인지적 오류에 대처하는 법"]},
        {title:"불안, 조급, 실망 등의 감정을 다스려요", contents: ["불안할 때 보는 명상", "나태주의 <인생>", "힘이 되어줄 명언 5"]},
    ];
    const mission = ["상심이 클 아이 매일 다독여주기", "등교할 때마다 '사랑해'라고 말하기", "하루에 잔소리 세 번 참기"]
    const [bookmark, setBookmark] = useState(false)
    const onBookmark = () => {
      setBookmark(!bookmark)
  }
  return (
    <SafeAreaView style={styles.container}>
        <View style={{...styles.header, flexDirection: "row"}}>
              <Text style={{...styles.headerTitle, marginHorizontal: 50}}>성적이 낮게 나왔어요</Text>
              <TouchableOpacity onPress={onBookmark}>
              {bookmark? (<Ionicons name="bookmark" size={24} color="black" />)
              : (<Ionicons name="bookmark-outline" size={24} color="black" />)}
              </TouchableOpacity>
            </View>
        <ScrollView contentContainerStyle={{justifyContent: "center", alignItems: "center"}}>
            <Text style={{...styles.smallText, paddingHorizontal: 30}}>{story}</Text>


        {content.map((data,i)=>{
            let title = data.title
            let contents = data.contents
            return (<>
                <View key={i} style={{width: windowWidth, justifyContent:"flex-start", paddingHorizontal: 20}}>
                    <View style={{borderBottomColor:"#e8e8e8", borderBottomWidth:1}}>
                      <Text style={styles.largeText}>{title}</Text></View>
                    {contents.map((data,i)=>{
                        return(<>
                        <View style={{flexDirection: "row", justifyContent:"space-between", alignItems: "center", borderBottomColor:"#e8e8e8", borderBottomWidth:1}}>
                          <Text key={i} style={styles.smallText}>{data}</Text>
                          <Ionicons name="caret-down" size={24} color="#e8e8e8" />
                        </View>
                        </>)
                    })}
                </View>
            </>)
        })}

            <View style={{width: windowWidth, justifyContent:"flex-start", paddingHorizontal: 20}}>
                <Text style={{...styles.largeText, color: "#30475e"}}>아직도 답답하세요?{"\n"}이런 미션을 추천할게요.</Text>
                <View style={{marginBottom: 50}}>
                    {mission.map((data,i)=>{
                        const [isChecked, setIsChecked] =useState(false)
                        const onCheck = () => {
                            setIsChecked(!isChecked)
                        }
                        return (<>
                        <View style={{flexDirection: "row", justifyContent:"space-between", alignItems: "center", borderBottomColor:"#e8e8e8", borderBottomWidth:1}}>
                              <Text key={i} style={styles.smallText}>{data}</Text>
                              <TouchableOpacity onPress={onCheck}>
                                    {isChecked? (<Ionicons name="checkmark" size={28} color="#30475e" />)
                                      :(<Ionicons name="add" size={28} color="#e8e8e8" />)
                                    }
                                </TouchableOpacity>
                        </View>

                        </>)
                      })}

                </View>

            </View>

        </ScrollView>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: windowWidth,
    height: windowHeight,
  },

  header: {
    height: 40,
    marginTop: 20,
    justifyContent: "center",
    alignContent: "center",
    borderBottomColor: "#e2e2e2",
    borderBottomWidth: 1
  },
  headerTitle:{
    fontSize: 18,
    textAlign: "center",
    color: "#000",
    paddingHorizontal: 30,
  },
  largeText:{
    fontSize: 20,
    fontWeight: "600",
    marginTop:15,
    padding: 10,
    borderBottomColor: "grey", 
    borderBottomWidth:1
  },
  smallText:{
    fontSize: 15,
    fontWeight: "300",
    padding: 10,
    borderBottomColor: "grey", 
    borderBottomWidth:1
  },
});
