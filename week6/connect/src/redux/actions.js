export function addContact(amount) {
    return {
        type: "ADD",
        payload: amount
    }
}

export function deleteContact(thing) {
    return {
        type: "DELETE",
        payload: thing
    }
}
