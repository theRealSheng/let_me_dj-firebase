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
        <ScrollView>
          {videoItems}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
})

export default VideoList;