import React, { Component } from 'react';
import { View } from 'react-native';

class VideoItem extends Component {
  imageURL = this.props.video.snippet.thumbnails.default.url;
  render() {
    return (
      <View>
        <li onClick={() => this.props.onSelectVideo(video)}>
        <View>
          <Image
            style={{ width: 300, height: 200 }}
            source={{ uri: imageURL }}
          />
        </View>
        <View>
          <Text>{this.props.video.snippet.title}</Text>
        </View>
        </li>
      </View>
    );
  }
}

export default VideoItem;