import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import MainLayout from './ui/layouts/MainLayout';
import HomeView from './ui/views/HomeView';
import SecondaryView from './ui/views/SecondaryView';
import appStore from './redux/index'

ReactDOM.render((
    <Provider store={appStore}>
        <Router  history={hashHistory}>
            <Route path="/" component={MainLayout}>
                <IndexRoute component={HomeView}/>
                <Route path="1" component={SecondaryView}/>
            </Route>
        </Router>
    </Provider>
), document.getElementById('app'));
