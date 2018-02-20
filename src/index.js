import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
// load bootstrap as global
import 'bootstrap/dist/css/bootstrap.css';
// npm install react-router-dom --save
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import PhotoForm from './pages/PhotoForm/PhotoForm';
import PhotoList from './pages/PhotoList/PhotoList';

// BrowserRouter can have only one element, that's why the 
// div is necessary

// precisa do Switch caso contrário renderizará mais de um compo
ReactDOM.render((
    <BrowserRouter>
        <div className="container">
            <Switch>
                <Route path="/list" component={PhotoList}/>
                <Route path="/form" component={PhotoForm}/>
                <Redirect from="*" to="/list" />
            </Switch>
       </div>
    </BrowserRouter>
  ), document.getElementById('root'))

registerServiceWorker();
