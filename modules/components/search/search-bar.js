import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Button } from 'react-native';

class SearchBar extends Component {
  constructor(props) {
      super(props);
      this.state = {term: ''};
  }

  onChangeText = (text) => {
    this.setState({term: text});
  }
  
  onButtonPress = () => {
    const term = this.state.term;
    this.props.onSearchChange(term)
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputPlace}>
          <TextInput
            value={this.state.term}
            onChangeText={(term) => this.onChangeText(term)}
            style={styles.textInput}
          />
        </View>
        <View style={{backgroundColor: 'red', width: 100, height: 100}}>
          <Button
            onPress={() => this.onButtonPress} title={"Search"} 
          />
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
    backgroundColor: "yellow"
  },
  inputPlace: {
    padding: 20,
    backgroundColor: 'green',
    alignSelf: "stretch"
  },
  input: {
    height: 50,
    alignSelf: "stretch",
    alignContent: "center",
    fontSize: 20
  },
 

});

export default SearchBar;