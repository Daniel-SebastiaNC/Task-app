import { ImageBackground, ScrollView, StyleSheet, Text, Touchable, TouchableOpacity, View, YellowBox, Modal, TouchableHighlight, TextInput} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';

console.dissableYellowBox = true;

export default function App() {

  const img = require('./resources/bg.jpg');

  const [modal,setModal] = useState(false);
  const [newTask, setNewTask] = useState('')

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


  function ModalView(){
    return(
      <Modal
        animationType="slide"
        transparent={true}
        visible={modal}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >

        <View style={styles.centeredView}>

          <View style={styles.modalView}>

            <TextInput autoFocus={true} value={newTask} editable onChangeText={(text) => {setNewTask(text)}}></TextInput>

            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={() => {
                addInList();
              }}
            >
              <Text style={styles.textStyle}>Adicionar Tarefa</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    );
  }

  function deleteItem(posicion){
    alert(posicion)

    let newTasks = tasks.filter((val) =>{
      return val.id != posicion;
    })

    setTasks(newTasks);
  }

  function addInList(){
    setModal(!modal);
    id = 0;
    if(tasks.length > 0){
      id = tasks[tasks.length-1].id + 1
    }
    let obj = {id: id, task: newTask}
    setTasks([...tasks, obj]) 
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
      <ModalView></ModalView>
      {

        tasks.map(function(val){      
          return(<ComponentList taskText={val.task} id={val.id}></ComponentList>)
        })

      }

      <TouchableOpacity style={styles.addTask} onPress={() => setModal(!modal)}>
        <Text style={styles.addTaskText}>Adicionar Tarefa</Text>
      </TouchableOpacity>

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
  addTask: {
    padding: 15,
    textAlign: 'center',
    backgroundColor: 'gray',
    marginTop: 14,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 9
  },
  addTaskText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  },
  //Estilos para nossa modal
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:'rgba(0,0,0,0.5)'
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    zIndex:5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }

});
