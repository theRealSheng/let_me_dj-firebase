import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Button } from 'react-native';
import VideoItem from './video-item';

class VideoList extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      videosSelected: [],
      roomId: this.props.roomId
    }
  }

  selectVideo = (video) => {
    const videosSelected = [...videosSelected, video];
    this.setState({videosSelected});
  }

  render() {
    const roomId = this.state.roomId;
    const videoItems = this.props.videos.map((video) => {
        return (
          <VideoItem
            selectVideo={this.selectVideo}
            onVideoSelect={this.props.onVideoSelect}
            key={video.etag}
            video={video}
            roomId={roomId} />
          );
    });
    return (
      <View style={styles.video_container}>
        <ScrollView style={styles.videos}>
          {videoItems}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
  video_container: {
    marginRight: 10,
    marginLeft: 10,
  },
  videos: {
    flex: 1,
  }
})

export default VideoList;