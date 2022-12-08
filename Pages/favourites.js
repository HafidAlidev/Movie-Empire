import { View, Text,FlatList } from 'react-native'
import React from 'react'
import { connect } from 'react-redux'
import { addToWatchLater, addToFavourites, addToHistory, addToSearchResult, clearSearchResult } from '../redux/actions/movies'
import Button from '../custom componet/Button';

const renderFavourites = ({ item }) => (
  <Text>{item.Title}</Text>
);

const Favourites = ({ navigation, moviesState, clearSearchResult }) => {
  return (
    <View>
      <Text>favourites</Text>
      <FlatList data={moviesState.favourites} renderItem={renderFavourites} />
      <Button title="Back" onPress={() => {
        clearSearchResult()
        navigation.navigate("Home")
      }} />
    </View>
  )
}

const mapStateToProps = (moviesState) => (moviesState)
const mapDispatchToProps = { addToWatchLater, addToFavourites, addToHistory, addToSearchResult, clearSearchResult }

export default connect(mapStateToProps, mapDispatchToProps)(Favourites)