import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import ProfileHeader from '../../components/ProfileHeader';
import ProfileInfo from '../../components/ProfileInfo';
import ImageGalleryComp from '../../components/Posts';

const width = Dimensions.get('window').width;

export default function Profile() {
  return (
    <View>
      <ProfileHeader username="team4_98" />
      <ScrollView style={{marginBottom: 80}}>
        <View style={styles.container}>
          <ProfileInfo
            fullname="Team 4"
            profilePic="https://www.ibdaa.tn/TV/img/team4-logo.png"
            isUser={false}
            type="Edit Profile"
          />
          <View style={styles.controlProfile}>
            <TouchableOpacity
              style={{flex: 0.5, alignItems: 'center'}}
              onPress={() => {}}>
              <Image
                source={require('../../assets/Images/grid.png')}
                style={styles.controlBTNs}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{flex: 0.5, alignItems: 'center'}}
              onPress={() => {}}>
              <Image
                source={require('../../assets/Images/bookmark.png')}
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
  );
}

const styles = StyleSheet.create({
  photoContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    flexGrow: 0.4,
  },
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
