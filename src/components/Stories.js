import React from 'react';
import {View, Text, FlatList} from 'react-native';
import StoryItem from './StoryItem';
const DATA=""
export default function Stories() {
  return (
    <View>

     <FlatList
        data={DATA}
        renderItem={({item}) => {
          return <StoryItem name={item['humanLabel']} pic={item['picture']} />;
        }}></FlatList>
    </View>
  );
}
