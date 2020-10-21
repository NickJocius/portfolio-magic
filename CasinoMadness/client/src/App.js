import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import Header from './components/layouts/Header';
import GamePreview from './components/layouts/GamePreview';
import Footer from './components/layouts/Footer';
import Routes from './components/routing/Routes';
import { LOGOUT } from './actions/types';

// Redux
import { Provider } from 'react-redux';
import store from './store.js';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

import './App.css';



const App = () => {
  useEffect(() => {
    // check for token in LS
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    store.dispatch(loadUser());

    // log user out from all tabs if they log out in one tab
    window.addEventListener('storage', () => {
      if (!localStorage.token) store.dispatch({ type: LOGOUT });
    });
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Header />
          <Navbar />
          <section className="body">
            <Switch>

              <Route exact path="/">
                <GamePreview msg="Join the fun with 5 Card Draw. Try your luck against the house." theme="Harley Quinn and Joker" img="poker"
                />
              </Route>

              <Route component={Routes} />

            </Switch>
          </section>
          <Footer />

        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
