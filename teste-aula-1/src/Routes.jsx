import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home/index';
import Anuncio from './pages/Anuncio/index';

//import Home from './pages/Home';

const Routes = () => (
    <Switch>
        <Route path="/" exact component= { Home } />
        <Route path="/anuncio/:id" component={ Anuncio }/>
    </Switch>
);

export default Routes;