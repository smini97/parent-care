import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, TouchableHighlight, View, TextInput,Dimensions, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function MainMissionModal() {
  const [modalVisible, setModalVisible] = useState(false);
  
  return (
    <View style={styles.centeredView}>
      
      <Modal
        animationType="none"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>

        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={{...styles.largeText, fontSize: 18}}>매일하는 미션</Text>


            <View style={{flexDirection: "row", justifyContent: "space-around", alignItems:"center"}}>
                <Text style={{...styles.smallText}}>하루 한 번 아이와 포옹하기</Text>
                <Ionicons name="checkmark-circle" size={30} color="#ff825c" />
            </View>

            <View style={{flexDirection: "row", justifyContent: "space-around", alignItems:"center"}}>
                <Text style={{...styles.smallText}}>아이에게 아침인사 건네기</Text>
                <Ionicons name="checkmark-circle-outline" size={30} color="black" />
            </View>

            <View style={{flexDirection: "row", justifyContent: "space-around", alignItems:"center"}}>
                <Text style={{...styles.smallText}}>잔소리하고 싶을 때 세 번 참기</Text>
                <Ionicons name="checkmark-circle-outline" size={30} color="black" />
            </View>


            <TouchableOpacity style={styles.closeButton} onPress={() => {setModalVisible(false)}}>
              <Text>닫기</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      
      <TouchableOpacity
        onPress={() => {
          setModalVisible(true);
        }}>
        <Ionicons name="checkmark-circle" size={70} color="#ff825c" />
      </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  modalView: {
    width:windowWidth/1.3,
    marginTop:100,
    marginHorizontal: 10,
    backgroundColor: "rgba(255,255,255,0.9)",
    borderRadius: 10,
    padding: 10,
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
    margin: 10,
    backgroundColor: "#fff",
    padding: 10,
    paddingHorizontal: 30,
    borderRadius: 5
  },
  largeText:{
    color:"#000",
    fontSize: 24,
    fontWeight: "700",
    padding: 10,
    paddingHorizontal: 20,
  },
  smallText:{
    fontSize: 15,
    fontWeight: "400",
    padding: 10,
    paddingHorizontal: 15
  },
  
});