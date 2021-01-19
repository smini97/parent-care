import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, TouchableWithoutFeedback, Keyboard, TouchableHighlight, View, TextInput,Dimensions, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useEffect } from 'react/cjs/react.development';
import { AntDesign } from '@expo/vector-icons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function StorySendModal({}) {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const onSubmit = () => {
    setTitle('')
    setDesc('')
    setModalVisible(false)
  }
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
            <Text style={styles.boldText}>무엇이 고민이신가요?</Text>
            <TextInput
                value={title}
                onChangeText={(title) => setTitle(title)}
                placeholder={'최대한 구체적으로 적어주세요.'}
                style={styles.inputBox}
                maxLength={25}
                multiline={true}
                />
            <Text style={styles.boldText}>어떻게 해결되길 기대하나요?</Text>
            <TextInput
                value={desc}
                onChangeText={(desc) => setDesc(desc)}
                placeholder={'원하는 바, 기대하는 바를 알려주시면 더 정확한 코치가 가능합니다.'}
                style={styles.inputBox}
                maxLength={46}
                multiline={true}
                />

            <TouchableHighlight
              style={{ ...styles.submitButton, backgroundColor: '#222831' }}
              onPress={onSubmit}>
              <Text style={styles.submitButtonText}>사연 보내기</Text>
            </TouchableHighlight>

            <TouchableOpacity style={styles.closeButton} onPress={() => {setModalVisible(false)}}>
              <Text>닫기</Text>
            </TouchableOpacity>
          </View>
        </View>
        </TouchableWithoutFeedback>
      </Modal>

      <TouchableOpacity onPress={() => { setModalVisible(true)}}
      style={styles.addPlus}><AntDesign name="pluscircle" size={60} color="#86A8E7" /></TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width:windowWidth/1.1,
    height:windowHeight/1.3,
    marginTop:40,
    paddingTop: 50,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 30,
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
  closeButton:{
    justifyContent:"center",
    alignItems: "center",
    marginVertical: 20
  },
  submitButton: {
    backgroundColor: '#f05454',
    marginTop:40,
    width:windowWidth/1.3,
    borderRadius: 20,
    padding: 15,
    elevation: 2,
  },
  submitButtonText:{
    color: "#fff",
    fontWeight: "500",
    textAlign: "center",
  },
  coverImageBox:{
    width:windowWidth/1.3,
    height: windowWidth/2.2,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  
  boldText:{
    fontWeight: "700",
    marginVertical: 20,
    fontSize: 17
  },
  inputBox: {
    borderBottomColor: "#e8e8e8",
    borderBottomWidth: 1,
    padding: 5,
    marginBottom: 15,
    width: windowWidth/1.5,
    flexWrap:"wrap",
    textAlign: "center"
  },
  addPlus:{
    flex:1,
  },
});