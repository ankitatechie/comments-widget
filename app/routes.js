import React from 'react';
import { Route, Router, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

import App from './components/App';
import CommentsList from './components/CommentsList';

 const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={CommentsList} />
      </Route>
    </Router>
  </Provider>
);

export default router;
