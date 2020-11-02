export function addMovie(amount) {
    return {
        type: "ADD",
        payload: amount
    }
}

export function deleteMovie(thing) {
    return {
        type: "DELETE",
        payload: thing
    }
}
