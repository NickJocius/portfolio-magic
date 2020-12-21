import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { Menu } from 'antd';
import { HomeOutlined, SettingOutlined, UserAddOutlined, UserOutlined, LogoutOutlined } from '@ant-design/icons';
import firebase from 'firebase';
import { useDispatch, useSelector } from 'react-redux';


const { SubMenu, Item } = Menu;

const Navbar = () => {

    const [current, setCurrent] = useState('home');
    let dispatch = useDispatch();
    let { user } = useSelector((state) => ({ ...state }));
    let history = useHistory();

    const handleClick = (e) => {
        setCurrent(e.key);
    };

    const logout = () => {
        firebase.auth().signOut();
        dispatch({
            type: "LOGOUT",
            payload: null
        });
        history.push('/login');
    }

    return (

        <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal" id="Navbar">

            <Item key="home" icon={<HomeOutlined />}>
                <Link to="/" className="Nav_item">Home</Link>
            </Item>

            {user && (
                <SubMenu
                    key="SubMenu"
                    icon={<SettingOutlined />}
                    title={user.email && user.email.split('@')[0]}
                    className="Nav_item float-right"
                >
                    {user && user.role === "subscriber" && (
                        <Item>
                            <Link to="/user/history">Dashboard</Link>
                        </Item>
                    )}

                    {user && user.role === "admin" && (
                        <Item>
                            <Link to="/admin/dashboard">Dashboard</Link>
                        </Item>
                    )}

                    <Item key="cart">Cart</Item>
                    <Item key="logout" id="logout" icon={<LogoutOutlined />} onClick={logout}>Logout</Item>
                </SubMenu>
            )}

            {!user && (
                <Item key="register" icon={<UserAddOutlined />} className="float-right">
                    <Link to="/register" className="Nav_item">Register</Link>
                </Item>
            )}

            {!user && (
                <Item key="login" icon={<UserOutlined />} className="float-right">
                    <Link to="/login">Login</Link>
                </Item>
            )}

        </Menu>
    )
}

export default Navbar;