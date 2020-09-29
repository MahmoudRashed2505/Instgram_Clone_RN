import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';

export default function ProfileInfo() {
  return (
    <View style={styles.card}>
      <View style={styles.imgConnectionContainer}>
        <Image
          source={{
            uri:
              'https://avatars1.githubusercontent.com/u/37276859?s=400&u=67b9dd2ae3a13f3cf804921cfa44f0487da5785a&v=4',
          }}
          style={styles.profilePic}
        />
        <View style={styles.connections}>
          <TouchableOpacity
            style={styles.connectionsContainer}
            onPress={() => {}}>
            <Text style={styles.connectionText}>
              {' '}
              3{'\n'}
              <Text style={{fontWeight: 'bold'}}>Posts</Text>
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.connectionsContainer}
            onPress={() => {}}>
            <Text style={styles.connectionText}>
              {' '}
              123{'\n'}
              <Text style={{fontWeight: 'bold'}}>Followers</Text>
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.connectionsContainer}
            onPress={() => {}}>
            <Text style={styles.connectionText}>
              {' '}
              250{'\n'}
              <Text style={{fontWeight: 'bold'}}>Following</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bioInformationContainer}>
        <Text style={{fontWeight: 'bold', margin: 5}}> Mahmoud Rashed </Text>
        <Text style={{margin: 4}}>
          {' '}
          Computer Science Student {'\n'} Cairo Citizin {'\n'} React Native
          Developer {'\n'} MERN Stack Developer
        </Text>
        <TouchableOpacity onPress={() => {}}>
          <Text style={{color: '#34bdeb', margin: 4, marginRight: 6}}>
            https://github.com/MahmoudRashed2505
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.editProfile} onPress={() => {}}>
          <Text style={{fontWeight: 'bold', marginTop: 6}}>Edit Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  editProfile: {
    borderRadius: 10,
    marginBottom: 15,
    marginTop: 15,
    height: 35,
    marginLeft: 15,
    marginRight: 4,
    elevation: 10,
    alignItems: 'center',
    borderWidth: 1,
    backgroundColor: '#fff',
    width: '90%',
    borderColor: 'gray',
  },
  bioInformationContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    margin: 4,
  },
  imgConnectionContainer: {
    display: 'flex',
    flexDirection: 'row',
    margin: 3,
  },
  connections: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  connectionsContainer: {
    marginLeft: 5,
  },
  connectionText: {
    padding: 2,
    margin: 5,
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 80,
    marginBottom: 10,
    marginLeft: 10,
    marginTop: 10,
    marginRight: 5,
  },
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
