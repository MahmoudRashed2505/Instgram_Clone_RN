/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View, Text, StyleSheet, FlatList, TextInput } from 'react-native';
import SearchItem from './SearchItem'
import query from './query.json'

const DATA= query
 

function App(){
 
  return(
    <View style={styles.container}>
      <TextInput style={styles.serachbar} placeholder="Search" placeholderTextColor="#FFF"></TextInput>
      <FlatList
       data={DATA}
                renderItem={({ item}) => {
                    return (<SearchItem name={item["humanLabel"]} pic={item["picture"]}  />)
                }}
                ></FlatList>
      <SearchItem/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:"#1f1f1f",
  },
  serachbar:{
    paddingLeft:20,
    fontSize:16,
    backgroundColor: "#1f1f1f",
    color:"white",
    borderWidth:1,
    borderColor:"#3d3d3d",
    margin:10,
    borderRadius:25

  }

  
})



export default App;
