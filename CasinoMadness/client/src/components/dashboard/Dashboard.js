import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DashboardActions from './DashboardActions';
import ProfileTop from '../profile/ProfileTop';
import Wins from './Wins';
import Losses from './Losses';
import { getCurrentProfile, deleteAccount } from '../../actions/profile';

const Dashboard = ({
    getCurrentProfile,
    deleteAccount,
    auth: { user },
    profile: { profile }
}) => {
    useEffect(() => {
        getCurrentProfile();
    }, [getCurrentProfile]);

    return (
        <Fragment>
            <h1 className="text-white">Dashboard</h1>
            <div className="text-danger py-4 mb-4 d-flex flex-column flex-sm-row align-items-center justify-content-between">
                <span className="p-3"><i className="fas fa-user text-white" /> Welcome {user && user.username}</span>
                <span className="text-monospace p-3">Bank: <i className="fas fa-dollar-sign text-white"></i>{profile && profile.bank}</span>
            </div>
            {profile !== null ? (
                <Fragment>
                    <ProfileTop bio={profile.bio} status={profile.status} location={profile.location} />
                    <Wins wins={profile.wins} />
                    <Losses losses={profile.losses} />
                    <DashboardActions />
                    <div className="d-flex justify-content-center my-5 py-2">
                        <button className="btn btn-danger" onClick={() => deleteAccount()}>
                            <i className="fas fa-user-minus text-white" /> Delete My Account
                        </button>
                    </div>
                </Fragment>
            ) : (
                    <Fragment>
                        <p>You have not yet setup a profile, please add some info</p>
                        <Link to="/create-profile" className="btn btn-primary my-1">
                            Create Profile
                        </Link>
                    </Fragment>
                )}
        </Fragment>
    );
};

Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    deleteAccount: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    auth: state.auth,
    profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
    Dashboard
);