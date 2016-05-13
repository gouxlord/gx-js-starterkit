//Libs
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
//View
import MainLayout from 'src/ui/layouts/MainLayout';
import HomeView from 'src/ui/views/HomeView';
import SecondaryView from 'src/ui/views/SecondaryView';
//State
import appStore from 'src/application-state/index'
//Css
import 'normalize-css/normalize.css'
import 'src/ui/css/base.scss'

//Cool feature, webpack output if(true) or if(false)
if(process.env.NODE_ENV === 'dev'){
    console.warn('Dev mode enabled')
}

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
