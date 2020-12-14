import React from 'react';
import header from '../../assets/images/ReyHeader.png';
import mobileHeader from '../../assets/images/mobilerey.png';

const Header = () => {
    return (
        <div className="Header container-fluid">
            <picture>
                <source srcSet={header} media="(min-width: 760px)" id="Header_imgLrg" className="img-fluid m-auto" />
                <img src={mobileHeader} alt="Rey of Sun Art" id="Header_img" className="img-fluid m-auto" />
            </picture>

        </div>
    )
}

export default Header;
