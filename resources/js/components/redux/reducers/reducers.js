import { ADD_TEST, REMOVE_TEST } from '../actions/actions';

const intialState = {
    value: []
}

function rootReducer(state = intialState, action){
    switch(action.type){
        case ADD_TEST:
            return {
                value: [
                    ...state.value,
                    {
                        value: action.value
                    }
                ]
            };
        case REMOVE_TEST:
            return {
                value: [
                    ...state.value,
                    {
                        value: action.value
                    }
                ]
            };
        default:
            return state;
    }
}

export default rootReducer;