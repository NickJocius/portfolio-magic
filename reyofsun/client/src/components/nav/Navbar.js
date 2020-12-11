import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import { HomeOutlined, SettingOutlined, UserAddOutlined, UserOutlined } from '@ant-design/icons';

const { SubMenu, Item } = Menu;

const Navbar = () => {

    const [current, setCurrent] = useState('home');

    const handleClick = (e) => {
        setCurrent(e.key);
    }

    return (

        <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal" id="Navbar">

            <Item key="home" icon={<HomeOutlined />}>
                <Link to="/" className="Nav_item">Home</Link>
            </Item>

            <SubMenu
                key="SubMenu"
                icon={<SettingOutlined />}
                title="Username"
                className="Nav_item"
            >
                <Item key="dashboard">Dashboard</Item>
                <Item key="cart">Cart</Item>

            </SubMenu>

            <Item key="register" icon={<UserAddOutlined />} className="float-right">
                <Link to="/register" className="Nav_item">Register</Link>
            </Item>

            <Item key="login" icon={<UserOutlined />} className="float-right">
                <Link to="/login">Login</Link>
            </Item>

        </Menu>
    )
}

export default Navbar;