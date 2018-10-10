import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

class DjSeat extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.spot}>

        </View>
        <View style={styles.spot}>

        </View>
        <View style={styles.spot}>

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

export default DjSeat;