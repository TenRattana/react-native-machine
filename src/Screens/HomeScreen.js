import React from "react";
import { View, Text, StyleSheet , Button } from "react-native";

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text>Index Screen</Text>
      <Button title="Form Check" onPress={()=>navigation.navigate('Form')}/>
      <Button title="Test Api Check" onPress={()=>navigation.navigate('Test')}/>
    </View>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
