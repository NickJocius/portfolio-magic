import React, { Fragment, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from './pages/Home';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import RegisterComplete from './pages/auth/RegisterComplete';

import { auth } from './firebase';
import { useDispatch } from 'react-redux';

import Header from './components/nav/Header';
import Navbar from './components/nav/Navbar';
import ForgotPassword from './pages/auth/ForgotPassword';

const App = () => {

  const dispatch = useDispatch();

  // check firebase auth state
  useEffect(() => {

    const unsubscribe = auth.onAuthStateChanged(async (user) => {

      if (user) {

        // get user token
        const idTokenResult = await user.getIdTokenResult();

        dispatch({
          type: 'LOGGED_IN_USER',

          payload: {

            email: user.email,
            token: idTokenResult.token
          },

        });
      }
    });

    // clean up

    return () => unsubscribe();

  }, [dispatch])

  return (
    <Fragment>
      <Header />
      <Navbar />
      <ToastContainer />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/register/complete" component={RegisterComplete} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/forgot/password" component={ForgotPassword} />
      </Switch>
    </Fragment>
  );
}

export default App;
