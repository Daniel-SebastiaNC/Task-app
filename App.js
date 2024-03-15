import { ImageBackground, ScrollView, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';


export default function App() {

  const img = require('./resources/bg.jpg');

  const [tasks, setTasks] = useState([
    {
      id: 1,
      task: 'fdasfg ag '
    },
    {
      id: 2,
      task: 'kmku,muyo,l,l,l,'
    }
  ])

  function Header(){
    return(
      <ImageBackground source={img} style={styles.backHeader}>
        <View style={styles.opacitar}>
          <Text style={styles.titleHeader}>List Express</Text>
          
        </View>
      </ImageBackground>
    );
  }

  function deleteItem(posicion){
    alert(posicion)
  }

  function ComponentList(props){
    return(
      <View style={styles.boxList}>

        <Text style={{flex:1}}>{props.taskText}</Text>

        <TouchableOpacity style={{flex:0.1}} onPress={() => deleteItem(props.id)}>
          <AntDesign name="minuscircleo" size={24} color="black"/>
        </TouchableOpacity>
        
      </View>
    );
  }

  return (
    <ScrollView style={styles.body}>
      <Header></Header>
      {

        tasks.map(function(val){      
          return(<ComponentList taskText={val.task} id={val.id}></ComponentList>)
        })

      }
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1
  },
  backHeader: {
    resizeMode: 'cover',
    height: 100
  },
  titleHeader:{
    color: "#FFF",
    textAlign: 'center',
    fontSize: 25,
  },
  opacitar: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    flex: 1,
    justifyContent: 'center'
  },
  boxList: {
    flex: 1,
    borderWidth: 1,
    margin: 10,
    borderRadius: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center'
  },

});
