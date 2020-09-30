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
    borderRadius: 15,
    elevation: 10,
    backgroundColor: 'white',
    marginHorizontal: 5,
    marginVertical: 10,
    display: 'flex',
    flexDirection: 'row',
  },
  card: {
    flexDirection: 'row',
    width: '98%',
  },
  img: {
    width: 60,
    height: 60,
    borderRadius: 5,
    marginTop: 20,
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
