import { func } from "prop-types"
import  {createStore} from "redux"

export function start() {
    return {
        type: "start"
    }
}

export function stop() {
    return {
        type: "stop"
    }
}
var initialState = {miliseconds: 0, seconds: 0,
minutes: 0, hours: 0, laps: [], intervalId: ""}

function reducer(state=initialState, action) {
    switch(action.type) {
        case "start":
            var hours = state.hours
            var minutes = state.minutes
            var seconds = state.seconds
            var miliseconds = state.miliseconds

            if(minutes > 60){
                hours += 1
                minutes = 0
            }
            if(seconds > 60){
                minutes += 1
                seconds = 0
            }
            if(miliseconds > 1000){
                seconds += 1
                miliseconds = 0
            } else{
                miliseconds += 1
            }
            return {
                hours: hours,
                minutes: minutes,
                seconds: seconds,
                miliseconds: miliseconds
            }
        case "stop":
            return {
                count: state.count - 1
            }
        default:
            return state
    }
}




const store = createStore(reducer)
store.subscribe(() => console.log(store.getState()))
export default store
// store.dispatch({type: "start"})
// store.dispatch({type: "start"})
// store.dispatch({type: "stop"})