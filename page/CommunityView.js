import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Contents() {
    const story = "오늘 아이가 시험을 보고 왔는데, 성적이 잘 안나왔나봐요. 잘봤는지 궁금해서 하루종일 전전긍긍했는데, 학교에서 돌아온 아이의 표정이 좋지가 않습니다.\n시험 잘 봤냐고 물어보고 이야기하고 싶은데, 아이에게 부담이 될 걸 알기에 망설이고 있어요. 성적 때문에 실망한 아이를 어떻게 북돋아줄 수 있을까요?"
    
  return (
    <SafeAreaView style={styles.container}>
        <View style={{...styles.header, flexDirection: "row"}}>
        </View>
        <Text style={{...styles.lightText, textAlign: "right", paddingRight: 10}}>2021-05-02 12:16 | 조회 63</Text>
        <ScrollView style={{paddingHorizontal:10}}>
            <View style={{borderBottomColor: "#e8e8e8", borderBottomWidth: 1, paddingBottom: 15}}>
                <Text style={styles.largeText}>중간고사가 며칠 안남았는데 어쩌죠</Text>
                <Text style={{...styles.smallText}}>{story}</Text>
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
  },
  smallText:{
    fontSize: 15,
    fontWeight: "300",
    padding: 10,
  },
  lightText:{
    fontSize: 12,
    color: "grey",
    marginTop:5
  }
});
