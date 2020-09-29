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
import qurey from './test.json';
import ImageGalleryComp from './testImg';

const testImg = qurey;

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Header',
  },
];

function renderImg() {
  const pic = item['picture'];
  const index = item['humanLabel'];
  return testImg.map((pic, index) => {
    return (
      <View
        key={item['humanLabel']}
        style={{width: width / 3, height: width / 3, margin: 10}}>
        <Image
          style={{
            flex: 1,
            width: undefined,
            height: undefined,
            margin: 4,
            borderRadius: 10,
          }}
          source={item['picture']}
        />
      </View>
    );
  });
}

export default function Profile(props) {
  return (
    <View>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => {}}>
          <Image source={require('../assets/plus.png')} style={styles.addBtn} />
        </TouchableOpacity>
        <Text style={styles.Text}>mahmoudhossam98</Text>
        <TouchableOpacity onPress={() => {}}>
          <Image
            source={require('../assets/down-arrow.png')}
            style={styles.arrow}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Image
            source={require('../assets/menu.png')}
            style={styles.menuBtn}
          />
        </TouchableOpacity>
      </View>
      <ScrollView style={{marginBottom: 80}}>
        <View style={styles.container}>
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
              <Text style={{fontWeight: 'bold', margin: 5}}>
                {' '}
                Mahmoud Rashed{' '}
              </Text>
              <Text style={{margin: 4}}>
                {' '}
                Computer Science Student {'\n'} Cairo Citizin {'\n'} React
                Native Developer {'\n'} MERN Stack Developer
              </Text>
              <TouchableOpacity onPress={() => {}}>
                <Text style={{color: '#34bdeb', margin: 4, marginRight: 6}}>
                  https://github.com/MahmoudRashed2505
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.editProfile} onPress={() => {}}>
                <Text style={{fontWeight: 'bold', marginTop: 6}}>
                  Edit Profile
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.controlProfile}>
            <TouchableOpacity
              style={{flex: 0.5, alignItems: 'center'}}
              onPress={() => {}}>
              <Image
                source={require('../assets/grid.png')}
                style={styles.controlBTNs}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{flex: 0.5, alignItems: 'center'}}
              onPress={() => {}}>
              <Image
                source={require('../assets/bookmark.png')}
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
  header: {
    display: 'flex',
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
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
  addBtn: {
    width: 25,
    height: 25,
    marginLeft: 10,
  },
  menuBtn: {
    width: 25,
    height: 25,
    marginLeft: 80,
  },
  arrow: {
    width: 15,
    height: 15,
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

  Text: {
    marginLeft: 10,
    marginRight: 10,
    fontWeight: '700',
    fontSize: 18,
  },
});