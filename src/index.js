import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux';
import store from './store';
import Routes from './routes';

ReactDOM.render((
    <div class="container">
        <Provider store={ store }>
            <Routes/>
        </Provider>
    </div>
  ), document.getElementById('root'))

registerServiceWorker();
