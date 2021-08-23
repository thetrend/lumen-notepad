import { useEffect } from 'react';
import {
  HashRouter,
  Route,
  Switch
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';
import { loadUser } from '../actions/auth';
import Login from './Login';
import Dashboard from './Dashboard';
import PrivateRoute from './PrivateRoute';

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <PrivateRoute exact path='/' component={Dashboard} />
        <Route exact path='/login' component={Login} />
      </Switch>
    </HashRouter>
  </Provider>
  );
}

export default App;