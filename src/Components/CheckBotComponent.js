import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  FlatList,
} from "react-native";
import Checkbox from "expo-checkbox";

const CheckBotComponent = (props) => {
  const {title , content , keyCheck , data , updateList} = props

  const updateCheckbox = (newValue, id, index) => {
    const updatedListCheck = [...data];
    updatedListCheck[index].Subdetail.list.select = updatedListCheck[
      index
    ].Subdetail.list.select = updatedListCheck[index].Subdetail.list.select.map(
      (item, i) => ({
        ...item,
        value: i === id ? newValue : item.value,
      })
    );

    updateList(updatedListCheck);
  };

  return (
    <View>
      <Text style={styles.textContent}>{title}</Text>
      <FlatList
        data={content.list.select}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity style={styles.contarinerList}>
              <Checkbox
                style={styles.checkbox}
                value={item.value}
                onValueChange={(newValue) =>
                  updateCheckbox(newValue, item.id, keyCheck)
                }
                color={item.value ? "#4630EB" : undefined}
              />
              <Text style={styles.textCheckbox}>{item.title}</Text>
            </TouchableOpacity>
          );
        }}
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
  contarinerList: {
    width: "90%",
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
  },
  checkbox: {
    width: 30,
    height: 30,
  },
  textCheckbox: {
    marginLeft: 8,
  },
});

export default CheckBotComponent;
