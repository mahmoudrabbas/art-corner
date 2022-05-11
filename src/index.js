import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import App from './components/App';
import {BrowserRouter} from 'react-router-dom';
import '../node_modules/react-toastify/dist/ReactToastify.css'
ReactDOM.render(
    <BrowserRouter>
    <App/>
    </BrowserRouter>,
document.getElementById("root"));