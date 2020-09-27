import React from 'react';
import {View,Text, StyleSheet,Image} from 'react-native';



export default function Profile(props){
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require('../assets/plus.png')} style={styles.addBtn}/>
                <Text style={styles.Text}>
                    mahmoudhossam98
                </Text>
                <Image source={require('../assets/down-arrow.png')} style={styles.arrow}/>
                <Image source={require('../assets/menu.png')} style={styles.menuBtn}/>
            </View>
            <View style={styles.card}>
                <Image source={{uri:'https://avatars1.githubusercontent.com/u/37276859?s=400&u=67b9dd2ae3a13f3cf804921cfa44f0487da5785a&v=4'}}
                style={styles.profilePic}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        display:"flex",
        flexDirection:"column",
        flex:1
    },
    header:{
        display:"flex",
        flexDirection:"row",
        height:50,
        alignItems:"center",
    },
    addBtn:{
        width:25,
        height:25,
        marginLeft:10
    },
    menuBtn:{
        width:25,
        height:25,
        marginLeft:80
    },
    arrow:{
        width:15,
        height:15,
    },
    profilePic:{
        width:100,
        height:100,
        borderRadius:80,
        margin:20,
       
    },
    card:{
        borderRadius:15,
        elevation:10,
        backgroundColor:"#fff",
        shadowOffset:{width:1, height:1},
        shadowColor:'#333',
        shadowOpacity:0.3,
        shadowRadius:2,
        marginHorizontal:10,
        marginVertical:10,
        display:"flex",
        flexDirection:"row",
        alignItems:"center"
    },

    Text:{
        marginLeft:10,
        marginRight:10,
        fontWeight:"700",
        fontSize:18
    }
})