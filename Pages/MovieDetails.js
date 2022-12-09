import { View, Text, StyleSheet, TextInput, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { addToWatchLater, addToFavourites, addToHistory, addToSearchResult, addReview } from '../redux/actions/movies'
import Button from '../custom componet/Button'

const MovieDetails = ({ navigation, moviesState, addToFavourites, addToWatchLater, addReview, route }) => {
    const { id, searchText, user } = route.params
    const [movie, setMovie] = useState()
    const [review, setReview] = useState('')
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        const reviewsList = []
        for (let i = 0; i < moviesState.searchResult.length; i++) {
            const movie = moviesState.searchResult[i];
            if (movie.imdbID === id) {
                setMovie(movie)
            }
        }
        for (let i = 0; i < moviesState.reviews.length; i++) {
            const review = moviesState.reviews[i];
            if (review.movieId === id) {
                reviewsList.push(review)
            }
        }
        setReviews(reviewsList)
        console.log(user)
    }, [moviesState])

    const handleReviewSubmit = () => {
        addReview({ movieId: id, review: review, postedBy: user.name })
        console.log(user.name)
    }

    const renderReviews = ({ item }) => (
        <View>
            <Text>Posted by: {item.postedBy}</Text>
            <Text>{item.review}</Text>
        </View>
    );

    return (
        <View style={styles.container} >
            <Text>{movie?.Title}</Text>
            <Button title='Save to Watch Later' onPress={() => { addToWatchLater(movie) }} />
            <Button title='Add to Favourites' onPress={() => { addToFavourites(movie) }} />
            <TextInput style={styles.reviewInput} placeholder="Write a review..." onChangeText={setReview} />
            <Button title='Submit Review' onPress={handleReviewSubmit} />
            <Text>Reviews:</Text>
            <FlatList data={reviews} renderItem={renderReviews} />
            <Button title="Back" onPress={() => {
                navigation.navigate("Search Result", { searchText: searchText })
            }} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", alignItems: "center" },
    reviewInput: { margin: 15, width: "50%", height: 30, alignItems: 'left', borderWidth: 2 },
});

const mapStateToProps = (moviesState) => (moviesState)
const mapDispatchToProps = { addToWatchLater, addToFavourites, addToHistory, addToSearchResult, addReview }

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails)