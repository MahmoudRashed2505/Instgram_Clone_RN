import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

function PostCard(props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.card}>
        <Image source={{uri: props.pic}} style={styles.profile} />
        <View style={styles.txtArea}>
          <Text style={styles.txtHeader} numberOfLines={3}>
            {props.name}
          </Text>
          <Text style={styles.txt}>{props.title}</Text>
        </View>
        <Image source={{uri: props.img}} style={styles.img} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 90,
    borderRadius: 15,
    borderColor: 'white',
    borderWidth: 0.08,
    marginBottom: 10,
    elevation: 2,
    backgroundColor: 'white',
  },
  card: {
    width: '100%',
    height: 90,
    flexDirection: 'row',
  },
  img: {
    width: 60,
    height: 60,
    borderRadius: 5,
    marginLeft: 20,
    marginTop: 10,
    marginRight: 15,
  },
  profile: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginLeft: 20,
    marginTop: 10,
  },
  txtArea: {
    width: 200,
    padding: 20,
  },
  txt: {
    fontSize: 16,
    color: 'black',
  },
  txtHeader: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
  },
});

export default PostCard;
