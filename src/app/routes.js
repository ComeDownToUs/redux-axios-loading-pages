import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import NotFoundPage from './components/catches/not-found-page';

import HomePage from './components/catches/home-page';
import PokeList from './components/pokemon/pokelist';
import Pokemon from './components/pokemon/pokemon';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path='pokelist' component={PokeList} />
    <Route path='pokemon/:id' component={Pokemon} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);
