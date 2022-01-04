import { useState } from "react";
import { View , Text ,StyleSheet ,Button, TextInput , Alert } from "react-native";

export default function Input(props){

    const [todo,settodo] = useState("");
    const submithandler = props.submithandler ;

    return(
    <View style={styles.container}>

        <View style={styles.input}>
            <TextInput 
            placeholder='scribble ur todo'
            onChangeText={ (value) => settodo(value) }
            />
        </View>
        
        <View style={styles.button}>
            <Button 
             title="add todo"
             color = '#53a1e6'
             onPress={() => {
                if (todo.length > 2){
                    submithandler(todo);
                }
                else{
                    // console.log("errorrrrrrrrr");
                    Alert.alert(
                        'OOPS !' , 'your todo must be atleast 3 characters :( ' , [
                            { text: 'OK' , /*onPress:() => console.log('alert closed')*/ } ,
                        ]
                    )
                }
            }}
            />
        </View>

    </View>
    )
    
}

const styles = StyleSheet.create({
    container:{
        paddingBottom:20,
        paddingTop:10,
        // borderWidth:1,
        marginHorizontal:27,
    },
    input:{
        borderColor:'#53a1e6',
        borderBottomWidth :3,
        marginVertical:10 , 
    }
});