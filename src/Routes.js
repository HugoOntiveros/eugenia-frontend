import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Views
import Home from './containers/HomeContainer';
import Nosotros from './containers/NosotrosContainer';
import Products from './containers/ProductsContainer';
import NotFound from './containers/NotFoundContainer';

export default
    <Switch>
        <Route
            exact path="/"
            component={Home} />
        <Route
            exact path="/nosotros"
            component={Nosotros} />
        <Route
            exact path="/productos"
            component={Products} />
        <Route
            component={NotFound} />
    </Switch>
    ;