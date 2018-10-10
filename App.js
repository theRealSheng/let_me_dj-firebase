import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
// import SearchPage from './modules/pages/search-page';
// import DjPage from './modules/pages/dj-page';
import Auth from './modules/pages/auth';
import firebase from 'firebase';
import conf from './global'

export default class App extends Component {

  componentWillmount() {
    var config = {
      apiKey: "AIzaSyDiROfE0E83mxIz2V3CDUsMmi0pO4u2lLc",
      authDomain: "let-me-dj.firebaseapp.com",
      databaseURL: "https://let-me-dj.firebaseio.com",
      projectId: "let-me-dj",
      storageBucket: "let-me-dj.appspot.com",
      messagingSenderId: "59693446433"
    };

    firebase.initializeApp(config);

  //   console.log(firebase);

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
    firebase.database().ref('users').push({name})
    .then(() => {
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
