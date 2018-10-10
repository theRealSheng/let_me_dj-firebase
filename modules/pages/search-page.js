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

      // Call the back to update DBS
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
    const searchedVideos = this.state.searchVideos;
    return (
      <View>
        <SearchBar
          onSearchChange={this.videoSearch}
        />
        <View>
          <VideoList 
            onVideoSelect={this.selectVideo}
            videos={searchedVideos} />
        </View>
      </View>
    );
  }
}

export default SearchPage;