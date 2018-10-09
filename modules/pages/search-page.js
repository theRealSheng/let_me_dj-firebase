import React, { Component } from 'react';
import { View } from 'react-native';
import YTSearch from 'youtube-api-search'
import SearchBar from '../components/search/search-bar';

const API_KEY = '';

class SearchPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchVideos: [],
      myVideoList: [],
      selectedVideo: null
    }
  }

  videoSearch = (term) => {
    YTSearch({ key: API_KEY, term: term }, (videos) => {
      this.setState({
        searchVideos: videos
      });
    });
  }

  render() {
    return (
      <View>
        <SearchBar
          onSearchChange={this.videoSearch}
        />
      </View>
    );
  }
}

export default SearchPage;