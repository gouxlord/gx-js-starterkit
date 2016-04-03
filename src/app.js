import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import {syncHistoryWithStore, routerReducer} from 'react-router-redux';
import MainLayout from './layouts/main-layout';
import HomeView from './views/home-view';
import appStore from './redux/index'

ReactDOM.render((
    <Provider store={appStore}>
        <Router  history={hashHistory}>
            <Route path="/" component={MainLayout}>
                <IndexRoute component={HomeView}/>
            </Route>
        </Router>
    </Provider>
), document.getElementById('app'));
