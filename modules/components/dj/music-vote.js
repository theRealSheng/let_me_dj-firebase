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
            style={styles.img}
             source={downVote} />
        </View>
        <View onClick={() => this.props.onVote('up')}> 
          <Image  
            style={styles.img}
            source={upVote} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  img: {
    width: 30,
    height: 30
  }
})

export default MusicVote;