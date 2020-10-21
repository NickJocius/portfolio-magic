import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

const Navbar = () => {





    return (
        <Fragment>
            <nav className="navbar Navbar navbar-expand-lg container-fluid sticky-top mb-1">
                <div className="container" >
                    <span className=" titleSpan p-1">Nick</span><span className="titleSpan p-1 mr-auto text-white">Jocius</span>
                </div>

                <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"><i className="fas fa-bars  hamburger"></i></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ml-auto">
                        <NavLink className="nav-link" exact activeClassName='active-link' to="/">Home <span className="sr-only">(current)</span></NavLink>
                        <NavLink className="nav-link" exact activeClassName='active-link' to="/works">Works</NavLink>
                        <NavLink className="nav-link" exact activeClassName='active-link' to="/resume">Resume</NavLink>
                    </div>
                </div>
            </nav>
        </Fragment>

    )
}

export default Navbar;
