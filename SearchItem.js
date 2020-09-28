import React  from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, Image, TouchableOpacity } from 'react-native';

export default function SearchItem(dataArray){
    return(
        <View style={styles.container}>
        <TouchableOpacity style={styles.item}>
        <Image source={{uri:dataArray.pic}} style={styles.img} resizeMode="contain" />
    <Text style={styles.text}>{dataArray.name}</Text>
        </TouchableOpacity>
        </View>
    )
}

const styles= StyleSheet.create({
    container:{
       backgroundColor:"#1f1f1f",
       alignItems:"center",
       alignContent:"center",
       padding:10
    },
    item:{
        backgroundColor:"black",
        width:"100%",
        height:100,
        flexDirection:"row",
        alignContent:"center",
        alignItems:"center",
        borderWidth:2,
        borderColor:"#3d3d3d",
        borderRadius:20,
        padding:15
    },
    img:{
       width:70,
       height:70,
      borderRadius:200
    },
    text:{
       color:"white",
       fontSize:18,
       marginLeft:15
    },
})
