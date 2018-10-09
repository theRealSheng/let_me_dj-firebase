import React, { Component } from 'react';
import { View } from 'react-native';

class MusicVote extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Image 
            style={{width: 300, height: 200}}
             source={{uri: 'https://placekitten.com/408/287'}} />
        </View>
        <View> 
          <Image  
            style={{width: 300, height: 200}}
            source={{uri: 'https://placekitten.com/408/287'}} />
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