import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import FollowCard from '../../components/FollowCard.js'
import PostCard from '../../components/PostCard.js'
import query from '../../components/query.json'


function Activity(){

    const DATA = query
    return(
        <View style={styles.container}>
            <View style={styles.cardContainer}>
                <FollowCard />
            </View>  
            <View>
                <Text style={styles.txt}>Earlier</Text>
            </View>
            <View style={styles.cardContainer}>
              
                <FlatList
                    showsVerticalScrollIndicator={false}

                    data={DATA}
                    renderItem={({ item }) => {
                        return (<PostCard name={item["name"]}  title={item["title"]} img={item["img"]} pic={item["pic"]}/>)
                    }}
                ></FlatList>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"column",
        backgroundColor:"white"
        
    },
    cardContainer:{
        alignItems: "center",
        marginTop: 30,
      
    },
    txt:{
        marginLeft:10,
        fontSize:18,
        color:"black"
    }
})

export default Activity