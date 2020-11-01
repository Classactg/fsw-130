const redux = require("redux")
const {favoriteThingsReducer} = require("./favoriteThings") 
const {youTubeVideoReducer} = require("./youTubeVideo")
console.log(favoriteThingsReducer)
console.log(youTubeVideoReducer)
const combinedReducer = redux.combineReducers({
    favoriteThingsReducer, youTubeVideoReducer
})

const store = redux.createStore(combinedReducer)

store.subscribe(() => {
    console.log(store.getState())
})

module.exports = (store)
