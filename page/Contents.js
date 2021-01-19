import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import ContentLine from "../components/ContentLine"





const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export default function Contents({navigation, route}) {
  
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
                  let thumbnail = img_url[0]
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
    marginTop:20,
    justifyContent: "center",
    alignContent: "center",
    marginBottom: 20,
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