import { createStore } from 'redux'
import app from './reducers'

let appStore = createStore(app)

export default appStore;