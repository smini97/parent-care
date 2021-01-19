import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, Image, View, Dimensions, TouchableOpacity, ImageBackground } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

//지식,지혜, media 에 따라 박스 컬러 다르게.



const ContentLine = ({navigation, media, title, tags, img_url, thumbnail}) => {
  
  let categoryColor = '#94a7ae'
  
  
  return (
      <TouchableOpacity style={styles.container} onPress={() => navigation.navigate("ContentView", {
      navigation: navigation, media: media, title: title, tags: tags, img_url: img_url} )}>
        <ImageBackground source={{url: thumbnail}} imageStyle={{borderTopLeftRadius:10, borderTopRightRadius:10}} resizeMode="cover" style={styles.imageBox}>
          <Text style={{flex:1, backgroundColor: "rgba(255,255,255,0.2)"}}></Text>
        </ImageBackground>
        
        

        <View style={styles.infoBox}>
          <View style={styles.titleBox}>
            <Text style={styles.titleText} numberOfLines={1} ellipsizeMode={"tail"}>{title}</Text>
          </View>
          <View style={styles.descBox}>
            
            <View style={styles.categoryBox}>
              <Text style={styles.categoryText}>{media}</Text>
            </View>

            <View style={styles.tagBox}>
              <Text style={styles.normalText}>{tags}</Text>
            </View>

          </View>
        </View>

      </TouchableOpacity>


  );
}
export default ContentLine

const styles = StyleSheet.create({

  container: {
    flex:1,
    height: windowHeight/2,
    backgroundColor: "#fff",
    margin:10,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    borderRadius: 10
  },

  imageBox: {
    flex:3,
    backgroundColor: "grey",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    backgroundColor: "#fff"
  },
  infoBox: {
    height: 80,
    backgroundColor: "#fff",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: "center"
  },
  descBox:{
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5
  },
  titleText:{
    fontWeight: '700',
    fontSize: 18,
    margin:10,
    textAlign: "center"
  },
  categoryBox:{
    backgroundColor: '#94a7ae',
    padding: 5,
    paddingLeft:10,
    paddingRight:10,
    borderRadius: 5,
    marginRight: 10
  },
  categoryText: {
    color: '#fff',
    fontWeight: '300',
    fontSize: 15,
  },
  normalText: {
    color: "grey",
    fontWeight: '300',
    fontSize: 13
  }
  



});



