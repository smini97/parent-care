import React from "react";
import { StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
export default function GoBackButton({ navigation }) {
  return (
    <TouchableOpacity
      style={{ marginLeft: 10 }}
      onPress={() => {
        navigation.goBack();
      }}>
      <Ionicons name="arrow-back" size={28} color="black" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
