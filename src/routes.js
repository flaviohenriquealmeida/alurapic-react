import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import asyncComponent from './asyncComponent';
import PhotosContainer from './containers/PhotosContainer/PhotosContainer';

// lazy loading
const PhotoContainer = asyncComponent(() =>
    import('./containers/PhotoContainer/PhotoContainer').then(module => module.default)
);

export default () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={ PhotosContainer }/>
            <Route exact path="/photos" component={ PhotosContainer }/>
            <Route exact path="/photo/new" component={ PhotoContainer }/>
            <Route exact path="/photo/:id" component={ PhotoContainer }/>
            <Redirect from="*" to="/" />
        </Switch>
    </BrowserRouter>
);