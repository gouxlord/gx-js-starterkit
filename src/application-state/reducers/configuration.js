import { SET_CONFIG} from 'src/application-state/actions';

export default function configuration(state = {}, action) {
    switch (action.type) {
        case SET_CONFIG:
            return Object.assign({}, state, {
                config: action.config
            });
        default:
            return state
    }
}