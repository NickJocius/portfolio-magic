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
import { currentUser } from './functions/auth';

import Header from './components/nav/Header';
import Navbar from './components/nav/Navbar';
import Footer from './components/footer/Footer';
import ForgotPassword from './pages/auth/ForgotPassword';
import History from './pages/user/History';
import Password from './pages/user/Password';
import Wishlist from './pages/user/Wishlist';
import UserRoute from './components/routes/UserRoute';
import AdminRoute from './components/routes/AdminRoute';
import AdminDashboard from './pages/admin/AdminDashboard';


const App = () => {

  const dispatch = useDispatch();

  // check firebase auth state
  useEffect(() => {

    const unsubscribe = auth.onAuthStateChanged(async (user) => {

      if (user) {

        // get user token
        const idTokenResult = await user.getIdTokenResult();

        // populate user in redux store
        currentUser(idTokenResult.token)
          .then(
            (res) => {
              dispatch({
                type: 'LOGGED_IN_USER',

                payload: {
                  name: res.data.name,
                  email: res.data.email,
                  token: idTokenResult.token,
                  role: res.data.role,
                  _id: res.data._id,
                },

              });
            }

          )
          .catch((err) => {
            console.log(err.message);
          })
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
        <UserRoute exact path="/user/history" component={History} />
        <UserRoute exact path="/user/Password" component={Password} />
        <UserRoute exact path="/user/Wishlist" component={Wishlist} />
        <AdminRoute exact path="/admin/dashboard" component={AdminDashboard} />
      </Switch>
      <Footer />
    </Fragment>
  );
}

export default App;
