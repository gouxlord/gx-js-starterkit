import { combineReducers } from 'redux'
import {reducer as formReducer} from 'redux-form';
import configuration from './configuration'
import text from './text'

const reducers = combineReducers({
    configuration,
    text,
    form: formReducer
});

export default reducers;