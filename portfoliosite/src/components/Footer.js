import React from 'react';

const Footer = () => {


    const date = new Date().getFullYear();


    return (
        <footer className="Footer align-items-center d-flex flex-column justify-content-center flex-sm-row ">
            <p className="d-flex flex-sm-row align-items-center flex-column justify-content-center p-4 m-auto text-center">
                Nick Jocius &copy; {date} All Rights Reserved
            </p>
        </footer>
    )
}

export default Footer;
