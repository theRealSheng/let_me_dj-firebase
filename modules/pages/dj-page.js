import React, { Component } from 'react';
import { View } from 'react-native';
import DjSeat from './../components/dj/dj-seat';
import firebase from 'firebase';
import { createStackNavigator } from "react-navigation";


class DjPage extends Component {
  static navigationOptions = {
    title: "Dj"
  };

  constructor(props) {
    super(props);

    this.state = {
      currentUser: JSON.stringify(this.props.navigation.getParam('currentUser', '')),
      roomId: JSON.stringify(this.props.getParam('room', '')),
      roomPeople: ''
    }
  }

  // check if it works
  componentDidlMount() {
    const roomId = this.state.roomId;
    firebase.database().ref(`room/${roomId}`).on('value', (data) => {
      this.setState({roomPeople: data.people});
    })
  }


  render() {
    // const roomDj = this.state.chatRoom.djs;
    // const currentUser = this.state.currentUser;
    // const isDj = roomDj.indexOf(currentUser);

    // if (isDj === -1) {
    return (
      <View>
          <DjSeat />
      </View>
    );
    // }
  }
}

export default DjPage;