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
        backgroundColor:'#53a1e6',
        padding:20,
        
      },
});