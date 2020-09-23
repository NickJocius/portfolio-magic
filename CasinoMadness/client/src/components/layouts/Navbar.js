import React from 'react'

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark sticky-top">
            <a className="navbar-brand text-danger" href="/">Casino Madness</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                    </li>
                </ul>
                <ul className="navbar-nav navbar-light navbar-right">
                    <li className="nav-item">
                        <a href="/users/new" className="nav-link"><i className="fa fa-user" aria-hidden="true"></i>Sign Up</a>
                    </li>
                    <li className="nav-item">
                        <a href="/users/login" className="nav-link"><i className="fa fa-sign-in" aria-hidden="true"></i> LogIn</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
