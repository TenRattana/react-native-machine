import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import TextInputComponent from "../Components/TextInputComponent";
import CheckBotComponent from "../Components/CheckBotComponent";
import axios from "axios";
import qs from "qs";

const FormScreen = () => {
  const [listcheck, setListcheck] = useState([]);

  useEffect(() => {
    let data = qs.stringify({
      machineQR: "SEPARATOR S.7",
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://10.99.100.105/demo/ServiceDemo.asmx/GetFormMachine",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        setListcheck(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const nameMachine =
    listcheck.length > 0 && listcheck[0].Id_Machine_Group
      ? listcheck[0].Id_Machine_Group
      : "Unknown";

  return (
    <View style={styles.container}>
      <Text style={styles.textHead}>KFM ตารางตรวจเช็คเครื่องจักร</Text>
      <Text style={styles.textHead}>รุ่น {nameMachine}</Text>
      <FlatList
        data={listcheck}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View>
            {item.Name_Field_Group === "TEXT_INPUT" ? (
              <TextInputComponent
                content={item.Subdetail}
                title={item.Name_Checking_Process}
              />
            ) : item.Name_Field_Group === "CHECK_BOX" ? (
              <CheckBotComponent
                content={item.Subdetail}
                title={item.Checking_Process_Name}
                keyCheck={index}
                data={listcheck}
                updateList={(newList) => setListcheck(newList)}
              />
            ) : null}
          </View>
        )}
      />
      <TouchableOpacity style={styles.buttonSubmit}>
        <Text style={styles.fixToText}>SUBMIT</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
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
