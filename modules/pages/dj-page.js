import React, { Component } from 'react';
import { View } from 'react-native';
import DjSeat from './../components/dj/dj-seat';

class DjPage extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //  roomDjs: '',
    //  roomCode: '',
    //  currentUser: ''
    // }
  }

  // check if it works
  componentDidlMount() {
    fetch('url')
      .then(() => res.json())
      .then((chatRoom) => {
        // this.setState({chatRoom})
      })
      .catch((err) => {
        console.log(err.message);
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