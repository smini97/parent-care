import React from "react";
import { StyleSheet } from "react-native";
import { Item, Input, Label, Text } from "native-base";
export default function Loading({ title, type, setFunc, error }) {
  return (
    <>
      <Item floatingLabel last>
        <Label style={styles.label}>{title}</Label>
        <Input
          style={styles.input}
          //type이 패스워드면 화면상에 텍스트가 안보이게 처리하는 속성
          secureTextEntry={type == "password" ? true : false}
          //태그에 값이 입력되는 동시에 어떤 값이 입력되는 지 바로바로 뱉는 속성함수
          onChangeText={(text) => {
            setFunc(text);
          }}
        />
      </Item>
      <Item style={{ borderColor: "transparent", marginBottom: "-10%" }}>
        <Text style={{ color: "deeppink" }}>{error}</Text>
      </Item>
    </>
  );
}

const styles = StyleSheet.create({
  label: {
    color: "gray",
  },
  input: {
    color: "gray",
  },
});
