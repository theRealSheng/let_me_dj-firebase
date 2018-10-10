import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

class VideoItem extends Component {
  render() {
    const imageURL = this.props.video.snippet.thumbnails.default.url;
    return (
      <View style={styles.container}>
        <View onClick={() => this.props.onSelectVideo(video)}>
          <Image
            style={{ width: 300, height: 200 }}
            source={{ uri: imageURL }}
            
          />
        </View>
        <View>
          <Text style={{fontSize:30}}>{this.props.video.snippet.title}</Text>
        </View>
        {/*<View style={styles.text}>
          <Text style={styles.text}>{this.props.video.snippet.title}</Text>
    </View>*/}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    alignItems: 'center',
  },
  text: {
    padding: 10,
    marginTop: 10,
    fontSize: 25
  }
});

export default VideoItem;