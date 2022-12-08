import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { addToWatchLater, addToFavourites, addToHistory, addToSearchResult } from '../redux/actions/movies'

const MovieDetails = ({ navigation, moviesState, addToSearchResult, addToFavourites, addToHistory, route }) => {
    const { id } = route.params
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
        <View>
            <Text>{movie?.Title}</Text>
        </View>
    )
}

const mapStateToProps = (moviesState) => (moviesState)
const mapDispatchToProps = { addToWatchLater, addToFavourites, addToHistory, addToSearchResult }

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails)