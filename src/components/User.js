import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import ProfileInfo from './ProfileInfo';
import ImageGalleryComp from './Posts';
import { useNavigation } from '@react-navigation/native';
import FeedCard from './FeedCard'

export default function User(props) {
    const navigation = useNavigation();
 
  return(
    <View>
      <ScrollView style={{marginBottom: 10}}>
        <View style={styles.container}>
          <ProfileInfo
            // fullname={props.fullname}
            // profilePic={props.img}
            username={props.route.params.name}
            pic={props.route.params.pic}
          />
          <View style={styles.controlProfile}>
            <TouchableOpacity
              style={{flex: 0.5, alignItems: 'center'}}
              onPress={() => {}}>
              <Image
                source={require('../assets/Images/grid.png')}
                style={styles.controlBTNs}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{flex: 0.5, alignItems: 'center'}}
              onPress={() => {}}>
              <Image
                source={require('../assets/Images/bookmark.png')}
                style={styles.controlBTNs}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{alignItems: 'center', marginLeft: 20}}>
          <ImageGalleryComp />
        </View>
      </ScrollView>
      </View>
  )
} 
   

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  controlProfile: {
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
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
  },
  controlBTNs: {
    width: 20,
    height: 20,
    marginVertical: 5,
  },
});
