import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Button,
  Text,
  TextInput,
  Platform,
  AsyncStorage
} from "react-native";
import firebase from 'firebase';
import config from './global';

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

export default class joinRoom extends Component {

  state = {
    currentUser: '',
    room: ''
  }

  async componentDidMount() {

    firebase.initializeApp(config);

    this.state.currentUser = await AsyncStorage.getItem('currenUser');
    }

    onPressCreate = () => {
      const currentUser = this.state.currentUser;
      const room = this.state.text;

    firebase.database().ref('roomID')
      .set({room: room, people: currentUser})
      .then((result) => {
        console.log(result);
        this.setState({room: result.key})
        // REroute to create and go to Room page
        alert('Created new room');
      })
      .catch((err) => {
        console.log(err);
      }) 
  }
  onChangesRoom = (room) => {
    this.setState({room})
  }

  onPressJoin() {
    // POST to Join
    firebase.database().ref('currentID')
      .push(this.state.text)
      .then((result) => {
        this.setState({currentUser: result.key})
        // REroute to Room page
        alert('Joined new room');
      })
      .catch((err) => {
        console.log(err);
      }) 
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>Let Me DJ!</Text>
        <Text style={styles.dialogText}>
          Create a room or join existing one!
        </Text>
        <Text style={styles.dialogText}>Enter four digits</Text>

        <View style={styles.inputPlace}>
          <TextInput
            onChangeText={(text) => this.onChangesRoom(text)}
            value={this.state.room}
            maxLength={4}
            style={styles.input}
            autoCapitalize="characters"
            placeholder={"Create a Room"}
          />
          <Button onPress={() => this.onPressCreate} title={"Create"} />
        </View>

        <View style={styles.inputPlace}>
          <TextInput
            value={this.state.room}
            maxLength={4}
            style={styles.input}
            autoCapitalize="characters"
            placeholder={"Join Room"}
          />
          <Button onPress={() => this.props.onPressCreate()} title={"Join"} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    alignSelf: "stretch",
    justifyContent: "flex-start",
    margin: 10,
    paddingTop: 60,
    backgroundColor: "white"
  },
  inputPlace: {
    padding: 20,
    alignSelf: "stretch"
  },

  input: {
    height: 50,
    alignSelf: "stretch",
    alignContent: "center",
    fontSize: 20
  },
  headerText: {
    fontSize: 32
  },
  dialogText: {
    fontSize: 16,
    padding: 5
  },
  text: {
    marginTop: 20,
    fontSize: 24
  }
});

export default joinRoom;