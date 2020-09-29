import React, {Component} from 'react';
import {StyleSheet, Image} from 'react-native';

export default class ImageGallery extends Component {
  render() {
    return <Image source={this.props.imgsource} style={styles.image} />;
  }
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: undefined,
    height: 400,
    alignSelf: 'stretch',
    borderRadius: 8,
  },
});
