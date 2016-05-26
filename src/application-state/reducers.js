import { ADD_TEXT, UPDATE_CURRENT_TEXT, SET_CONFIG} from './actions';

const initialState = {
    texts: [],
    currentText: ''
};

function reducers(state = initialState, action) {
    switch (action.type) {
        case SET_CONFIG:
            console.log(action.config)
            return Object.assign({}, state, {
                config: action.config
            });
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
export default reducers;