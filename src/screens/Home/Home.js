import React from 'react';
import {StyleSheet, View} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Feed from '../../components/Feed';
import TopBar from '../../components/TopBar';
import StoryComp from '../Stories/StoryComp';

export default function Home() {
  return (
    <View style={{alignItems: 'center', justifyContent:"center"}}>
      <TopBar />
      <ScrollView showsVerticalScrollIndicator={false}>
      <StoryComp style={styles.card} />
      <Feed/>
      </ScrollView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    elevation: 10,
    backgroundColor: '#fff',
    shadowOffset: {width: 1, height: 1},
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 10,
    marginVertical: 10,
    display: 'flex',
    flexDirection: 'column',
  },
});
