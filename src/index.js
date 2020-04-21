//sole purpose of index file is to render the App to the DOM
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom'
import  { store } from './store';

//#react rendering
ReactDOM.render(
<Provider store={ store }>    
    <Router>
        <App />
    </Router>
</Provider>, document.getElementById('root'));
