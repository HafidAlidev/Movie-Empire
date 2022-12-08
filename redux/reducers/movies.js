import { ADD_FAVOURITES, ADD_HISTORY, ADD_SEARCH_RESULT, ADD_WATCHLATER, CLEAR_SEARCH_RESULT } from "../actionTypes"

const initialState = {
    searchResult: [],
    watchLater: [],
    favourites: [],
    history: []
}

export default function (movies = initialState, action) {
    switch (action.type) {
        case ADD_SEARCH_RESULT: {
            const { value } = action.payload
            return { ...movies, searchResult: [...movies.searchResult, value] }
        }
        case ADD_WATCHLATER: {
            const { value } = action.payload
            return { ...movies, watchLater: [...movies.watchLater, value] }
        }
        case ADD_FAVOURITES: {
            const { value } = action.payload
            return { ...movies, favourites: [...movies.favourites, value] }
        }
        case ADD_HISTORY: {
            const { value } = action.payload
            return { ...movies, history: [...movies.history, value] }
        }
        case CLEAR_SEARCH_RESULT: {
            console.log("hello124")
            return { ...movies, searchResult: [] }
        }
        default:
            return movies
    }
}