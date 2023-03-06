import { StatusBar } from "react-native";
import { TextInput, View } from "react-native";
import  Home  from "./src/screens/Home";

export default function App() {
  return (
   <View>
    <StatusBar 
      barStyle="light-content"
      backgroundColor="transparent"
      translucent
    />
    <Home />
   </View>
  );
}