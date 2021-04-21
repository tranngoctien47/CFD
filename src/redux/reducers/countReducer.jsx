import { COUNT_DECREMENT, COUNT_INCREMENT } from "../type";

let initialState = {
    count: 0
}

export default function authReducer(state = initialState, action) {
    // console.log(action, state)
    switch (action.type) {
        case COUNT_INCREMENT:
            return {
                ...state,
                count: state.count + (action.payload || 1)
            }
        case COUNT_DECREMENT:
            return {
                ...state,
                count: state.count - (action.payload || 1)
            }
        default:
            return state;
    }
}