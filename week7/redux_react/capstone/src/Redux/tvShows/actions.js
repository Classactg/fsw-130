export function addtvShows(amount) {
    return {
        type: "ADD",
        payload: amount
    }
}

export function deletetvShows(thing) {
    return {
        type: "DELETE",
        payload: thing
    }
}
