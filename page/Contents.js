import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import ContentLine from "../components/ContentLine"




const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export default function Contents({navigation, route}) {
  const audioThumbnail = "https://firebasestorage.googleapis.com/v0/b/d-care-app.appspot.com/o/images%2FaudioThumbnail.png?alt=media&token=b5b1e996-8a8d-4a9c-941c-eecc88423de9"
  const {situationTitle, contentList} = route.params

  const [state,setState] = useState([])
  useEffect(()=>{
    setState(contentList)
  },[])
console.log(contentList)
  
return ( 
<View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>{situationTitle}</Text>
        </View>

        <ScrollView>
            {state.map((data,i)=> {
                  let img_url = data.img_url
                  let thumbnail = ''
                  if(data.media == "오디오북" || data.media == "인터뷰"){
                    thumbnail = audioThumbnail
                  } else{ thumbnail = img_url[0] }
                  let tag = "#" + data.tags.join(" #")
                  return <ContentLine key={i} media={data.media} title={data.title} tags={tag} img_url={img_url} thumbnail={thumbnail} navigation={navigation}/>
                  })
                }
        </ScrollView>
    <View style={styles.footer}></View>
    </View>
  )

  
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: windowWidth,
    height: windowHeight,
  },

  header: {
    height: 70,
    marginTop:50,
    justifyContent: "center",
    alignContent: "center",
    marginBottom: 20,
    borderBottomColor: "#e2e2e2",
    borderBottomWidth: 1
  },
  headerTitle:{
    fontSize: 20,
    textAlign: "center",
    color: "#000",
    paddingHorizontal: 40,
  },
  footer: {
    height: 10,
    backgroundColor: "#e2e2e2",
    marginTop: 30
  },

  content: {
    flex:1
  },
  listHeader: {
    fontSize: 17,
    fontWeight:"bold",
    color: "#000",
    paddingLeft: 10,
  },
  latestContent:{
    paddingBottom: 20
  },
  cardScroll:{
    marginTop: 10,
  },

  lineScroll: {
      marginTop: 10
  },

});