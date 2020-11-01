const initialState = {
    
    contacts: []
}

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case "DELETE":
            console.log(action.payload)
            var arr = state.contacts;
            arr.splice(action.payload, 1)
            return {
                ...state,
                contacts: arr
            }
        case "ADD":
            console.log(action.payload)
            return {
                ...state,
                contacts: [...state.contacts, action.payload]
            }
        default:
            return state
    }
}