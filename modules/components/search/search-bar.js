import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

class SearchBar extends Component {
  constructor(props) {
      super(props);
      this.state = {term: ''};
  }
  
  render() {
    return (
      <View>
        <TextInput
          value={this.state.term}
          onChangeText={(term) => this.props.onSearchChange(term)}
          style={styles.textInput}
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