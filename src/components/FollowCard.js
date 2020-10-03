import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

function FollowCard() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.card}>
        <Image
        source={{uri:"https://www.ibdaa.tn/TV/img/team4-logo.png"}}
          style={styles.img}
        />
        <View style={{flexDirection: 'column'}}>
          <Text style={styles.txtHeader}>Follow Requests</Text>
          <Text style={styles.txt}>Approve or ignore requests</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    elevation: 10,
    backgroundColor: 'white',
    marginHorizontal: 10,
    marginVertical: 10,
    display: 'flex',
    flexDirection: 'row',
  },
  card: {
    width: '100%',
    height: 100,
    padding: 10,
    flexDirection: 'row',
  },
  img: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginLeft: 20,
    marginTop: 10,
  },
  txtHeader: {
    fontSize: 16,
    marginTop: 15,
    marginLeft: 10,
    color: 'black',
  },
  txt: {
    marginLeft: 10,
    color: '#696969',
  },
});

export default FollowCard;
