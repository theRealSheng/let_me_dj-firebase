import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, AsyncStorage} from 'react-native';
// import SearchPage from './modules/pages/search-page';
// import DjPage from './modules/pages/dj-page';
import Auth from './modules/pages/auth';
import JoinRoom from './modules/pages/join-room';
import firebase from 'firebase';
import config from './global';

export default class App extends Component {

  state = {
    currentUser: ''
  }

  componentDidMount() {

    firebase.initializeApp(config);

  //   // Create data
  //   firebase.database().ref('users/001').set(
  //     {
  //       name: 'Rasbin user',
  //       age: 28
  //     }
  //   ).then(() => {
  //     console.log(' Inserted...')
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   })

  //   // Select data - on = when changes once = called once
  //   firebase.databse().ref('users').on('value', (data) => {
  //     console.log(data.toJSON());
  //   })

  //   // Update information
  //   firebase.database().ref('users/004').update({
  //     name: ' Sheng'
  //   })

  //   // Remove data - Delete last folder/item name
  //   firebase.database().ref('users/004/name').remove()
    }

  onSubmitNewUser = (name) => {
    firebase.database().ref('users')
      .push({ name })
      .then((result) => {
        AsyncStorage.setItem('currentUser', 'result.key');
        this.setState({currentUser: result.key})
        // REroute to join Room page
        alert('added new user');
      })
      .catch((err) => {
        console.log(err);
      }) 
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome Dj!</Text>
        <Auth onSubmitUser={this.onSubmitNewUser} />
        <JoinRoom></JoinRoom>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
