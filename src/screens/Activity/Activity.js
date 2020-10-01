import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import FollowCard from '../../components/FollowCard.js';
import PostCard from '../../components/PostCard.js';
import query from '../../assets/JSON/Activity Query.json';

function Activity() {
  const DATA = query;
  return (
    <View style={styles.container}>
        <View style={styles.bar}>
            <Text style={styles.txtBar}>Activity</Text>
        </View>
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
          renderItem={({item}) => {
            return (
              <PostCard
                name={item['name']}
                title={item['title']}
                img={item['img']}
                pic={item['pic']}
              />
            );
          }}
                  keyExtractor={(item, index) => index.toString()}
          ></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    marginBottom: 60,
  },
  cardContainer: {
    alignItems: 'center',
    marginTop: 20,
    
  },
  txt: {
    paddingLeft: 10,
    marginLeft: 10,
    fontSize: 20,
    color: 'black',
  },
  bar:{
      width: "100%",
      height: 55,
      backgroundColor: "white",
      //borderBottomWidth:0.5,
      //borderBottomColor:"black",
      elevation:5
  },
  txtBar:{
        padding:20,
        fontSize:20,
        fontWeight:"500",
        color:"black"
  }
});

export default Activity;
