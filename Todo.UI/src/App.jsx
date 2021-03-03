import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import styled from 'styled-components';

import SignIn from './components/pages/sign-in';
import SignUp from './components/pages/sign-up';
import TodosPage from './components/pages/todos-page';
import { store } from './state';
import useAuthentication from './hooks/use-authentication';
import Header from './components/header';

const SAppContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  min-height: 100vh;
`;
const SBodyContainer = styled.div`
  position: relative;
  margin-top: 4rem;
  padding: 1rem 1.5rem 0;
`;

const PrivateRoute = ({ children, ...rest }) => {
  const isAuthenticated = useAuthentication();

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
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
        <SAppContainer>
          <Header />
          <SBodyContainer>
            <Switch>
              <Route path="/sign-in" component={SignIn} />
              <Route path="/sign-up" component={SignUp} />
              <PrivateRoute path="/">
                <TodosPage />
              </PrivateRoute>
            </Switch>
          </SBodyContainer>
        </SAppContainer>
      </BrowserRouter>
    </ReduxProvider>
  );
};

export default App;
