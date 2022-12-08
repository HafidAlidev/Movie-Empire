import { View, Text, Button, FlatList } from 'react-native'
import React from 'react'
import { connect } from 'react-redux'
import { addToWatchLater, addToFavourites, addToHistory, addToSearchResult, clearSearchResult } from '../redux/actions/movies'

const renderHistory = ({ item }) => (
  <Text>{item.Title}</Text>
);

const History = ({ navigation, moviesState }) => {
  return (
    <View>
      <Text>history</Text>
      <FlatList data={moviesState.history} renderItem={renderHistory} />
      <Button title="Back" onPress={() => {
        clearSearchResult()
        navigation.navigate("Home")
      }} />
    </View>
  )
}

const mapStateToProps = (moviesState) => (moviesState)
const mapDispatchToProps = { addToWatchLater, addToFavourites, addToHistory, addToSearchResult, clearSearchResult }

export default connect(mapStateToProps, mapDispatchToProps)(History)