import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Iframe from 'react-iframe';
import firebase from 'firebase';
import MusicVote from './../components/dj/music-vote';
import { createStackNavigator } from "react-navigation";

class DjPage extends Component {
  static navigationOptions = {
    title: "Dj"
  };

  constructor(props) {
    super(props);

    this.state = {
      currentUser: this.props.navigation.getParam('currentUser', ''),
      currentUserName: this.props.navigation.getParam('currentUserName', ''),
      roomId: this.props.navigation.getParam('roomId', ''),
      roomPeople: this.props.navigation.getParam('holdArray', ''),
      myVideoList: this.props.navigation.getParam('videoList', ''),
    }
  }

  componentDidMount() {
    const roomId = this.state.roomId;
    this.props.navigation.addListener(
      'willFocus',
      () => firebase.database().ref(`room/${roomId}`)
        .on('value', (data) => {
          const oldPeople = data.toJSON().people;
          let holdArray = [];

          for (let people in oldPeople) {
            if (holdArray.indexOf(oldPeople[people]) === -1) {
              holdArray.push(oldPeople[people]);
            }
          }

          this.setState({ roomPeople: holdArray })
        }),
    );

    const videoList = this.props.videoList;

    const videosId = videoList.map((video) => video.id.videoId);
    
    videosId.forEach((videoId) => {
      setInterval( ()=> {
        const videoURl = `https://www.youtube.com/embed/${videoId}`;
      }, 60000)
    })
  }


  render() {
    return (
      <View>
        <View>
          <Text>Hello</Text>
        </View>
        <View>
          <Iframe style={styles.video} url={videoURl}></Iframe>
        </View>
        <View>
          <MusicVote />
        </View>
        <View>
          <Button 
          onPress={() => this.props.navigation.navigate('SearchPage', { roomId })} 
          title={'Search Songs'} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  video: {
    width: 300,
    height: 250
  }
})

export default DjPage;