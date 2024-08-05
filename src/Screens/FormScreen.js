import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import TextInputComponent from "../Components/TextInputComponent";
import CheckBotComponent from "../Components/CheckBotComponent";

const dynamic = require('../../data.json')

const FormScreen = () => {
  const [listcheck, setListcheck] = useState(dynamic);
  const nameMachine = listcheck[0].Machinery_Name ? listcheck[0].Machinery_Name.title : null;

  return listcheck.length > 0 ? (
    <View>
      <Text style={styles.textHead}>KFM ตารางตรวจเช็คเครื่องจักร</Text>
      <Text style={styles.textHead}>รุ่น {nameMachine}</Text>
      <FlatList
        data={listcheck}
        renderItem={({ item, index }) => {
          return (
            <View>
              {item.Field == "TEXT_INPUT" ? (
                <TextInputComponent
                  content={item.data}
                  title={item.Checking_Process_Name}
                />
              ) : item.Field == "CHECK_BOX" ? (
                <CheckBotComponent
                  content={item.data}
                  title={item.Checking_Process_Name}
                  keyCheck={index}
                  updateList={(newList) => setListcheck(newList)}
                />
              ) : null}
            </View>
          );
        }}
      />
      <TouchableOpacity style={styles.buttonSubmit}>
        <Text style={styles.fixToText}>SUBMIT</Text>
      </TouchableOpacity>
    </View>
  ) : null;
};

const styles = StyleSheet.create({
  textHead: {
    fontSize: 25,
    alignSelf: "center",
    margin: 15,
  },
  buttonSubmit: {
    marginTop: 40,
    width: "50%",
    height: 40,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    elevation: 3,
    backgroundColor: "black",
  },
  fixToText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default FormScreen;
