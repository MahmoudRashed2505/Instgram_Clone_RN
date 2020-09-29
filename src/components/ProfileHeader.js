import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

export default function ProfileHeader() {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => {}}>
        <Image
          source={require('../assets/Images/plus.png')}
          style={styles.addBtn}
        />
      </TouchableOpacity>
      <Text style={styles.Text}>mahmoudhossam98</Text>
      <TouchableOpacity onPress={() => {}}>
        <Image
          source={require('../assets/Images/down-arrow.png')}
          style={styles.arrow}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}}>
        <Image
          source={require('../assets/Images/menu.png')}
          style={styles.menuBtn}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
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
  Text: {
    marginLeft: 10,
    marginRight: 10,
    fontWeight: '700',
    fontSize: 18,
  },
});
