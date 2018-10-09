import React, { Component } from 'react';
import { View, TextInput } from 'react-native';

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
            onChange={(term) => this.setState({term})}
        />
      </View>
    );
  }
}

export default SearchBar;