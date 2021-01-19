import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { AntDesign } from '@expo/vector-icons';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



const CategoryButton = ({navigation, titleMain, title, category, emoji, desc}) => {

  return (
    <TouchableOpacity onPress={() => navigation.navigate("Situation", {
        category: category, desc: desc, title: title})}>
      <View style={styles.situationCard}>
        <AntDesign name={emoji} size={30} color="#86A8E7" />
        <Text style={styles.situationTitle}> {titleMain} </Text>
      </View>
    </TouchableOpacity>

  );
}
export default CategoryButton

const styles = StyleSheet.create({

    situationCard:{
        flex:1,
        alignItems: "center",
        justifyContent: "center",
        width: windowWidth/2.3,
        height: windowWidth/3,
        backgroundColor: "#fff",
        borderRadius:20,
        marginBottom: 10,
        shadowColor: 'lightgrey',
        shadowOffset: {
          width: 3,
          height: 3,
        },
        shadowOpacity: 0.4,
        shadowRadius: 5,
        elevation: 5,
    },
    situationTitle:{
      fontSize: 17,
      fontWeight: '700',
      textAlign: "center",
      marginTop: 15,
      color: "#000"
    },

});