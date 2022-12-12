import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { addToWatchLater, addToFavourites, addToHistory, addToSearchResult } from '../redux/actions/movies'
import Button from '../custom componet/Button'
import MovieCardstyles from '../custom componet/moviecard'

const MovieDetails = ({ navigation, moviesState, addToFavourites, addToWatchLater, route }) => {
    const { id, searchText } = route.params
    const [movie, setMovie] = useState()

    useEffect(() => {
        for (let i = 0; i < moviesState.searchResult.length; i++) {
            const movie = moviesState.searchResult[i];
            if (movie.imdbID === id) {
             
                setMovie(movie)
                
            }
        }
    }, [])

    return (
        
        <View style = {MovieCardstyles.container}>
            
            
            <Text style = {MovieCardstyles.items}>{movie?.Title}</Text>
             
            <Button title='Save to Watch Later' onPress={() => { addToWatchLater(movie) }} />
            <Button title='Add to Favourites' onPress={() => { addToFavourites(movie) }} />
            <Button title="Back" onPress={() => {
                navigation.navigate("Search Result", { searchText: searchText })
            }} />
        </View>
    )
}

const mapStateToProps = (moviesState) => (moviesState)
const mapDispatchToProps = { addToWatchLater, addToFavourites, addToHistory, addToSearchResult }

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails)