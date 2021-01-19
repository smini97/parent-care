import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import ContentLine from "../components/ContentLine"
import TagButton from '../components/TagButton';
import rawdata from "../situationdata.json";


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export default function Search({navigation}) {
  const tagList = ["전체","고민", "의견충돌", "욕심", "이해부족","비교","소통","관계맺음","잔소리","거짓말","방황","예민","시간","스트레스","환경","습관","기분","단절","식습관","실망","우울","분노","피로","자존감"];

  const [state,setState] = useState([])
  const [categoryState, setCategoryState] = useState([])
  const [cateContentState, setCateContentState] = useState([])
  const [clickedState, setClickedState] = useState([])

  const selectCategory = (category) => {
    if(category=='전체'){
      setCateContentState(state)
      setClickedState(category)
    } else{
      setCateContentState(state.filter( (value, i) => value['tags'].includes(category)))
      setClickedState(category)
    }
  }
  const getData = async() => {
    let contentList = []
    await rawdata.map((data,i) => {
      data['content_list'].map((dat,i)=>{
        contentList.push(dat)
      })
    })
    setState(contentList), setCategoryState(tagList), setCateContentState(contentList), setClickedState('전체')
  }

  useEffect(()=>{
    console.log("***********로딩되었나요~")
    getData();
    
  },[])
  




  return (
    <View style={styles.container}>
    <StatusBar style="dark" />
        <View style={styles.header}>
          <Text style={styles.headerTitle}>
              콘텐츠 탐색
            </Text>
        </View>

        <ScrollView>
            <View style={styles.tagList}>
              {categoryState.map((data,i)=>{
                  let isClicked= (clickedState==data)
                    return <TagButton key={i} category={data} isClicked={isClicked} selectCategory={selectCategory}/>
                  })}
            </View>

            <View style={{marginTop: 10, padding: 10}}>

            <ScrollView>
              {
                cateContentState.map((data,i)=> {
                  let img_url = data.img_url
                  let thumbnail = img_url[0]
                  let tag = "#" + data.tags.join(" #")
                  
                  return <ContentLine key={i} media={data.media} title={data.title} tags={tag} img_url={img_url} thumbnail={thumbnail} navigation={navigation}/>
                  })
                }
            </ScrollView> 
            </View>

        </ScrollView>

        
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: windowWidth,
    height: windowHeight,
    backgroundColor: "#fff"
  },
  header: {
    height: 50,
    marginTop:20,
    justifyContent: "center",
    alignContent: "center",
    marginBottom: 20,
    borderBottomColor: "#e2e2e2",
    borderBottomWidth: 1
  },
  headerTitle:{
    fontSize: 20,
    textAlign: "center",
    color: "#000"
  },
  tagList:{
    paddingRight: 10,
    paddingLeft: 10,
    flexDirection: "row",
    flexWrap: "wrap"
  },
  categoryMain:{
    width:80,
    height:30,
    marginTop:1,
    marginRight:5,
    marginLeft:13,
    borderRadius: 8,
    backgroundColor: "#A1D9BC",
    borderStyle:'solid',
  },
  category:{
    width:80,
    height:30,
    marginTop:1,
    marginRight:5,
    marginLeft:10,
    borderRadius: 8,
    backgroundColor: "#b3b3b3",
    borderStyle:'solid'
  },
  categoryMainTitle:{
    color:'#fff',
    textAlign:'center',
    fontWeight: '500',
    marginTop:6
  },
  categoryTitle: {
    color:'#fff',
    textAlign:'center',
    marginTop:6
  },




});