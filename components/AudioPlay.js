import React, {useState, useEffect} from 'react';
import { Alert, Modal, StyleSheet, Text, TouchableWithoutFeedback, Keyboard, TouchableHighlight, View, TextInput,Dimensions, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Audio } from 'expo-av';
import { AntDesign } from '@expo/vector-icons';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export default function AudioPlay({url}) {
    const [sound, setSound] = React.useState();

    async function playSound() {
      console.log('Loading Sound');
      const { sound } = await Audio.Sound.createAsync(
          { uri: url },
          { shouldPlay: true }
      );
      setSound(sound);
  
      console.log('Playing Sound');
      await sound.playAsync(); }
  
    React.useEffect(() => {
      return sound
        ? () => {
            console.log('Unloading Sound');
            sound.unloadAsync(); }
        : undefined;
    }, [sound]);

    return (
        
  

        <TouchableOpacity onPress={playSound}
        style={{justifyContent:"center", alignItems: "center"}}>
            <AntDesign name="play" size={100} color="#86A8E7" />
        </TouchableOpacity>
        
      

    );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  modalView: {
    width:windowWidth,
    height:windowWidth,
    marginTop:50,
    backgroundColor: 'white',
    borderRadius: 20,
    justifyContent:"center",
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  closeButton: {
      marginVertical: 30,
  }
});


