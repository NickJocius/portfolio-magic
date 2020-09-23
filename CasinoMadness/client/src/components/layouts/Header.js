import React from 'react';
import headerImage from '../../images/Casino.png';

const Header = () => {
    return (
        <header className="container-fluid p-0">
            <img src={headerImage} alt="" className="w-100 p-0 h-100" />
        </header>
    )
}

export default Header;
