import React, { Component } from 'react';
import { View } from 'react-native';
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
      <View style={styles.container}>>
        <SearchBar
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
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    alignSelf: "stretch",
    justifyContent: "flex-start",
    margin: 10,
    paddingTop: 60,
    backgroundColor: "yellow"
  },
  inputPlace: {
    padding: 20,
    backgroundColor: 'green',
    alignSelf: "stretch"
  },
  
export default SearchPage;