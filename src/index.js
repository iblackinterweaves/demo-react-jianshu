import React from 'react';
import ReactDOM from 'react-dom';

import { HashRouter } from 'react-router-dom';
import { Route } from 'react-router'
import { Provider } from 'react-redux'

import store from './store';
import App from './App';
import Home from './pages/home';
import Detail from './pages/detail/loadable';
import Login from './pages/login/login';

import { GlobalStyle } from "./style";

import { GlobalStyle as GlobalIconFont } from './statics/iconfont/iconfont';

const Main = (
    <Provider store={store}>
        <GlobalIconFont/>
        <GlobalStyle/>
        <HashRouter>
            <div>
                <App />
                <Route exact path='/' component={Home}></Route>
                <Route path='/login' component={Login}></Route>
                <Route path='/detail/:id' component={Detail}></Route>
            </div>
        </HashRouter>
    </Provider>
);

ReactDOM.render(Main, document.getElementById('root'));

