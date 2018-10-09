import React, { Component } from 'react';
import { View } from 'react-native';
import YTSearch from 'youtube-api-search'
import SearchBar from '../components/search/search-bar';
import VideoList from '../components/search/video-list';

const API_KEY = '';

class SearchPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchVideos: [],
      myVideoList: [],
      selectedVideo: null
    }
    searchVideos = this.state.searchVideos;
  }

  videoSearch = (term) => {
    YTSearch({ key: API_KEY, term: term }, (videos) => {
      this.setState({
        searchVideos: videos
      });
    });
  }

  selectVideo = (video) => {
    // Check if video selected was already added
    const isAlreadyThere = myVideoList.indexOf(video);
    // Not added, then push into the array
    if (isAlreadyThere === -1) {
      this.setState({
        myVideoList: [...myVideoList,video]
      })
    }
  }

  render() {
    return (
      <View>
        <SearchBar
          onSearchChange={this.videoSearch}
        />
        <VideoList 
          onVideoSelect={this.selectVideo}
          searchVideos>
        </VideoList>
      </View>
    );
  }
}

export default SearchPage;