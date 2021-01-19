import React from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, TouchableOpacity } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const TagButton = ({category, selectCategory, isClicked}) => {
  return isClicked ? (
        <TouchableOpacity style={styles.container} onPress={()=>selectCategory(category)}>
          
            <View style= {styles.clickedBox}>
                <Text style={styles.clickedText}>{category}</Text>
            </View>
        </TouchableOpacity>

  ) : (
      <TouchableOpacity style={styles.container} onPress={()=>selectCategory(category)}>
          
          <View style= {styles.box}>
              <Text style={styles.text}>{category}</Text>
          </View>
      </TouchableOpacity>
  );

}
export default TagButton

const styles = StyleSheet.create({

  container:{
    marginLeft:5,
    marginBottom: 5
  },
  box: {
    borderWidth:1,
    borderColor:"grey",
    backgroundColor: '#fff',
    justifyContent: "center",
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5,
    shadowColor: 'grey',
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,

  },
  text:{
    fontSize: 13,
    fontWeight: '500',
    color: 'grey',
    textAlign: "center"
  },
  clickedBox: {
    borderWidth:1,
    borderColor:"#86A8E7",
    backgroundColor: '#fff',
    justifyContent: "center",
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5,
    shadowColor: 'grey',
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,

  },
  clickedText:{
    fontSize: 13,
    fontWeight: '500',
    color: '#86A8E7',
    textAlign: "center"
  }

  

});