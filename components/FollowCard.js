import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';


function FollowCard() {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.card}>
                
                <Image source={require('./images/img.jpg')} 
                        style={styles.img}
                />
                <View style={{flexDirection:"column"}}>
                    <Text style={styles.txtHeader}>Follow Requests</Text>
                    <Text style={styles.txt}>Approve or ignore requests</Text>
                </View>
               
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width:"95%",
        height:90,
        borderRadius: 5,
        borderColor:"white",
        borderWidth:0.08,
        marginBottom:10,
        
       
    },
    card:{
        width: "100%",
        height: 90,
        //backgroundColor: "blue",
        borderRadius: 2,
        //elevation: 10,
        flexDirection: "row",
    },
    img:{
        width:60,
        height:60,
        borderRadius: 30,
        marginLeft:20,
        marginTop:10
    },
    txtHeader:{
        fontSize:16,
        marginTop:15,
        marginLeft:10,
        color:"white"
    },
    txt:{
        marginLeft: 10,
        color:"#696969"
    }

})

export default FollowCard