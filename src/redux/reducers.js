import { combineReducers } from 'redux';
import { ADD_TEXT, UPDATE_CURRENT_TEXT} from './actions';

const initialState = {
    texts: [],
    currentText: ""
}

function appStore(state = initialState, action) {
    switch (action.type) {
        case ADD_TEXT:
            return Object.assign({}, state, {
                texts: [
                    ...state.texts,
                    {
                        text: state.currentText
                    }
                ],
                currentText: ''
            });
        case UPDATE_CURRENT_TEXT:
            return Object.assign({}, state, {
                currentText: action.text
            });
        default:
            return state
    }
}
export default appStore;