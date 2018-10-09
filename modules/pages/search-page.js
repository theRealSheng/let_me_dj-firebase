import React, { Component } from 'react';
import { View } from 'react-native';
import YTSearch from 'youtube-api-search'
import SearchBar from '../components/search/search-bar';

const API_KEY = '';

class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null,
    }
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    return (
      <View>
        <SearchBar
          onSearchTermChange={(term) => this.videoSearch(term)}
        />
      </View>
    );
  }
}

export default SearchPage;