import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CheckBoxLine = ({text}) => {
  const [checkState,setCheckState] = useState(true)
  const [emojiName, setEmojiName] = useState('checksquareo')
  const onCheck = () => {
    setCheckState(!checkState)
    if(checkState == false){
      setEmojiName('checksquareo')
    } else{
      setEmojiName('checksquare')
    }
  }
  

  return (
        <View style={styles.container}>
            <View style={styles.box}>
                <TouchableOpacity style={styles.checkBox} onPress={onCheck}><AntDesign name={emojiName} size={32} color="#86A8E7"/></TouchableOpacity>
                <View style={styles.textBox}><Text style={styles.adviceText}>{text}</Text></View>
            </View>
        </View>

  );
}
export default CheckBoxLine

const styles = StyleSheet.create({

  container:{
    flex:1,
  },

  box:{
    flex:1,
    padding:5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    marginLeft: 10,
    marginRight: 10,
    paddingBottom: 10
  },
  adviceText:{
    margin:5,
  },
  textBox:{
    flex:8,
    borderBottomWidth:0.5,
    borderBottomColor:"lightgrey",
    marginLeft: 10
  },
  checkBox: {
    flex:1,
  },



});