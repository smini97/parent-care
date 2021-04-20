import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Contents() {
    const story = "딸 아이는 중3이에요. 특목고를 따로 준비하는 건 아니지만, 혹시 몰라서 내신은 챙기고 있어요. 그런데 중간고사가 다가오는데.. 요즘 애랑 싸우기만 하네요 ㅠ. 애는 공부하기 싫다고, 고등학교 때부터 하겠다고 난리에요. 저는 너무 불안하죠… 어르고 달래긴 하는데 저도 욱해서 결국 고성이 오가게 되네요. 첫째는 알아서 잘 해서 내버려뒀는데, 둘째가 문제네요… 현명한 조언 부탁드립니다 ㅠㅠ."
    const reply = "고민이 많으시겠어요.. 저같은 경우엔 그냥 애 하고 싶은 대로 내버려둬요. 어차피 고등학교 가면 알아서들 하더라고요. ;;; 괜히 스트레스 받지 마시고.. 화이팅입니다 ㅜ"
    const rereply = "조언 감사합니다 ㅠ 안그래도 요즘 속이 갑갑했는데.. 조금 낫네요 ㅎ"
  return (
    <SafeAreaView style={styles.container}>
        <View style={{...styles.header, flexDirection: "row"}}>
        </View>
        
        <ScrollView style={{paddingHorizontal:10, marginBottom: 40}}>
            <Text style={{...styles.lightText, textAlign: "right", paddingRight: 10}}>2021-05-02 12:16 | 조회 63</Text>
            <View style={{borderBottomColor: "#e8e8e8", borderBottomWidth: 1, paddingBottom: 15}}>
                <Text style={styles.largeText}>중간고사가 며칠 안남았는데 어쩌죠</Text>
                <Text style={{...styles.smallText}}>{story}</Text>
            </View>

            <View style={{borderBottomColor: "#e8e8e8", borderBottomWidth: 1}}>
              <Text style={{...styles.smallText, fontWeight: '700', paddingBottom: 0, fontSize: 14}}>익명의 페어런트 1</Text>
              <Text style={styles.smallText}>{reply}</Text>
            </View>

            <View style={{borderBottomColor: "#e8e8e8", borderBottomWidth: 1, paddingLeft: 20}}>
              <Text style={{...styles.smallText, fontWeight: '700', paddingBottom: 0, fontSize: 14}}>글쓴이 페어런트</Text>
              <Text style={styles.smallText}>{rereply}</Text>
            </View>

            <View style={{borderBottomColor: "#e8e8e8", borderBottomWidth: 1}}>
              <Text style={{...styles.smallText, fontWeight: '700', paddingBottom: 0, fontSize: 14}}>익명의 페어런트 1</Text>
              <Text style={styles.smallText}>{reply}</Text>
            </View>
            <View style={{borderBottomColor: "#e8e8e8", borderBottomWidth: 1}}>
              <Text style={{...styles.smallText, fontWeight: '700', paddingBottom: 0, fontSize: 14}}>익명의 페어런트 1</Text>
              <Text style={styles.smallText}>{reply}</Text>
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
    height: 20,
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
