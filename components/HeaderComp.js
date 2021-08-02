import React from "react";
import { StyleSheet } from "react-native";
import { Header, Left, Right, Text, Body } from "native-base";

export default function HeaderComp({ title = "당나귀" }) {
  return (
    <Header transparent>
      <Left />
      <Body>
        <Text>{title}</Text>
      </Body>
      <Right />
    </Header>
  );
}

const styles = StyleSheet.create({
  highlight: {
    fontSize: 27,
    fontWeight: "700",
    color: "#000",
    textAlign: "center",
  },
});
