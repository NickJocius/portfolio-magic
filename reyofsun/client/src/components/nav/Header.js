import React from 'react';
import header from '../../assets/images/ReyHeader.png';

const Header = () => {
    return (
        <div className="Header container-fluid">
            <img src={header} alt="Rey of Sun Art" id="Header_img" className="img-fluid m-auto" />
        </div>
    )
}

export default Header;
