import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Views
import Home from './containers/HomeContainer';
import NotFound from './containers/NotFoundContainer';

export default
    <Switch>
        <Route
            exact path="/"
            component={Home} />
        <Route
            component={NotFound} />
    </Switch>
    ;