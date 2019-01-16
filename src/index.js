import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(<App />, document.getElementById(newFunction()));

function newFunction() {
    console.log(document.getElementById('root'))
    return 'root';
}

