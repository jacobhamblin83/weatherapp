import { FETCH_WEATHER } from '../actions/index'

export default function(state = [], action) {
    switch(action.type) {
        case FETCH_WEATHER: 
        // state.push(action.payload.data) THIS IS BAD
        // return state.concat([action.payload.data]);  THIS IS GOOD
        return [ action.payload.data, ...state] //THIS IS GOOD ES6
    }

    return state;
}