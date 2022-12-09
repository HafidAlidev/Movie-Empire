import { ADD_FAVOURITES, ADD_HISTORY, ADD_REVIEW, ADD_SEARCH_RESULT, ADD_WATCHLATER, CLEAR_SEARCH_RESULT } from "../actionTypes"

export const addToSearchResult = (value) => ({
    type: ADD_SEARCH_RESULT,
    payload: {
        value: value
    }
})

export const addToWatchLater = (value) => ({
    type: ADD_WATCHLATER,
    payload: {
        value: value
    }
})

export const addToFavourites = (value) => ({
    type: ADD_FAVOURITES,
    payload: {
        value: value
    }
})

export const addToHistory = (value) => ({
    type: ADD_HISTORY,
    payload: {
        value: value
    }
})

export const clearSearchResult = () => ({
    type: CLEAR_SEARCH_RESULT,
    payload: {}
})

export const addReview = (value) => ({
    type: ADD_REVIEW,
    payload: {
        value: value
    }
})