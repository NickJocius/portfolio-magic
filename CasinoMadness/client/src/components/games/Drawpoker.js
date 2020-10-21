import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Instructions from '../games/Instructions';
import PokerOdds from '../games/PokerOdds';
import PokerBoard from '../games/PokerBoard';
import { loadUser } from '../../actions/auth';
import { getCurrentProfile } from '../../actions/profile';

const Drawpoker = ({ loadUser, profile: { profile } }) => {
    useEffect(() => {
        loadUser();
    }, [loadUser]);

    useEffect(() => {
        getCurrentProfile();
    }, [getCurrentProfile])


    return (
        <div className="container-fluid d-flex flex-column">
            <h1 className="my-2 py-4" id="titleh1">5 Card Draw</h1>
            <section id="pokerTable" className="container-fluid  d-flex justify-content-around py-0 mb-4">
                <div id="hand" className="container-fuid m-auto">
                    <PokerBoard />
                </div>
            </section>
            <section className="container-md d-flex p-3 my-2 flex-column align-content-center" id="instructions">
                <form className="row flex-column-xs flex-row-md align-content-center mt-4" id="save">
                    <button className="btn btn-sm btn-danger m-auto form-control" id="saveBtn" type="submit">Save</button>
                    <span id="bank">{profile && profile.bank}</span>
                </form>
                <Instructions />
            </section>
            <PokerOdds />

        </div>
    )
};

Drawpoker.propTypes = {
    loadUser: PropTypes.func.isRequired,
    getCurrentProfile: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.auth,
    profile: state.profile
});

export default connect(mapStateToProps, { loadUser, getCurrentProfile })(
    Drawpoker
);

