import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import downVote from './../../../assets/pictures/DOWN.png';
import upVote from './../../../assets/pictures/UP.png';

class MusicVote extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View onClick={() => this.props.onVote('down')}>
          <Image 
            style={{width: 300, height: 200}}
             source={downVote} />
        </View>
        <View onClick={() => this.props.onVote('up')}> 
          <Image  
            style={{width: 300, height: 200}}
            source={upVote} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {

  },
  spot: {

  }
})

export default MusicVote;