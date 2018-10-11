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
      currentUserName: this.props.navigation.getParam('currentUserName',''),
      room: '',
      newRoom: '',
    };
  }

  onPressCreate = () => {
    this.createNewRoom();
  };

  onChangesNewRoom = (newRoom) => {
   this.setState({newRoom})
  };

  onPressJoin = () => {
    const currentUser = this.state.currentUser;
    const currentUserName = this.state.currentUserName;
    const roomId = this.state.room;
    console.log(roomId);
    firebase.database().ref(`room/${roomId}`)
      .once('value', (data) => {
        if (data) {
          const oldPeople = data.toJSON().people;
          let holdArray = [];
  
          for(let people in oldPeople) {
            if (holdArray.indexOf(oldPeople[people]) === -1) {
              holdArray.push(oldPeople[people]);
            }
          }
  
          holdArray.push(currentUser);
  
          firebase.database().ref(`room/${roomId}`)
            .update({ people: holdArray })
            .then((result) => {
              console.log(roomId);
              this.props.navigation.navigate('DjPage', 
              {
                roomId,
                currentUser,
                holdArray,
                currentUserName
              });
            })
            .catch((err) => {
              console.log(err);
            })
        }
        else {
          this.createNewRoom();
        }
      })
  };

  createNewRoom = () => {
    const currentUser = this.state.currentUser;
    const currentUserName = this.state.currentUserName;
    const room = this.state.newRoom;
    let holdArray = []

    holdArray.push(currentUser);

    firebase.database().ref(`room/${room}`)
      .set({
        people: holdArray
      })
      .then((result) => {
        this.props.navigation.navigate('DjPage', {
          room,
          currentUser,
          currentUserName
        });
      })
      .catch((err) => {
        console.log(err);
      })
  }

  onChangesRoom = (room) => {
    this.setState({room});
  };

 render() {
   return (
     <View style={styles.container}>
       <View>
        <Text style={styles.headerText}>Welcome {this.state.currentUserName}!</Text>
       </View>

       <View>
        <Text style={styles.dialogText}>
          Create a room or join existing one!
        </Text>
       </View>

       <View style={styles.inputPlace}>
         <TextInput
           onChangeText={(text) => this.onChangesNewRoom(text)}
           value={this.state.newRoom}
           maxLength={4}
           style={styles.input}
           autoCapitalize="characters"
           placeholder={"4 Diggit.."}
         />
         <Button onPress={this.onPressCreate} title={"Create"} />
       </View>

       <View style={styles.inputPlace}>
         <TextInput
          onChangeText={(text) => this.onChangesRoom(text)}
           value={this.state.room}
           maxLength={4}
           style={styles.input}
           autoCapitalize="characters"
           placeholder={"4 Diggit..."}
         />
         <Button onPress={this.onPressJoin} title={"Join"} />
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
   alignItems: "center",
 },

 input: {
   height: 50,
   width: 100,
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