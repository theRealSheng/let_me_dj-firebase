import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

class DjSeat extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.spot}>
          <Text>Dj </Text>
        </View>
        <View style={styles.spot}>
          <Text>Dj </Text>
        </View>
        <View style={styles.spot}>
          <Text>Dj </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: 250,
    height: 180,
    backgroundColor: 'blue',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  spot: {
    flex: 1,
    backgroundColor: 'red',
    width: 50,
    height: 80,
    marginRight: 20,
    marginLeft: 20,
  },
})

export default DjSeat;