import React from 'react';
import { StyleSheet, Text, Image, View, Dimensions, TouchableOpacity, ImageBackground } from 'react-native';
import img from "../assets/main_mentor.png"
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

//지식,지혜, media 에 따라 박스 컬러 다르게.



const MentorDescCard = () => {
  
  return (
      <View style={styles.container}>
          <View style={styles.whiteBox}>
            <View style={styles.content_upper}>
                <View style={styles.imgBox}><Image source={img} style={styles.img}></Image></View>
                <View style={styles.descBox}>
                    <View><Text style={styles.largeText}>밥 잘해주는 바쁜 엄마</Text></View>
                    <View styles={{flexDirection:"row"}}>
                        <Text style={styles.tagText}>#워킹맘 #신뢰 #잔소리안하기 {"\n"}#밥잘해주기</Text>
                    </View>
                    <View styles={{flexDirection:"row"}}>
                        <Text style={styles.tagText}>#예민 #스트레스많음 #공부욕심 {"\n"}#불안강박 #자립 #외동</Text>
                    </View>
                </View>
            </View>

            <View style={styles.content_under}>
                    <Text style={styles.italicText}>"자식은 부모의 거울입니다. 성의가 없으면 자식이 잘 하기 어렵습니다. 아이에게 학원과 공부의 선택권을 보장해야 합니다. 특히 학원 선생님과 엄마의 면담은 아이 성적과 학업에 아무 쓸모가 없습니다."</Text>
            </View>

          </View>
      </View>


  );
}
export default MentorDescCard

const styles = StyleSheet.create({

  container: {
    flex:1,
    alignItems: "center",
    justifyContent: "center"
  },
  whiteBox:{
    width: windowWidth/1.1,
    backgroundColor: "#fff",
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    borderRadius: 10,
  },
  content_upper:{
    padding: 10,
    flexDirection: "row",
    alignItems:"center",
    justifyContent:"center"
  },
  imgBox:{
    paddingRight: 15
  },
  img:{
    width: 80,
    height: 80,
    resizeMode: "cover"
  },
  descBox:{
    flex:1,
  },
  largeText:{
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 5
  },
  tagText:{
    fontSize: 14,
    fontWeight: "300",
    color: "#4d4d4d"
  },
  content_under:{
    alignItems:"center",
    justifyContent:"center",
    paddingBottom: 10,
    paddingHorizontal: 15
  },
  italicText:{
      fontStyle: "italic",
    fontSize: 13
  }




});



