require('css/index.css');

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {HashRouter, Switch, Route} from 'react-router-dom';

import Header from 'Header';
import E1ListDetailHoc from 'example1/ListDetailHoc';

const App = () => (
    <div>
        <div id="row1">
            <Header/>
        </div>
        <div id="row2">
            <Route path="/example1/:id?" component={E1ListDetailHoc} />
        </div>
    </div>
);

const element = document.getElementById('root');

const app = (
    <HashRouter>
        <App />
    </HashRouter>
);

ReactDOM.render(app, element);
