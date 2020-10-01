import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
 
export default function StoryItem(dataArray){
    return(
        <View style={styles.container}>
        <TouchableOpacity style={styles.item}>
        <Image source={{uri:dataArray.pic}} style={styles.img} resizeMode="cover" />
    <Text style={styles.text} numberOfLines={1}>{dataArray.name}</Text>
        </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        marginBottom:15,
        alignItems:"center",
        alignContent:"center"
        
     },
     item:{
        // backgroundColor:"white",
         width:80,
         height:80,
         alignContent:"center",
         alignItems:"center",
         borderRadius:15,
         padding:6,
         textAlign:"center"
        // elevation:10
     },
     img:{
        width:70,
        height:70,
       borderRadius:35,
     },
     text:{
        color:"black",
        fontWeight:"bold",
        fontSize:10,
        marginTop:5,
     },
})