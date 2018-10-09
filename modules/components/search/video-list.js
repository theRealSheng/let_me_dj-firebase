import React, { Component } from 'react';
import { View } from 'react-native';
import VideoItem from './video-item';

class VideoList extends Component {
    
  VideoItem = props.videos.map((video) => {
    return (
      <VideoList
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video} />
      );
  });

  render() {
    return (
      <View>
        {VideoItem}
      </View>
    );
  }
}

export default VideoList;