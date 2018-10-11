import React, { Component } from 'react';
import { View, StyleSheet, Button } from 'react-native';
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
      selectedVideo: null,
      roomId: this.props.navigation.getParam('roomId', '')
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

  selectVideo = (video) = {

  }

  returnDjRoom = () => {
    const videoList = this.state.videosSelected;
    this.props.navigation.navigate('DjPage')
  }

  render() {
    const searchedVideos = this.state.searchVideos;
    const roomId = this.props.roomId;
    return (
      <View style={styles.container}>
        <View>
          <Button 
            onPress={this.returnDjRoom}
            title={'Return'}
          />
        </View>
        <View>
          <SearchBar 
            onSearchChange={this.videoSearch}
            roomId={roomId}
            />
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