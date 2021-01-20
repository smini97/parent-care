import React, {useState, useEffect} from 'react';
import { Alert, Modal, StyleSheet, Text, TouchableWithoutFeedback, Keyboard, TouchableHighlight, View, TextInput,Dimensions, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Video } from 'expo-av';
import { AntDesign } from '@expo/vector-icons';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default function VideoPlayButton(){
    const [modalVisible, setModalVisible] = useState(false)
    return (
        <View style={styles.centeredView}>
      
        <Modal
          animationType="none"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
            <Video
          source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/d-care-app.appspot.com/o/contents%2FCI1%2F%E1%84%80%E1%85%A1%E1%84%8D%E1%85%A1%E1%84%8C%E1%85%A1%E1%84%8C%E1%85%A9%E1%86%AB%E1%84%80%E1%85%A1%E1%86%B7%20%E1%84%91%E1%85%A7%E1%86%AB%E1%84%8C%E1%85%B5%E1%86%B8%E1%84%8B%E1%85%AA%E1%86%AB%E1%84%85%E1%85%AD.mp4?alt=media&token=b1c99cc5-92b5-4076-85d6-7c207a84dcec' }}
          rate={1.0}
          volume={1.0}
          muted={false}
          resizeMode="contain"
          shouldPlay
          style={{ width: windowWidth, height: 300}}
        />
              
  
              <TouchableOpacity style={styles.closeButton} onPress={() => {setModalVisible(false)}}>
                <Text>닫기</Text>
              </TouchableOpacity>
            </View>
          </View>
          </TouchableWithoutFeedback>
        </Modal>
  
        <TouchableOpacity onPress={() => { setModalVisible(true)}}
        style={styles.addPlus}>
            <AntDesign name="play" size={100} color="#86A8E7" />
            </TouchableOpacity>
        
      </View>

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
