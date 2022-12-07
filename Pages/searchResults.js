import { View, Text, Button, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { addToWatchLater, addToFavourites, addToHistory, addToSearchResult } from '../redux/actions/movies'

const renderSearchResults = ({ item }) => (
  <Text>{item.Title}</Text>
);

const SearchResults = ({ navigation, moviesState, addToSearchResult,route }) => {

  const { searchtext } = route.params;
  const url = "https://www.omdbapi.com/?s="+ searchtext + "&page=1-100&apikey=ee42d47b"



  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        json.Search.map(movie => {
          addToSearchResult(movie)
        });
      });
  }, []);

  return (
    <View>
      <FlatList data={moviesState.searchResult} renderItem={renderSearchResults}/>
      <Button title="Back" onPress={() => navigation.navigate("Home")} />
    </View>
  )
}

const mapStateToProps = (moviesState) => (moviesState)
const mapDispatchToProps = { addToWatchLater, addToFavourites, addToHistory, addToSearchResult }

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults)