import React from 'react';
import {View, StyleSheet, FlatList, TextInput} from 'react-native';
import SearchItem from '../../components/SearchItem';
import query from '../../assets/JSON/Search Query.json';

const DATA = query;

export default function SearchComp() {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.serachbar}
        placeholder="Search"
        placeholderTextColor="black"></TextInput>
      <FlatList
        data={DATA}
        renderItem={({item}) => {
          return <SearchItem name={item['humanLabel']} pic={item['picture']} />;
        }}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  serachbar: {
    paddingLeft: 20,
    fontSize: 14,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderWidth: 1,
    borderColor: 'white',
    margin: 10,
    borderRadius: 25,
    color: 'black',
    fontWeight: 'bold',
    elevation: 10,
  },
});
