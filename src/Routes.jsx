import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Catalogue, Favorite, Main, Order, OrderDone, ProductCardDesktop } from './containers';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/catalogue" component={Catalogue} />
        <Route path="/favorite" component={Favorite} />
        <Route path="/order" component={Order} />
        <Route path="/order-done" component={OrderDone} />
        <Route path="/product-card-desktop/:id" component={ProductCardDesktop} />
    </Switch>
);

export default Routes;
