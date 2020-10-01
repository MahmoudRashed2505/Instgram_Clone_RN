import React, {Component} from 'react';
import {StyleSheet, View, TouchableWithoutFeedback} from 'react-native';

import query from '../assets/JSON/Search Query.json';

const Data = query;

var imgs = Data.map((item) => {
  return {uri: item['picture']};
});

import ImageGallery from './ImageCompnent';

export default class ImageGalleryComp extends Component {
  state = {
    modalVisible: false,
    modalImage: require('../assets/Images/test.jpg'),
    images: imgs,
  };

  setModalVisible(visible, imagekey) {
    this.setState({modalImage: this.state.images[imagekey]});
    this.setState({modalVisible: visible});
  }

  getImage() {
    return this.state.modalImage;
  }

  render() {
    let images = this.state.images.map((val, key) => {
      return (
        <TouchableWithoutFeedback
          key={key}
          onPress={() => {
            this.setModalVisible(true, key);
          }}>
          <View style={styles.imageWrap}>
            <ImageGallery imgsource={val} />
          </View>
        </TouchableWithoutFeedback>
      );
    });

    return <View style={styles.container}>{images}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  imageWrap: {
    margin: 2,
    padding: 2,
    height: 150,
    width: 100,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
});
