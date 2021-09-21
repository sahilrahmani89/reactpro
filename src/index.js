import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
// 
import {AppProvider} from './components/context'

ReactDOM.render(<AppProvider><App /></AppProvider>,document.getElementById('root'));