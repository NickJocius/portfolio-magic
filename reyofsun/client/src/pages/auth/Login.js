import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { auth, googleAuthProvider } from '../../firebase';
import { toast } from 'react-toastify';
import { Button } from 'antd';
import { MailOutlined, GoogleOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import loadgif from '../../assets/images/loading.gif';


const Login = ({ history }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const { user } = useSelector((state) => ({ ...state }));

    useEffect(() => {
        if (user && user.token) {
            history.push("/");
        }
    }, [user]);

    let dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);

        try {
            const result = await auth.signInWithEmailAndPassword(email, password);
            const { user } = result;
            const idTokenResult = await user.getIdTokenResult();
            dispatch({
                type: 'LOGGED_IN_USER',

                payload: {

                    email: user.email,
                    token: idTokenResult.token
                },

            });

            history.push("/");

        } catch (error) {

            console.log(error);
            toast.error(error.message);
            setLoading(false);
        }

    };

    const googleLogin = async (e) => {
        auth.signInWithPopup(googleAuthProvider).then(async (result) => {
            const { user } = result
            const idTokenResult = await user.getIdTokenResult();
            dispatch({
                type: 'LOGGED_IN_USER',

                payload: {

                    email: user.email,
                    token: idTokenResult.token
                },

            });
            history.push("/");
        })
            .catch((err) => {
                console.log(err);
                toast.error(err.message);
            })
    };

    const loginForm = () => {
        return <form onSubmit={handleSubmit}>
            <div className="form-group">
                <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Enter email"
                    autoFocus
                />
            </div>

            <div className="form-group  my-3">
                <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="Enter password"
                />
            </div>


            <Button
                type="primary"
                onClick={handleSubmit}
                block shape="round"
                icon={<MailOutlined />}
                size="large"
                className="my-3"
                disabled={!email || password.length < 6}
            >
                Login With Email/Password
                </Button>
        </form>
    };

    return (

        <div className="container p-5">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    {!loading ? (
                        <h4>Login</h4>)
                        : (
                            <div className="d-flex justify-content-center align-content-center">
                                <img src={loadgif} alt="loading gif" className="m-auto" />
                            </div>

                        )}

                    {loginForm()}
                    <Button
                        type="danger"
                        onClick={googleLogin}
                        block shape="round"
                        icon={<GoogleOutlined />}
                        size="large"
                    >
                        Login With Google
                </Button>
                    <div className="d-flex justify-content-center">
                        <Link to="/forgot/password" className="text-center">Forgot Password</Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;