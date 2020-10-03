import React from 'react';
import {View, StyleSheet, FlatList, TextInput} from 'react-native';
import StoryItem from '../../components/StoryItem';
import query from '../../assets/JSON/Search Query.json';

const DATA = query;

export default function SearchComp() {
  return (
    <View style={styles.container}>
      <FlatList
      showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={DATA}
        renderItem={({item}) => {
          return <StoryItem name={item['humanLabel']} pic={item['picture']} />;
        }}></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '95%',
    height: 110,
    alignContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 10,
    marginLeft:9
  },
});
