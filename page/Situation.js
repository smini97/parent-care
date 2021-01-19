import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import SituationLine from "../components/SituationLine"
import rawdata from "../situationdata.json";
import thumbImg1 from "../assets/situation_thumbnail1.png"
import thumbImg2 from "../assets/situation_thumbnail2.jpeg"
import thumbImg3 from "../assets/situation_thumbnail3.jpeg"
import thumbImg4 from "../assets/situation_thumbnail4.jpeg"
import thumbImg5 from "../assets/situation_thumbnail5.jpeg"

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



export default function Situation({navigation, route}) {
  let {category, title, desc}  = route.params;
  const [imageState,setImageState] = useState([])
  const [state,setState] = useState([])

  const prepare = async() =>{
    let mydata = rawdata.filter((value, i) => value.category == category);
    await setState(mydata)
    let thumbList = [thumbImg1, thumbImg2, thumbImg3, thumbImg4, thumbImg5]
    await setImageState(thumbList)
  }
  useEffect(()=>{
    prepare();
  },[])

  //상황 개수
  let total = state.filter((value, i) => value.category == category).length
  

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.header}>
          <Text style={styles.headerTitle}>
              {title}
            </Text>
        </View>
        <ScrollView>
        <View style= {styles.content}> 
            <ImageBackground source={thumbImg2} style={{width: windowWidth, marginBottom: 30}}>
            <View style={styles.descBox}>
            <Text style={styles.descText}>{desc}</Text>
            </View>
            </ImageBackground>
          <View style={styles.allContent}>
            <View style={{flexDirection: "row"}}>
              <Text style={styles.listHeader}>{title} 관련 모든 컨텐츠 </Text>
              <Text style={{fontSize: 14, color:"grey"}}> {total} </Text>
            </View>
            <View style={styles.lineScroll}>
            {state.map((data,i)=>{
                      let num=i%5;
                      let thumbnail = imageState[num]
                      return <SituationLine key={i} id={data.id} title={data.title} contentList={data.content_list} navigation={navigation} thumbnail={thumbnail}/>

                  })}
            </View>
            
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
    backgroundColor: "#fff",
    width: windowWidth,
  },

  header: {
    height: 50,
    marginTop:20,
    justifyContent: "center",
    alignContent: "center",
    borderBottomColor: "#e2e2e2",
    borderBottomWidth: 1
  },
  headerTitle:{
    fontSize: 17,
    textAlign: "center",
    color: "#000",
    paddingHorizontal: 30,
  },
  footer: {
    height: 10,
    backgroundColor: "#e2e2e2"
  },

  content: {
    flex:1
  },
  descBox:{
    padding: 20,
    paddingTop: 170,
    paddingBottom: 50,
    backgroundColor: "rgba(0,0,0,0.5)"
  },
  descText:{
    fontSize: 15,
    fontWeight: "500",
    color: "#fff",
    fontStyle: "italic",
    textAlign: "center"
  },
  listHeader: {
    fontSize: 17,
    fontWeight:"bold",
    color: "#000",
    paddingLeft: 10,
  },
  lineScroll: {
      marginTop: 10
  },

});