import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Dimensions,
  Modal,
} from 'react-native';

import ImageGallery from './ImageCompnent';

export default class ImageGalleryComp extends Component {
  state = {
    modalVisible: false,
    modalImage: require('../assets/test.jpg'),
    images: [
      require('../assets/test.jpg'),
      require('../assets/test.jpg'),
      require('../assets/test.jpg'),
      require('../assets/test.jpg'),
      require('../assets/test.jpg'),
      {
        uri:
          'http://commons.wikimedia.org/wiki/Special:FilePath/Frankfurter%20Buchmesse%202011%20-%20Daniela%20Katzenberger%202.JPG',
      },
      {
        uri:
          'http://commons.wikimedia.org/wiki/Special:FilePath/Hideaki%20Anno%20cropped%201%20Hideaki%20Anno%2020141030%202.jpg',
      },
    ],
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
