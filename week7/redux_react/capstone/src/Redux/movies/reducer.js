const initialState = {
    
    movies: []
}

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case "DELETE":
            console.log(action.payload)
            var arr = state.movies;
            arr.splice(action.payload, 1)
            return {
                ...state,
                movies: arr
            }
        case "ADD":
            console.log(action.payload)
            return {
                ...state,
                movies: [...state.movies, action.payload]
            }
        default:
            return state
    }
}