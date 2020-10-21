import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
// import PropTypes from 'prop-types';

const Login = ({ login, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const { email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
    const onSubmit = async e => {
        e.preventDefault();
        login({ email, password });
    };

    // Redirect if logged in
    if (isAuthenticated) {
        return <Redirect to="/dashboard" />;
    }
    return (
        <Fragment>
            <div className="container-fluid h-100 d-flex align-content-center newForm">
                <div className="container-lg p-5 d-flex align-content-center justify-content-center w-100 m-auto h-75">

                    <form onSubmit={onSubmit} className="bg-light opaque9 px-5 w-90 py-5">
                        <p className="text-center">Sign In</p>
                        <div className="form-row justify-content-center">
                            <div className="form-group col-auto">
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    name="email"
                                    value={email}
                                    onChange={onChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-row justify-content-center">
                            <div className="form-group col-auto">
                                <input
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    value={password}
                                    onChange={onChange}
                                    minLength="6"
                                />
                            </div>
                        </div>
                        <div className="form-row justify-content-center">
                            <div className="form-group col-auto">
                                <input type="submit" className="btn btn-danger mt-4" value="Login" />
                            </div>
                        </div>
                        <p className="m-auto">
                            Don't have an account? <Link to="/register">Sign Up</Link>
                        </p>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}

Login.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool

};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
