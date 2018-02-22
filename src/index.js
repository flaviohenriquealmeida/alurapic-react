import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import PhotoForm from './pages/PhotoForm/PhotoForm';
import PhotoList from './pages/PhotoList/PhotoList';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render((
    <Provider store={ store }>
        <BrowserRouter>
            <div className="container">
                <Switch>
                    <Route exact path="/form" component={PhotoForm}/>
                    <Route exact path="/form/:id" component={PhotoForm}/>
                    <Route exact path="/" component={PhotoList}/>
                    <Redirect from="*" to="/" />
                </Switch>
        </div>
        </BrowserRouter>
    </Provider>
  ), document.getElementById('root'))

registerServiceWorker();
