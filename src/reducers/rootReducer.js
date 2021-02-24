import {incrementCounter} from '../actions/actions' //deconstruct the action not the action type.
import actionTypes from '../actionTypes/actionTypes'

const initialState = { // define the initial state as an object, just as the action
    count:0
}

const rootReducer=(state=initialState, action) => { // 2 arguments state and action. state is defined as initial state which is an object just as the action is an object

    switch(action.type) {
        case actionTypes.INCREMENT:
            return {count: state.count +1}
        case actionTypes.DECREMENT:
            return{count: state.count -1}
        default:
            return state
    }



     
}

export default rootReducer