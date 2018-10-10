import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';

class VideoItem extends Component {
  render() {
    const imageURL = this.props.video.snippet.thumbnails.default.url;
    return (
      <View>
        <View onClick={() => this.props.onSelectVideo(video)}>
          <Image
            style={{ width: 300, height: 200 }}
            source={{ uri: imageURL }}
          />
        </View>
        <View>
          <Text>{this.props.video.snippet.title}</Text>
        </View>
      </View>
    );
  }
}

export default VideoItem;