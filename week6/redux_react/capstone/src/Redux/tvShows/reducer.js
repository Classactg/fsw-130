const initialState = {
    
    tvShows: []
}

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case "DELETE":
            console.log(action.payload)
            var arr = state.tvShows;
            arr.splice(action.payload, 1)
            return {
                ...state,
                tvShows: arr
            }
        case "ADD":
            console.log(action.payload)
            return {
                ...state,
                tvShows: [...state.tvShows, action.payload]
            }
        default:
            return state
    }
}