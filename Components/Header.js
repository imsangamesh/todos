import { View , Text ,StyleSheet } from "react-native";

export default function Header(){

    return(
    <View style={styles.header}>
        <Text style={styles.title}>myTodos</Text>
    </View>
    )
    
}

const styles = StyleSheet.create({
    title:{
        fontWeight:'bold',
        fontSize:20,
        textAlign:'center',
    },
    header:{
        backgroundColor:'coral',
        padding:20,
        
      },
});