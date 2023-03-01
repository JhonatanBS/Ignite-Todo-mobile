import { View, Image } from "react-native";
import { styles } from "./styles";

export default function Home() {
  return(
    <View style={styles.container}>
    <View style={styles.imageLogo}>
      <Image 
        source={require(`../../../assets/Logo.png`)}
      />
    </View>
    </View>
  )
}