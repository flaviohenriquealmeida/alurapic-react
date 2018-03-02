import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import PhotoContainer from './containers/PhotoContainer/PhotoContainer';
import PhotosContainer from './containers/PhotosContainer/PhotosContainer';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render((
    <Provider store={ store }>
        <BrowserRouter>
            <div className="container">
                <Switch>
                    <Route exact path="/form" component={PhotoContainer}/>
                    <Route exact path="/form/:id" component={PhotoContainer}/>
                    <Route exact path="/" component={PhotosContainer}/>
                    <Redirect from="*" to="/" />
                </Switch>
        </div>
        </BrowserRouter>
    </Provider>
  ), document.getElementById('root'))

registerServiceWorker();
