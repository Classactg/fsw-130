const redux = require("redux")
const favoriteReducer = require("./favoriteThings") 
const youTubeVideo = require("./youTubeVideo")
const combinedReducer = redux.combineReducers({
    favoriteReducer, youTubeVideo
})

const store = redux.createStore(combinedReducer)

store.subscribe(() => {
    console.log(store.getState())
})
store.dispatch({
    type: "SET_YOUTUBE_TITLE",
    payload: "First Time"
})
store.dispatch({
    type: "INCREMENT_VIEW_COUNT"
})
store.dispatch({
    type: "UPVOTE_VIDEO"
})
store.dispatch({
    type: "DOWNVOTE_VIDEO"
})