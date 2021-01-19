import React from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



const StoryBubbleRight = ({text}) => {
  return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.questionBubble}>
                  <Text style={{color: "#fff"}}>{text}</Text>
                </View>
        </TouchableOpacity>

  );
}
export default StoryBubbleRight

const styles = StyleSheet.create({

  container:{
    
  },
  questionBubble:{
    backgroundColor: "#86A8E7",
    padding: 15,
    borderRadius: 15,
    marginBottom: 5
  },
  

});