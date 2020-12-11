import React, { useState, useEffect } from 'react';
import { auth } from '../../firebase';
import { toast } from 'react-toastify';

// destructure props history
const RegisterComplete = ({ history }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState('');

    useEffect(() => {

        // Grab email from local storage
        setEmail(window.localStorage.getItem('emailForRegistration'));

    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();

        // validation
        if (!email || !password) {
            toast.error("Email and Password is required");
            return;
        }
        // password length validation
        if (password.length > 6) {
            toast.error("Password must be at least 6 characters long");
            return;
        }

        // use firbase signInWithEmailLink
        try {

            const result = await auth.signInWithEmailLink(email, window.location.href);

            if (result.user.emailVerified) {
                // remove user email from local storage
                window.localStorage.removeItem('emailForRegistration');

                // get user id token and update user with password
                let user = auth.currentUser;
                await user.updatePassword(password);
                const idTokenResult = await user.getIdTokenResult();

                // populate user in redux store

                // redirect
                history.push('/');
            }

        } catch (error) {

            console.log(error);
            toast.error(error.message);

        }

    };

    const completeRegistrationForm = () => {
        return <form onSubmit={handleSubmit}>
            <input
                type="email"
                className="form-control"
                value={email}
                disabled
            />
            <input
                type="password"
                className="form-control"
                value={password}
                onChange={e => setPassword(e.target.value)}
                autoFocus
                placeholder="Enter your password"
            />

            <button type="submit" className="btn btn-raised mt-4">Complete Registration</button>
        </form>
    };

    return (

        <div className="container p-5">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h4>Registration Complete</h4>
                    {completeRegistrationForm()}
                </div>
            </div>
        </div>
    );
};

export default RegisterComplete;
