// pages/login.js
import firebase from "../firebase";
import { useState } from "react";
import { useRouter } from "next/router";
import LoginRegisterForm from "../components/LoginRegisterForm";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from 'antd';
import 'antd/dist/antd.css';
import { GoogleOutlined } from '@ant-design/icons';

const Login = () => {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPass, setLoginPass] = useState("");
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPass, setRegisterPass] = useState("");
    const router = useRouter();

    const register = async () => {
        // console.log(registerEmail, registerPass);
        await firebase.auth().createUserWithEmailAndPassword(registerEmail, registerPass)
            .then((user) => {
                console.log("Register", user);
                toast.success("Registration Complete", user.email, {
                    position: toast.POSITION.TOP_CENTER
                });
            })
            .catch((err) => {
                console.log(err);
                toast.error(`Registration Error: ${err}`, {
                    position: toast.POSITION.TOP_CENTER
                });
            });

    };

    const login = async () => {
        // console.log(loginEmail, loginPass);
        await firebase.auth().signInWithEmailAndPassword(loginEmail, loginPass)
            .then((user) => {
                console.log('Login', user);
                toast.success("Login Successful", user.email, {
                    position: toast.POSITION.TOP_CENTER
                });
            }
            ).catch((err) => {
                console.log(err);
                toast.error(`Login Error: ${err}`, {
                    position: toast.POSITION.TOP_CENTER
                });
            })
    };

    const googleLogin = async () => {
        await firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
            .then((user) => {
                console.log('Login', user);
                toast.success("Login Successful", user.email, {
                    position: toast.POSITION.TOP_CENTER
                });
            }
            ).catch((err) => {
                console.log(err);
                toast.error(`Login Error: ${err}`, {
                    position: toast.POSITION.TOP_CENTER
                });
            })
    };

    return (
        <div className="container">
            <h2 className="text-center pt-4 display-4">Login / Register</h2>

            <div className="row">
                <LoginRegisterForm
                    email={loginEmail}
                    setEmail={setLoginEmail}
                    pass={loginPass}
                    setPass={setLoginPass}
                    handleSubmit={login}
                    buttonName="Login"
                />

                <LoginRegisterForm
                    email={registerEmail}
                    setEmail={setRegisterEmail}
                    pass={registerPass}
                    setPass={setRegisterPass}
                    handleSubmit={register}
                    buttonName="Register"
                />
            </div>
            <Button
                onClick={googleLogin}
                className="my-4 col-md-6 offset-md-3"
                type="danger"
                block shape="round"
                icon={<GoogleOutlined />}
            >
                Login in with Google
            </Button>
        </div>
    );
};

export default Login;

