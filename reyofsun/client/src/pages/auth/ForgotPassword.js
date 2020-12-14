import React, { useState, useEffect } from 'react';
import { auth } from '../../firebase';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import loadgif from '../../assets/images/loading.gif';


const ForgotPassword = ({ history }) => {

    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const { user } = useSelector((state) => ({ ...state }));

    useEffect(() => {
        if (user && user.token) {
            history.push("/");
        }
    }, [user]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const config = {
            url: process.env.REACT_APP_FORGOT_PASSWORD_REDIRECT,
            handleCodeInApp: true
        }

        await auth.sendPasswordResetEmail(email, config).then(() => {
            setEmail('');
            setLoading(false);
            toast.success("Check email for reset link")
        })
            .catch((error) => {
                setLoading(false);
                toast.error(error.message);
            });
    };

    return (
        <div className="container col-md-6 offset-md-3 p-5">
            {!loading ? (
                <h4>Forgot Password</h4>
            ) : (
                    <div className="d-flex justify-content-center align-content-center">
                        <img src={loadgif} alt="loading gif" className="m-auto" />
                    </div>

                )}
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    className="form-control"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    placeholder="Type Email"
                    autofocus
                />
                <button className="btn btn-raised" disabled={!email}>Submit</button>
            </form>
        </div>
    );
};

export default ForgotPassword;
