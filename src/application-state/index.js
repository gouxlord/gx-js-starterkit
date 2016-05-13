import { createStore, compose } from 'redux'
import reducers from './reducers'
import ReduxDevTool from 'src/dev-tools/ReduxDevTool';

const enhancer = compose(
    ReduxDevTool.instrument()
);

function configureStore() {
    if(process.env.NODE_ENV === 'production'){
        return createStore(reducers);
    }
    return createStore(reducers, enhancer);
}

let appStore = configureStore();

export default appStore;