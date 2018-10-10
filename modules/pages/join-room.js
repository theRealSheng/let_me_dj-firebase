import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Button,
  Text,
  TextInput,
  Platform,
} from "react-native";
import firebase from 'firebase';
import { createStackNavigator } from "react-navigation";

class JoinRoom extends Component {
  static navigationOptions = {
    title: "Rooms"
  };

  constructor(props){
    super(props)

    this.state = {
      currentUser: this.props.navigation.getParam('currentUser', ''),
    };
  }
  

  onPressCreate = () => {
    const currentUser = this.state.currentUser;
    const room = this.state.room;
    
    firebase.database().ref(`room/${room}`)
      .set({people: currentUser})
      .then((result) => {
        this.props.navigation.navigate('DjPage', { room, currentUser });
      })
      .catch((err) => {
        console.log(err);
      })
  };

  onChangesRoom = (room) => {
    this.setState({room});
  };

  onPressJoin = () => {
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
  };

  onChangesNewRoom = (newRoom) => {
   this.setState({newRoom})
  };

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
         <Button onPress={this.onPressCreate} title={"Create"} />
       </View>

       <View style={styles.inputPlace}>
         <TextInput
          onChangeText={(text) => this.onChangesNewRoom(text)}
           value={this.state.newRoom}
           maxLength={4}
           style={styles.input}
           autoCapitalize="characters"
           placeholder={"Join Room"}
         />
         <Button onPress={() => this.props.onPressJoin} title={"Join"} />
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

export default JoinRoom;