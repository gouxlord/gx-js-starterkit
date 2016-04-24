import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import MainLayout from './ui/layouts/main-layout';
import HomeView from './ui/views/home-view';
import Header from './ui/views/header-view';
import appStore from './redux/index'

ReactDOM.render((
    <Provider store={appStore}>
        <Router  history={hashHistory}>
            <Route path="/" component={MainLayout}>
                <IndexRoute component={HomeView}/>
                <Route path="lol" component={Header}/>
            </Route>
        </Router>
    </Provider>
), document.getElementById('app'));
