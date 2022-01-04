import { useState } from 'react';
import { StyleSheet, Text, View , FlatList, Keyboard , TouchableWithoutFeedback } from 'react-native';
import Header from './Components/Header';
import Input from './Components/Input';
import List from './Components/List';

export default function App() {

  var kc = 1 ;

  const [todos,settodos] = useState([
    {data:'go shopping ' , key:1000},
    {data:'go shopping again ' , key:1001},
    {data:'go shopping again and again ' , key:1002}
  ])

  //delete todo
  const pressHandler = (key) => {
    console.log("clicked")
    settodos(
      alltodos => alltodos.filter( (singletodo) => singletodo.key != key)
    );
  }

  //add todo
  const submithandler = (text) => {
    kc = todos.length+1  ;
    // console.log("presssed --> "+kc);
    settodos( (prevtodos) => [  { data : text , key : kc}  , ...prevtodos ]  );
  }

  return (
    <TouchableWithoutFeedback onPress= { () => Keyboard.dismiss() } >
      <View style={styles.container}>  
        {/* body */}
        <View style={styles.header}>
        <Header />
        </View>

        {/* input */}
        <View style={styles.input}>
          <Input submithandler = {submithandler} />  
        </View>

        {/* list */}
        <View>
          <List data={todos} pressHandler={pressHandler}/>
        </View>

      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    backgroundColor:'#a3d4ff'
  },
  list:{
    paddingHorizontal:20,
  },
  
});
