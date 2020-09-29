import React from 'react';
import {View, Text} from 'react-native';
import Feed from '../../components/Feed';
import Stories from '../../components/Stories';

export default function Home() {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Text>Welcome To Home Screen</Text>
      <Stories />
      <Feed />
    </View>
  );
}
