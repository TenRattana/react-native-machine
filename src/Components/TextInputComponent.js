import React from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";

const TextInputComponent = (props) => {

  const contentText = props.title;
  const contentPlaceholder = props.content.placeholder;
  const contentValue = props.content.value;

  return (
    <View>
      <Text style={styles.textContent}>{contentText}</Text>

      <TextInput
        placeholder={contentPlaceholder ? contentPlaceholder : null}
        value={contentValue ? contentValue : null}
        style={styles.inputText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textContent: {
    fontSize: 16,
    margin: 5,
    marginLeft: 10,
  },
  inputText: {
    width: "90%",
    height: 50,
    borderRadius: 10,
    borderWidth: 0.5,
    alignSelf: "center",
    paddingLeft: 20,
    margin: 8,
  },
});

export default TextInputComponent;
