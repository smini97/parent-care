import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, Image, View, Dimensions, TouchableOpacity, ImageBackground } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

//지식,지혜, media 에 따라 박스 컬러 다르게.



const CommentLine = ({profile, name, comment}) => {
  
  
  return (
    <View style={styles.container}>
        <ImageBackground source={{url:profile}} style={styles.userProfile}></ImageBackground>
        <View style={styles.userInfo}>
            <View><Text style={styles.userName}>{name}</Text></View>
            <View><Text style={styles.userText}>{comment}</Text></View>
        </View>
    </View>


  );
}
export default CommentLine

const styles = StyleSheet.create({

  
    container:{
        flex:1,
        flexDirection:"row",
        marginBottom:15
      },
      likeNumberText:{
        fontSize: 17,
        fontWeight: '700',
        marginLeft: 10,
        marginBottom: 10
      },
      numberText:{
        color: "grey",
        marginLeft: 10,
        marginBottom: 10
      },
      userProfile:{
        flex:1,
        width:40,
        height:40,
        marginHorizontal: 5
      },
      userInfo:{
        flex:5
      },
      userName: {
        fontSize: 13,
        fontWeight: "700",
        marginBottom: 10
      },
      userText:{
        fontSize:13
      }
  



});



