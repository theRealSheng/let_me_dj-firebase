import React, { Component } from 'react';
import { View } from 'react-native';
import YTSearch from 'youtube-api-search'
import SearchBar from '../components/search/search-bar';
import VideoList from '../components/search/video-list';



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
      const data = this.state.myVideoList;

      fetch('url', {
        method: 'POST',
        body: JSON.stringify(data),
      })
      .then(() => res.json())
      .then((info) => {
        console.log(info)
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