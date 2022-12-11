import { View, Text,FlatList } from 'react-native'
import React from 'react'
import { connect } from 'react-redux'
import { addToWatchLater, addToFavourites, addToHistory, addToSearchResult, clearSearchResult } from '../redux/actions/movies'
import Button from '../custom componet/Button';
import MovieCardstyles from '../custom componet/moviecard';

const renderWatchLater = ({ item }) => (
  <Text>{item.Title}</Text>
);

const WatchLater = ({ navigation, moviesState, clearSearchResult }) => {
  return (
    <View style = {MovieCardstyles.container}>
      <View style = {MovieCardstyles.items}>
      <Text>Watch Later</Text>
      <FlatList data={moviesState.watchLater} renderItem={renderWatchLater} />
      </View>
      <Button title="Back" onPress={() => {
        clearSearchResult()
        navigation.navigate("Home")
      }} />
    </View>
  )
}

const mapStateToProps = (moviesState) => (moviesState)
const mapDispatchToProps = { addToWatchLater, addToFavourites, addToHistory, addToSearchResult, clearSearchResult }

export default connect(mapStateToProps, mapDispatchToProps)(WatchLater)