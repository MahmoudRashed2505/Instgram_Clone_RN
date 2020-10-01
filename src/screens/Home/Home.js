import React from 'react';
import {View, Text} from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';
import Feed from '../../components/Feed';
import Stories from '../../components/Stories';
import TopBar from '../../components/TopBar';
import StoryComp from '../Stories/StoryComp
export default function Home() {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
        <TopBar/>
      <Stories />

  );
}
