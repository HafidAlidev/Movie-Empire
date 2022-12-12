import { View, Text,  FlatList, StyleSheet, Image } from 'react-native'
import React from 'react'
import { connect } from 'react-redux'
import { addToWatchLater, addToFavourites, addToHistory, addToSearchResult, clearSearchResult } from '../redux/actions/movies'
import Button from '../custom componet/Button';
import MovieCardstyles from '../custom componet/moviecard';

const renderHistory = ({ item }) => (
  <View style = {MovieCardstyles.items}>
  
  <Image  style= {MovieCardstyles.movie} source={{uri:item.Poster, width:200,height:200 }}/>
  <Text style = {MovieCardstyles.itemsText}>{item.Title}</Text>
  </View>
);

const History = ({ navigation, moviesState }) => {
  return (
    <View style = {MovieCardstyles.container}>
      <Text>history</Text>
      <FlatList style ={MovieCardstyles.itemsList}
      data={moviesState.history} renderItem={renderHistory} />
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

