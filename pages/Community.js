import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { TouchableHighlight } from 'react-native-gesture-handler';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export default function Community({navigation}) {
  const titleList = ["중간고사가 얼마 안남았는데 어쩌죠","중간고사가 얼마 안남았는데 어쩌죠","중간고사가 얼마 안남았는데 어쩌죠","중간고사가 얼마 안남았는데 어쩌죠","중간고사가 얼마 안남았는데 어쩌죠","중간고사가 얼마 안남았는데 어쩌죠","중간고사가 얼마 안남았는데 어쩌죠","중간고사가 얼마 안남았는데 어쩌죠","중간고사가 얼마 안남았는데 어쩌죠"]
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      <View style={{...styles.header, flexDirection: "row"}}>
          <Text style={{...styles.headerTitle, marginRight: 40, marginLeft: 100}}>커뮤니티</Text>
          <TouchableHighlight style={{marginRight:10}}><Ionicons name="search-outline" size={24} color="black" /></TouchableHighlight>
          <TouchableOpacity><Ionicons name="pencil" size={24} color="black" /></TouchableOpacity>
      </View>

      <ScrollView>
        {titleList.map((data,i)=>{
          return (<>
            <TouchableOpacity key={i} style={styles.lineBox} onPress={() => navigation.navigate("CommunityView")}>
              <Text style={styles.lineText} ellipsizeMode={"tail"} numberOfLines={1}>{data}</Text>
              <Text style={styles.tagText} ellipsizeMode={"tail"} numberOfLines={1}>어제 아이가 하도 공부를 안해서 과일 갖다주면서 물어보니까 애가 스트레스</Text>
              <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                <Text style={styles.tagText}>3분전 | 조회 8</Text>
                <Text style={styles.tagText}>좋아요 3 | 댓글 1</Text>
              </View>
            </TouchableOpacity>
          </>)
        })}
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

  header: {
    height: 40,
    marginTop: 40,
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
  lineBox:{
    height:80,
    padding: 10,
    paddingHorizontal:20,
    justifyContent:"center",
    borderBottomWidth: 1,
    borderColor: "#e2e2e2"
  },
  lineText:{
    fontSize: 15,
  },
  tagText:{
    fontSize: 12,
    color: "grey",
    marginTop:5
  }

});