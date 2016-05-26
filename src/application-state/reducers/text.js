import { ADD_TEXT_TO_LIST} from 'src/application-state/actions';

const initialState = {
    texts: []
};

export default function configuration(state = initialState, action) {
    switch (action.type) {
        case ADD_TEXT_TO_LIST:
            return Object.assign({}, state, {
                texts: [
                    ...state.texts,
                    {
                        text: action.text
                    }
                ],
                currentText: ''
            });
        default:
            return state
    }
}