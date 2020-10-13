import React, {useState} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import query from '../assets/JSON/Search Query.json';
import FeedCard from './FeedCard';

export default function Feed() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  fetch('https://json.extendsclass.com/bin/6926f9143c99')
    .then((response) => {
      //console.log('success', response);
      return response.json();
    })
    .then((responseJson) => {
      console.log('success', responseJson);
      setData(responseJson);
      setLoading(false);
    })
    .catch((error) => {
      console.log('Error:', error);
    });

  return (
    <View style={{width: '100%', alignSelf: 'center'}}>
      {loading ? (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            height: 80,
          }}>
          <ActivityIndicator size="large" color="#bc2b78" />
        </View>
      ) : (
        <FlatList
          data={data}
          renderItem={({item}) => {
            return (
              <FeedCard
                username={item['humanLabel']}
                profilePic={item['picture']}
              />
            );
          }}
        />
      )}
    </View>
  );
}
