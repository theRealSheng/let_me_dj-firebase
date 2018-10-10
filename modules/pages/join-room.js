import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Button,
  Text,
  TextInput,
  TouchableOpacity,
  Platform
} from "react-native";
import User from "./user";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

export default class joinRoom extends Component {
  constructor(props) {
    super(props);
    this.state = { words: [] };
    this.inputRef = React.createRef();
    this.inputText = "";
  }

  onPressButton() {
    this.inputRef.clear();
    this.setState(this.inputText);
  }

  onClickButton() {
    this.inputRef.clear();
    this.setState(this.inputText);
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
            value={this.state.text}
            maxLength={4}
            ref={input => {
              this.inputRef = input;
            }}
            onChangeText={text => {
              this.inputText = text;
            }}
            style={styles.input}
            placeholder={"Create a Room"}
          />
          <Button title={"Create"} onPress={this.onPressButton.bind(this)} />
        </View>

        <View style={styles.inputPlace}>
          <TextInput
            value={this.state.text}
            maxLength={4}

            ref={input => {
              this.inputRef = input;
            }}
            onChangeText={text => {
              this.inputText = text;
            }}
            style={styles.input}
            placeholder={"Join Room"}
          />
          <Button title={"Join"} onPress={this.onClickButton.bind(this)} />
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