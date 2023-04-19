import { useState } from "react";
import { View, Image, TextInput, TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";

interface IUser {
  id: string,
  description: string,
  done: boolean
}

export function Home() {

  const [] = useState([]);

  return(
    <View style={styles.container}>
      <View style={styles.imageLogo}>
        <Image 
          source={require(`../../../assets/Logo.png`)}
        />
      </View>

      <View style={styles.containerInput}>
        <TextInput 
          style={styles.inputAdd}
          placeholder="Add a task"
          placeholderTextColor="#808080"
          
        />

        <TouchableOpacity style={styles.buttonAdd}>
          <View style={styles.plus}>
            <Image 
              source={require(`../../../assets/buttonAdd.png`)}
            />
          </View>
        </TouchableOpacity>

      </View>
      
      {/*Area Counter*/}
      <View style={styles.containerTask}>
        
        <View style={styles.counter}>
          <View style={styles.containerCounter}>
            <Text style={styles.created}>
              Created
            </Text>
            
            <View style={styles.containerNumber}>
              <Text style={styles.textNumber}>
                {0}
              </Text>
            </View>
            
          </View>

          <View style={styles.containerCounter}>
            <Text style={styles.finished}>
              Finished
            </Text>

            <View style={styles.containerNumber}>
              <Text style={styles.textNumber}>
                {0}
              </Text>
            </View>

          </View>
        </View>

        {/* Tasks */}
        

      </View>
    </View>
  )
}