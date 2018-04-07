import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { BrowserRouter as Router } from 'react-router-dom';

import '../node_modules/bootstrap/scss/bootstrap.scss';

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById('root')
);