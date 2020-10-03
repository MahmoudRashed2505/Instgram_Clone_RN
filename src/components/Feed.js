import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import query from '../assets/JSON/Search Query.json';
import FeedCard from './FeedCard';

const Data = query;
var imgs = Data.map((item) => {
  return {uri: item['picture']};
});

export default function Feed() {
  return (
    <View style={{width: '100%', marginLeft: 1, alignSelf:"center"}}>
      <FlatList
        data={Data}
        renderItem={({item}) => {
          return (
            <FeedCard
              username={item['humanLabel']}
              profilePic={item['picture']}
            />
          );
        }}
      />
    </View>
  );
}
