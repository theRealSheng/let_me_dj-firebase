import React, { Component } from 'react';
import { View } from 'react-native';

class DjPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
     chatRoom: ''
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
    return (
      <View>

      </View>
    );
  }
}

export default DjPage;