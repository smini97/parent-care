import React from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



const StoryBubbleLeft = ({text}) => {
  return (
    
        <TouchableOpacity style={styles.container}>
            <View style={styles.answerBox}>
                <Text style={styles.answerText}>{text}</Text>
            </View>
        </TouchableOpacity>

  );
}
export default StoryBubbleLeft

const styles = StyleSheet.create({

  container:{
    flex:1,
  },
  answerBox:{
  },
  answerText:{
    flex:1,
    flexWrap: "wrap",
    borderWidth: 1,
    borderColor: "lightgrey",
    padding:10,
    marginBottom: 5,
    borderRadius: 15,
  },


});