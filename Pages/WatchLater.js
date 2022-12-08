import { View, Text,FlatList } from 'react-native'
import React from 'react'
import { connect } from 'react-redux'
import { addToWatchLater, addToFavourites, addToHistory, addToSearchResult, clearSearchResult } from '../redux/actions/movies'
import Button from '../custom componet/Button';

const renderWatchLater = ({ item }) => (
  <Text>{item.Title}</Text>
);

const WatchLater = ({ navigation, moviesState, clearSearchResult }) => {
  return (
    <View>
      <Text>Watch Later</Text>
      <FlatList data={moviesState.watchLater} renderItem={renderWatchLater} />
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