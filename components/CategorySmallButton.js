import React from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



const CategorySmallButton = ({topic, num}) => {
  let emojiColor = '';
  if(num%4 == 0){
    emojiColor+= "#7F7FD5"
  } else if(num%4 ==1) { 
    emojiColor += "#86A8E7"
  } else if(num%4 ==2) {
    emojiColor += "#91EAE4"
  } else {emojiColor += "lightgrey"}

  return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.box}>
              <View><AntDesign name="heart" size={14} color={emojiColor} /></View>
              <View><Text style={styles.topicText}>{topic}</Text></View>
            </View>
        </TouchableOpacity>

  );
}
export default CategorySmallButton

const styles = StyleSheet.create({

  container:{
    width: windowWidth/3.3,
    padding: 5,
    marginBottom: 10
  },
  box:{
    flex:1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    borderRadius: 15,
    shadowColor: 'lightgrey',
        shadowOffset: {
          width: 2,
          height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5,
    
  },
  topicText: {
    fontSize: 13,
    marginTop: 10,
    fontSize: 17,
    fontWeight: '500'
  },

});