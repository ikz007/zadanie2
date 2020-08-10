import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import About from './About';
import Home from './Home';
import NotFound from './NotFound';
export default () => (
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/Hellas" component={About}/>
        <Route component={NotFound} />
    </Switch>
);