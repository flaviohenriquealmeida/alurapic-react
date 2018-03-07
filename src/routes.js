import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import PhotoContainer from './containers/PhotoContainer/PhotoContainer';
import PhotosContainer from './containers/PhotosContainer/PhotosContainer';

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