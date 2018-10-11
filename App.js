import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, AsyncStorage} from 'react-native';
import SearchPage from './modules/pages/search-page';
import Auth from './modules/pages/auth';
import JoinRoom from './modules/pages/join-room';
import DjPage from './modules/pages/dj-page';
import firebase from 'firebase';
import { createStackNavigator } from "react-navigation";

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home',
  };

  state = {
    currentUser: '',
    currentUserName: ''
  }

  componentDidMount() {
   const config = {
     apiKey: "AIzaSyDiROfE0E83mxIz2V3CDUsMmi0pO4u2lLc",
     authDomain: "let-me-dj.firebaseapp.com",
     databaseURL: "https://let-me-dj.firebaseio.com",
     projectId: "let-me-dj",
     storageBucket: "let-me-dj.appspot.com",
     messagingSenderId: "59693446433"
   };

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

  onSubmitNewUser = async (name) => {
    try {
      const result = await firebase.database().ref('users').push({ name })
    
      if (result) {
        const currentUser = result.key;
        this.setState({currentUser});
        const userId = result.key;
        firebase.database().ref(`users/${userId}`)
          .once('value', (data) => {
            const currentUserName = data.toJSON().name;
            this.setState({currentUserName})
            console.log(currentUserName);
            this.props.navigation.navigate('Join', { currentUser, currentUserName })
          })
      }

    } catch(err) {
      console.log(err);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.text_container}>
          <Text style={styles.text}>Your DJ name</Text>
        </View>
        <View>
          <Auth onSubmitUser={this.onSubmitNewUser} />
        </View>
      </View>
    );
  }
}

// This is our "App" component
export default createStackNavigator(
 {
   Home: { screen: HomeScreen },
   Join: { screen: JoinRoom },
   DjPage: { screen: DjPage },
   SearchPage: { screen: SearchPage },
 },
 {
   initialRouteName: 'Home',
 },
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 200
  },
  text: {
    fontSize: 20,
    marginRight: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
