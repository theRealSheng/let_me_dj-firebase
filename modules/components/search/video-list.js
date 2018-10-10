import React, { Component } from 'react';
import { View } from 'react-native';
import VideoItem from './video-item';

class VideoList extends Component {
  constructor(props) {
    super(props)
    
  }
  
  render() {
    const videoItems = this.props.videos.map((video) => {
        return (
          <VideoItem
            onVideoSelect={this.props.onVideoSelect}
            key={video.etag}
            video={video} />
          );
    });
    
    return (
      <View>
        {videoItems}
      </View>
    );
  }
}

export default VideoList;