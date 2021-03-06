import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from '../auth/Register';
import Login from '../auth/Login';
import Alert from '../layouts/Alert';
import Dashboard from '../dashboard/Dashboard';
import Drawpoker from '../games/Drawpoker';
// import ProfileForm from '../profile-forms/ProfileForm';
/* import AddExperience from '../profile-forms/AddExperience';
import AddEducation from '../profile-forms/AddEducation'; */
import NotFound from '../layouts/NotFound';
import PrivateRoute from '../routing/PrivateRoute';

const Routes = props => {
    return (
        <section className="container-fluid body">
            <Alert />
            <Switch>
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
                <PrivateRoute exact path="/drawpoker" component={Drawpoker} />
                {/* <PrivateRoute exact path="/create-profile" component={ProfileForm} />
                <PrivateRoute exact path="/edit-profile" component={ProfileForm} /> */}
                {/* <PrivateRoute exact path="/add-experience" component={AddExperience} />
                <PrivateRoute exact path="/add-education" component={AddEducation} />
            */}
                <Route component={NotFound} />
            </Switch>
        </section>
    );
};

export default Routes;