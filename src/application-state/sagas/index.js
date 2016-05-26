import { fork } from 'redux-saga/effects'
import api from 'src/api'
import SaveText from './SaveText'

// start the daemons
export default function * root () {
    yield fork(SaveText(api).watcher)
}