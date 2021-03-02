import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';

import SignIn from './components/pages/sign-in';
import SignUp from './components/pages/sign-up';
import TodosPage from './components/pages/todos';
import { store } from './state';

const App = () => {
  return (
    <ReduxProvider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/sign-in" component={SignIn} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/" component={TodosPage} />
        </Switch>
      </BrowserRouter>
    </ReduxProvider>
  );
};

export default App;
