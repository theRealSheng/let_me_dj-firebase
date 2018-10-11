import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, Button } from 'react-native';
import firebase from 'firebase';

class VideoItem extends Component {
  constructor(props){
    super(props);

    this.state = {
      roomId: this.props.roomId
    }
  }

  onSelectVideo = (video) => {
    const roomId = this.props.roomId;
    this.props.onVideoSelect(video)

    firebase.databse().ref(`room/${roomId}`).on('value', (data) => {
      if (data) {
        const music = data.toJSON().music;

        if (music) {
          let holdArray = [];
            for (let song in music) {
              if (holdArray.indexOf(music[song]) === -1) {
                holdArray.push(music[song]);
              }
            }

          firebase.database().ref(`room/${roomId}`)
            .update({music: holdArray})
            .then(() => {
              this.added = 'Added!'
                setTimeout(() => { this.added = ''}, 2000);
            })
          
        }
        else {
          const music = [videoId];
          firebase.database().ref(`room/${roomId}`)
            .update({music});
        }
      }

    })
    firebase.database().on(`room/${roomId}`)
      .update
  }

  render() {
    const imageURL = this.props.video.snippet.thumbnails.default.url;
    return (
      <View style={styles.container}>
        <View onClick={() => this.onSelectVideo(video)}>
          <Image
            style={{ width: 300, height: 200 }}
            source={{ uri: imageURL }}
          />
        </View>
        <View>
          <Text style={styles.containerText}>{this.props.video.snippet.title}</Text>
        </View>
        <View>
          <Text>{this.added}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    alignItems: 'center',
  },
  containerText: {
    padding: 10,
    marginTop: 10,
    fontSize: 25,
  }
});

export default VideoItem;