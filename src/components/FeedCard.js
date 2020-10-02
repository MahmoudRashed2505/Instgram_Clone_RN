import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image,Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const width = Dimensions.get('window').width


export default function FeedCard(props) {
  const navigation = useNavigation();
  const data = {fullname: 'props.fullname', profilePic: 'props.profilePic'};
  return (
    <View style={styles.card}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.header}
                  onPress={() =>{navigation.navigate('User',{
                      name:props.username,
                      pic:props.profilePic
                  }) }}>
          <Image style={styles.profilePic} source={{uri: props.profilePic}} />
          <Text style={styles.username}>{props.username}</Text>
        </TouchableOpacity>
      </View>
      <Image style={styles.postPic} source={{uri: props.profilePic}} />
      <View style={styles.interactions}>
        <TouchableOpacity onPress={() => {}}>
          <Image
            style={styles.interactionsBTNs}
            source={require('../assets/Images/heart.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Image
            style={styles.interactionsBTNs}
            source={require('../assets/Images/speech-bubble.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Image
            style={styles.interactionsBTNs}
            source={require('../assets/Images/telegram.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.captionContainer}>
        <Text style={styles.captionUsername}>{props.username}</Text>
        <Text style={styles.caption}> This is Caption for the Post</Text>
      </View>
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
    marginHorizontal: 5,
    marginVertical: 10,
    display: 'flex',
    flexDirection: 'column',
    width: (width)-10,
  },
  headerContainer: {
    display: 'flex',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 80,
    marginLeft:15,
    marginVertical: 10,
    resizeMode: 'cover',
  },
  username: {
    fontSize: 15,
    fontWeight: '500',
    marginLeft: 10,
  },
  postPic: {
    width: 324,
    height: 350,
    resizeMode: 'stretch',
    marginLeft:10
  },
  interactions: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  interactionsBTNs: {
    height: 20,
    width: 20,
    margin: 10,
  },
  captionContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 20,
    marginLeft: 10,
  },
  captionUsername: {
    fontWeight: 'bold',
  },
  caption: {
    fontWeight: '200',
  },
});
