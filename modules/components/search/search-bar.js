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
      <View>
        <TextInput
          value={this.state.term}
          onChangeText={(term) => this.onChangeText(term)}
          style={styles.textInput}
        />
        <Button
          onPress={() => this.onButtonPress} title={"Search"} 
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    borderColor: 'blue',
    borderWidth: .5,
    width: 100,
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
  }
});

export default SearchBar;