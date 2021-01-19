import React, {useState, useEffect}from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import * as firebase from 'firebase/app';
import storage from "../firebaseConfig.js"

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

//3 Contents => state.length 로 개수받아서 넣기

const SituationLine = ({navigation, id, title, contentList, thumbnail}) => {
  
  
  //콘텐츠 개수
  let total = contentList.length

  return (
    <TouchableOpacity style={styles.contentLineContainer} onPress={() => navigation.navigate("Contents", {
      navigation: navigation, situationTitle: title, contentList: contentList})}>
      <ImageBackground source={thumbnail} imageStyle={{borderRadius:5}} style={styles.lineThumbnail}></ImageBackground>
      <View style={{flex:1, flexDirection: "column", marginRihgt: 20}}>
        <Text style={styles.lineTitle}>{title}</Text>
        <Text style={{marginLeft:3, marginBottom:3, color: "grey", fontSize: 11}}>{total} Contents</Text>
      </View>
      <AntDesign name="right" size={30} color="lightgrey"/>
    </TouchableOpacity>


  );
}
export default SituationLine


const styles = StyleSheet.create({

contentLineContainer: {
  flex:1,
  width: windowWidth,
  borderBottomWidth: 1,
  borderBottomColor: "#e2e2e2",
  padding: 10,
  flexDirection: "row",
  alignItems: 'center',
},
lineThumbnail: {
    width: 50,
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 5,
    marginRight: 20
},
lineTitle: {
  fontSize: 14,
  margin:3,
  
  
}

});



