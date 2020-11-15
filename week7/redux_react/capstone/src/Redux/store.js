import movies from "./movies/reducer.js"
import {createStore, combineReducers} from "redux"
import tvShows from "./movies/tvShows/reducer"
console.log(movies, "line4")
console.log(tvShows, "line5")
const rootReducer = combineReducers({movies: movies, tvShows: tvShows})
const store = createStore(rootReducer)
store.subscribe(() => {
    console.log(store.getState())
})

export default (store)