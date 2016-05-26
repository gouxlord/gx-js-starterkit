/* eslint-disable no-constant-condition */

import {take, call, put} from 'redux-saga/effects'
import { ADD_TEXT, addTextToList} from 'src/application-state/actions';

export default (api) => {
    
    function * worker (values, resolve, reject) {
        try {
            const response = yield call(api.addText, values.text);
            yield put(addTextToList(response));
            resolve();
        } catch (e) {
            reject();
            console.log(e);
        }
    }

    function * watcher () {
        while (true) {
            const action = yield take(ADD_TEXT);
            const { values, resolve, reject } = action;
            yield call(worker, values, resolve, reject);
        }
    }

    return {
        watcher,
        worker
    }
}