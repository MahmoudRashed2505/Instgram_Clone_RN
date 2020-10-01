import React from 'react';
import {View, Text} from 'react-native';
import Feed from '../../components/Feed';
import StoryComp from '../Stories/StoryComp';

export default function Home() {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <StoryComp />
      <Feed />
    </View>
  );
}
