import React, { Component } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
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
      <View style={styles.container}>
        <ScrollView style={styles.videos}>
          {videoItems}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginRight: 10,
    marginLeft: 10,
  },
  videos: {
    flex: 1,
  }
})

export default VideoList;