import React from 'react';
import {View, Text} from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';
import Feed from '../../components/Feed';
import Stories from '../../components/Stories';
import TopBar from '../../components/TopBar';
export default function Home() {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
        <TopBar/>
      <Text>Welcome To Home Screen</Text>
      <Stories />
      <Feed />
    </View>
  );
}
