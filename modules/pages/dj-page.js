import React, { Component } from 'react';
import { View } from 'react-native';
import MusicVote from './../components/dj/music-vote';

class DjPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
     chatRoom: '',
     user: ''
    }
  }

  // check if it works
  componentDidlMount() {
    fetch('url')
      .then(() => res.json())
      .then((chatRoom) => {
        this.setState({chatRoom})
      })
      .catch((err) => {
        console.log(err.message);
      })
  }


  render() {
    const roomDj = this.state.chatRoom.djs;
    const isDj = roomDj.indexOf(user);

    if (isDj === -1) {
      return (
        <View>
          <MusicVote onVote={this.submitVote}/>
        </View>
      );
    }
  }
}

export default DjPage;