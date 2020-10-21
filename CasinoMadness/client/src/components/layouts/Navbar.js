import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated }, logout }) => {

    const authLinks = (
        <Fragment>
            <ul className="navbar-nav navbar-light">
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                        aria-expanded="false">
                        Our Games
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <Link className="dropdown-item" to="/blackJack">BlackJack</Link>
                        <Link className="dropdown-item" to="/drawpoker">5 Card Draw</Link>
                        <div className="dropdown-divider"></div>
                        <Link className="dropdown-item" to="#">Craps</Link>
                        <Link className="dropdown-item" to="#">Roullette</Link>
                        <Link className="dropdown-item" to="#">Slots</Link>
                    </div>
                </li>
            </ul >
            <ul className="navbar-nav navbar-light navbar-right">
                <li className="nav-item">
                    <Link to="/dashboard" className="nav-link"><i className="fa fa-user" aria-hidden="true"></i>Profile</Link>
                </li>
                <li className="nav-item">
                    <a onClick={logout} className="nav-link"><i className="fa fa-sign-in" aria-hidden="true"></i> LogOut</a>
                </li>
            </ul>
        </Fragment>
    );

    const guestLinks = (
        <ul className="navbar-nav navbar-light navbar-right">
            <li className="nav-item">
                <Link to="/register" className="nav-link" exact><i className="fa fa-user" aria-hidden="true"></i>Sign Up</Link>
            </li>
            <li className="nav-item">
                <Link to="/login" className="nav-link" exact><i className="fa fa-sign-in" aria-hidden="true"></i> LogIn</Link>
            </li>
        </ul>
    );
    const [isOpen, setOpen] = useState(false);
    return (
        <nav className="navbar navbar-expand-lg navbar-dark sticky-top is-primary" aria-label="main navigation" role="navigation">
            <a className="navbar-brand text-danger" to="/">Casino Madness</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className={`navbar-toggler-icon ${isOpen && "is-active"}`} aria-label="menu" aria-expanded="false" role="button" onClick={() => setOpen(!isOpen)}></span>
            </button>

            <div className={`collapse navbar-collapse ${isOpen && "is-active"}`} id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link activeClassName="is-active" className="nav-link" to="/" exact>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link activeClassName="is-active" className="nav-link" to="/about" exact>About</Link>
                    </li>
                </ul>
                <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
            </div>
        </nav>
    );
};

Navbar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    auth: state.auth
});
export default connect(mapStateToProps, { logout })(Navbar);
