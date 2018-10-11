import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import YTSearch from 'youtube-api-search'
import SearchBar from '../components/search/search-bar';
import VideoList from '../components/search/video-list';

const API_KEY = 'AIzaSyDY5WbMGtUR8CKmPtolO2VLlKOsX24IbPM';
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
      console.log(videos);
      this.setState({
        searchVideos: videos
      });
    });
  }

  selectVideo = (video) => {
      // Call the back to update DBS
      fetch('url', {
        method: 'POST',
        body: JSON.stringify(data),
      })
      .then((res) => res.json())
      .then((info) => {
        console.log(info)
      })
    }

  render() {
    const searchedVideos = this.state.searchVideos;
    return (
      <View style={styles.container}>
        <View>
          <SearchBar onSearchChange={this.videoSearch}/>
        </View>
        <View>
          <VideoList 
            onVideoSelect={this.selectVideo}
            videos={searchedVideos} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    alignSelf: "stretch",
    margin: 10,
  }
})

export default SearchPage;