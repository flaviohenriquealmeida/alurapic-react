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
// tudo precisa estar dentro dele
import { Provider } from 'react-redux';
import store from './store';

// BrowserRouter can have only one element, that's why the 
// div is necessary
// https://medium.com/@AkyunaAkish/understanding-react-router-4-df73a66d96c4
// precisa do Switch caso contrário renderizará mais de um compo

// é no Provider que definimos a store
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
