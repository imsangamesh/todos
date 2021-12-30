import { View , Text , FlatList , StyleSheet , TouchableOpacity } from "react-native";

export default function List(props){

    const todos = props.data ;
    const pressHandler = props.pressHandler ;
    
    return(
    <View style={styles.container}>
        
        <FlatList 
        data={todos}
        renderItem={( ({item})  =>  
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <Text style={styles.todos}>{item.data}</Text>
        </TouchableOpacity> )}
        />
        
    </View>
    )
    

}

const styles = StyleSheet.create({
    container:{
        marginHorizontal:25 ,
        borderStyle:'solid',
        borderColor:"black",
        // borderWidth:2 ,
        height:570
    },  
    todos:{
        padding:10,
        borderWidth:1,
        marginVertical:5,
        borderRadius:8,
        borderStyle:"dashed",
        borderColor:'#800080',
        backgroundColor : '#f5deb3',
        color:'black'
      }
});


