import React, { Component } from 'react';
import { View } from 'react-native';
import VideoItem from './video-item';

class VideoList extends Component {
    
  render() {
    VideoItem = props.videos.map((video) => {
      return (
      <VideoList
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video} />
      );
    })
    return (
      <View>
        {VideoItem}
      </View>
    );
  }
}

export default VideoList;