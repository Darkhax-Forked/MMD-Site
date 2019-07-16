import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Routes} from './routes.js';
import './index.css';

function App() {
    return (
        <BrowserRouter>
            <Routes/>
        </BrowserRouter>
    );
}


const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
