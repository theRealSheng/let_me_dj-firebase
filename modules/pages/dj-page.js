import React, { Component } from 'react';
import { View, Text } from 'react-native';
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
    }
  }

  componentDidMount() {
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
  }

  render() {
    return (
      <View>
        <Text>Hello</Text>
        <MusicVote />
      </View>
    );
  }
}

export default DjPage;