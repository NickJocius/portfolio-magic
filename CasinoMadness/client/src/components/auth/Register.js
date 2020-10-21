import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import { Redirect, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// pull setAlert out of the prop
const Register = ({ setAlert, register, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',

    });

    const { username, email, password } = formData;
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
    const onSubmit = async e => {
        e.preventDefault();
        register({ username, email, password });
    };

    // Redirect if logged in
    if (isAuthenticated) {
        return <Redirect to="/dashboard" />;
    }
    return (
        <Fragment>
            <div className="container-fluid h-100 d-flex align-content-center newForm">
                <div className="container-lg p-5 d-flex align-content-center m-auto justify-content-center h-75">
                    <form onSubmit={e => onSubmit(e)} className="bg-light opaque9 px-5 w-90 py-5">
                        <div className="form-row justify-content-center">
                            <div className="form-group col-auto">
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    name="email"
                                    value={email}
                                    onChange={onChange}
                                />
                            </div>
                        </div>
                        <div className="form-row justify-content-center">
                            <div className="form-group col-auto">
                                <input
                                    type="text"
                                    placeholder="Username"
                                    name="username"
                                    value={username}
                                    onChange={onChange}
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
                                />
                            </div>
                        </div>
                        <div className="form-row justify-content-center">
                            <div className="form-group col-auto">
                                <input className="btn btn-danger mt-4" type="submit" value="Register" onClick={e => onSubmit(e)} />
                            </div>
                        </div>
                        <p className="my-1">
                            Already have an account? <Link to="/login">Sign In</Link>
                        </p>
                    </form>
                </div>
            </div>
        </Fragment >
    )
}

Register.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
}
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

// export connect and add settler action to use it
export default connect(mapStateToProps, { setAlert, register })(Register);
