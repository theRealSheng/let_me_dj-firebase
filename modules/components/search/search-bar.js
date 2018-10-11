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
        <View style={styles.input_container}>
          <TextInput
            value={this.state.term}
            onChangeText={(term) => this.onChangeText(term)}
            style={styles.textInput}
            placeHolder="Type the song or artist"
          />
        </View>
        <View>
          <Button
            onPress={this.onButtonPress} 
            title={"Search"} 
          />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginRight: 20,
    marginLeft: 20,
    padding: 20,
  },
  input_container: {
    padding: 20,
    width: 220
  },
  textInput: {
    width: 300,
    padding: 20,
    borderColor: 'red',
    borderWidth: 5,
    borderRadius: 8,
  }
});

export default SearchBar;