import { View, Text, Button, FlatList, StyleSheet, Image } from 'react-native'
import React from 'react'
import { connect } from 'react-redux'
import { addToWatchLater, addToFavourites, addToHistory, addToSearchResult, clearSearchResult } from '../redux/actions/movies'

const renderHistory = ({ item }) => (
  <View style = {styles.items}>
  <Image  style= {styles.movie} source={{uri:item.Poster, width:200,height:200 }}/>
  <Text style = {styles.itemsText}>{item.Title}</Text>
  </View>
);

const History = ({ navigation, moviesState }) => {
  return (
    <View style = {styles.container}>
      <Text>history</Text>
      <FlatList style ={styles.historyList}
      data={moviesState.history} renderItem={renderHistory} />
      <Button title="Back" onPress={() => {
        clearSearchResult()
        navigation.navigate("Home")
      }} />
    </View>
  )
}

const styles = StyleSheet.create({
  historyList: {alignContent:"stretch", width: "100%"},
  container:{flex: 1,justifyContent: 'center',paddingTop: 40,backgroundColor: "black",padding: 8,},
  items:{borderWidth:1,padding:10,margin:5,borderRadius:5,backgroundColor:"crimson"},  
  itemsText:{color:"white", fontSize:"40px" , fontFamily:"Chicon"} ,
  movie:{alignSelf:"flex-end"}
});


const mapStateToProps = (moviesState) => (moviesState)
const mapDispatchToProps = { addToWatchLater, addToFavourites, addToHistory, addToSearchResult, clearSearchResult }

export default connect(mapStateToProps, mapDispatchToProps)(History)

