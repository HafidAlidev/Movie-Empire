import { View, Text, Button } from 'react-native'
import React from 'react'
import { connect } from 'react-redux'
import { addToWatchLater, addToFavourites, addToHistory, addToSearchResult } from '../redux/actions/movies'

const renderFavourites = ({ item }) => (
  <Text>{item.Title}</Text>
);

const Favourites = ({ navigation, moviesState }) => {
  return (
    <View>
      <Text>favourites</Text>
      <FlatList data={moviesState.favourites} renderItem={renderFavourites} />
      <Button title="Back" onPress={() => navigation.navigate("Home")} />
    </View>
  )
}

const mapStateToProps = (moviesState) => (moviesState)
const mapDispatchToProps = { addToWatchLater, addToFavourites, addToHistory, addToSearchResult }

export default connect(mapStateToProps, mapDispatchToProps)(Favourites)