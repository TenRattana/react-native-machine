import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/Screens/HomeScreen";
import FormScreen from "./src/Screens/FormScreen";
import TestApi from "./src/Screens/TestApi";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "MachineApp" }}
        />
        <Stack.Screen
          name="Form"
          component={FormScreen}
          options={{ title: "MachineApp" }}
        />
        <Stack.Screen
          name="Test"
          component={TestApi}
          options={{ title: "MachineApp" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
