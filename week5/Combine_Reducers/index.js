const store = require ("./Reducers/store.js")
const actions = require ("./Reducers/favoriteThings")
const actions2 = require ("./Reducers/youTubeVideo")
store.dispatch(actions2.setYouTubeTitle("Any Title"))
store.dispatch(actions2.incrementViewCount())
store.dispatch(actions2.upvoteVideo())
store.dispatch(actions2.downVoteVideo())

store.dispatch(actions.addFavoriteThing("Icecream"))
store.dispatch(actions.removeFavoriteThing("Icecream"))