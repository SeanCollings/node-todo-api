import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';

import SignIn from './components/pages/sign-in';
import SignUp from './components/pages/sign-up';
import TodosPage from './components/pages/todos';
import { store } from './state';
import { decodeJWT, getCookie } from './utils';
import { LOCAL_TOKEN } from './constants';

const PrivateRoute = ({ children, ...rest }) => {
  const token = getCookie(LOCAL_TOKEN);
  const user = decodeJWT(token);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        !!user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/sign-in',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

const App = () => {
  return (
    <ReduxProvider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/sign-in" component={SignIn} />
          <Route path="/sign-up" component={SignUp} />
          <PrivateRoute path="/">
            <TodosPage />
          </PrivateRoute>
        </Switch>
      </BrowserRouter>
    </ReduxProvider>
  );
};

export default App;
