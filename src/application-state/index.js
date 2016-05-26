import { createStore, compose, applyMiddleware } from 'redux'
import reducers from './reducers/index'
import ReduxDevTool from 'src/dev-tools/ReduxDevTool';
import createSagaMiddleware from 'redux-saga'
import sagas from './sagas/index'


const sagaMiddleware = createSagaMiddleware()

const enhancer = compose(
    applyMiddleware(sagaMiddleware),
    ReduxDevTool.instrument()
);

function configureStore() {
    if(process.env.NODE_ENV === 'production'){
        return createStore(reducers,applyMiddleware(sagaMiddleware));
    }
    return createStore(reducers, enhancer);
}


let appStore = configureStore();
sagaMiddleware.run(sagas);

export default appStore;