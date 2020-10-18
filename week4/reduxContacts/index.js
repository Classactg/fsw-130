const redux = require("redux")

function addContact(amount) {
    return {
        type: "ADD",
        payload: amount
    }
}

function deleteContact(thing) {
    return {
        type: "DELETE",
        payload: thing
    }
}

const initialState = {
    
    contacts: []
}

function reducer(state = initialState, action) {
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

const store = redux.createStore(reducer)
store.subscribe(() => {
    console.log(store.getState())
})


store.dispatch(addContact("Panthro"))

store.dispatch(addContact("Liono"))

store.dispatch(deleteContact(1))

