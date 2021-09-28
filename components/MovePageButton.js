import React from "react";
import { StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
export default function MovePageButton({ navigation, pageName }) {
  return (
    <TouchableOpacity
      style={{ marginRight: 10 }}
      onPress={() => {
        navigation.push(pageName);
      }}>
      <Ionicons name="chevron-forward" size={28} color="#5de2a2" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
