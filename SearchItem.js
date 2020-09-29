import React  from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function SearchItem(dataArray){
    return(
        <View style={styles.container}>
        <TouchableOpacity style={styles.item}>
        <Image source={{uri:dataArray.pic}} style={styles.img} resizeMode="cover" />
    <Text style={styles.text}>{dataArray.name}</Text>
        </TouchableOpacity>
        </View>
    )
}

const styles= StyleSheet.create({
    container:{
       backgroundColor:"white",
       alignItems:"center",
       alignContent:"center",
       padding:10
    },
    item:{
        backgroundColor:"white",
        width:"100%",
        height:100,
        flexDirection:"row",
        alignContent:"center",
        alignItems:"center",
        borderWidth:1,
        borderColor:"white",
        borderRadius:20,
        padding:15,
        elevation:10
    },
    img:{
       width:70,
       height:70,
      borderRadius:35
    },
    text:{
       color:"black",
       fontWeight:"bold",
       fontSize:16,
       marginLeft:15
    },
})
